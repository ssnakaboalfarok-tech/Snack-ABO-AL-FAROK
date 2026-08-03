/* =====================================================================
   HERO NEON BURGER — Three.js
   - Burger is a STATIC line-outline (no rotation / movement / scaling).
   - Only animation: neon glow "breathing" every ~4.5s.
   - Subtle, extremely slow drifting smoke/fog as background atmosphere.
   - Lightweight: line geometry + a handful of soft sprites.
===================================================================== */
import * as THREE from "/vendor/three.module.js";

const canvas = document.getElementById("heroCanvas");
if (canvas && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  initHero(canvas);
} else if (canvas) {
  // Reduced motion: draw a single static frame with steady glow.
  initHero(canvas, { still: true });
}

function initHero(canvas, opts = {}) {
  const still = !!opts.still;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 11);

  const ORANGE = 0xff7a18;

  /* ---------- BURGER OUTLINE (static) ---------- */
  const burger = new THREE.Group();

  // Helper: build a closed rounded shape from a set of points → line loop
  function lineFromPoints(points, closed = true) {
    const pts = points.map((p) => new THREE.Vector3(p[0], p[1], 0));
    if (closed) pts.push(pts[0].clone());
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    return geo;
  }

  // Arc helper (returns [x,y] array)
  function arc(cx, cy, rx, ry, a0, a1, steps) {
    const out = [];
    for (let i = 0; i <= steps; i++) {
      const t = a0 + (a1 - a0) * (i / steps);
      out.push([cx + Math.cos(t) * rx, cy + Math.sin(t) * ry]);
    }
    return out;
  }

  // Top bun (dome) + sesame handled as small dots
  const topBun = [
    ...arc(0, 0.55, 2.35, 1.65, Math.PI, 0, 40), // dome from left to right
    [2.35, 0.4],
    [-2.35, 0.4],
  ];

  // A generic horizontal "layer" (rounded rectangle-ish) centered at y
  function layer(y, halfW, halfH, r) {
    return [
      ...arc(halfW - r, y + halfH - r, r, r, Math.PI * 0.5, 0, 8),
      ...arc(halfW - r, y - halfH + r, r, r, 0, -Math.PI * 0.5, 8),
      ...arc(-halfW + r, y - halfH + r, r, r, -Math.PI * 0.5, -Math.PI, 8),
      ...arc(-halfW + r, y + halfH - r, r, r, Math.PI, Math.PI * 0.5, 8),
    ];
  }

  // Lettuce as a wavy strip
  function lettuce(y) {
    const out = [];
    const w = 2.5, seg = 26, amp = 0.28;
    for (let i = 0; i <= seg; i++) {
      const x = -w + (2 * w) * (i / seg);
      out.push([x, y + Math.sin(i * 1.1) * amp]);
    }
    for (let i = seg; i >= 0; i--) {
      const x = -w + (2 * w) * (i / seg);
      out.push([x, y - 0.18 + Math.cos(i * 1.1) * amp * 0.4]);
    }
    return out;
  }

  const layers = [
    { pts: topBun, closed: false },
    { pts: lettuce(-0.35), closed: true },
    { pts: layer(-0.95, 2.45, 0.32, 0.28), closed: true }, // tomato
    { pts: layer(-1.6, 2.55, 0.42, 0.2), closed: true },   // patty
    { pts: layer(-2.35, 2.4, 0.45, 0.42), closed: true },  // bottom bun
  ];

  const glowMats = [];
  const coreMats = [];

  layers.forEach((L) => {
    const geo = lineFromPoints(L.pts, L.closed);

    // Wide soft glow line (additive, low opacity)
    const glowMat = new THREE.LineBasicMaterial({
      color: ORANGE,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const glowLine = new THREE.Line(
      geo,
      glowMat,
    );
    glowLine.scale.set(1.03, 1.03, 1.03);
    burger.add(glowLine);
    glowMats.push(glowMat);

    // Bright thin core line
    const coreMat = new THREE.LineBasicMaterial({
      color: 0xffb066,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const coreLine = new THREE.Line(geo, coreMat);
    burger.add(coreLine);
    coreMats.push(coreMat);
  });

  // Sesame seeds as tiny points on the dome
  const seedPos = [];
  const seedCoords = [
    [-1.1, 1.4], [-0.4, 1.75], [0.4, 1.78], [1.1, 1.45],
    [-0.75, 1.0], [0.0, 1.15], [0.75, 1.0],
  ];
  seedCoords.forEach((s) => seedPos.push(s[0], s[1], 0.01));
  const seedGeo = new THREE.BufferGeometry();
  seedGeo.setAttribute("position", new THREE.Float32BufferAttribute(seedPos, 3));
  const seedMat = new THREE.PointsMaterial({
    color: 0xffd9a0,
    size: 0.14,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  burger.add(new THREE.Points(seedGeo, seedMat));

  burger.position.y = 0.4;
  scene.add(burger);

  /* ---------- SMOKE / FOG SPRITES (very slow, subtle, background) ---------- */
  const smokeTex = makeSmokeTexture();
  const smokeMat = new THREE.SpriteMaterial({
    map: smokeTex,
    color: 0xff8a3a,
    transparent: true,
    opacity: 0.05,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const smokes = [];
  const SMOKE_COUNT = 6;
  for (let i = 0; i < SMOKE_COUNT; i++) {
    const s = new THREE.Sprite(smokeMat.clone());
    const scale = 3 + Math.random() * 3;
    s.scale.set(scale, scale, 1);
    s.position.set((Math.random() - 0.5) * 5, -2 + Math.random() * 5, -2 - Math.random() * 2);
    s.userData.speed = 0.02 + Math.random() * 0.03; // extremely slow
    s.userData.baseX = s.position.x;
    s.userData.phase = Math.random() * Math.PI * 2;
    scene.add(s);
    smokes.push(s);
  }

  /* ---------- RESIZE ---------- */
  function resize() {
    const w = canvas.clientWidth || canvas.offsetWidth;
    const h = canvas.clientHeight || canvas.offsetHeight;
    if (w === 0 || h === 0) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;

    // Responsive scaling of the burger so it fits nicely.
    const isMobile = w < 720;
    const isTablet = w >= 720 && w < 1024;
    let s = 1;
    if (isMobile) s = 0.9;
    else if (isTablet) s = 0.95;
    burger.scale.set(s, s, s);
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", resize);
  resize();

  /* ---------- ANIMATION LOOP (glow + smoke only) ---------- */
  const clock = new THREE.Clock();
  let running = true;

  // Pause rendering when hero is off-screen (perf).
  const heroEl = document.getElementById("home");
  if ("IntersectionObserver" in window && heroEl) {
    const io = new IntersectionObserver((entries) => {
      running = entries[0].isIntersecting;
      if (running && !still) clock.getDelta(); // reset delta
    }, { threshold: 0.01 });
    io.observe(heroEl);
  }

  function render() {
    const t = clock.getElapsedTime();

    // Neon breathing: full cycle ~4.5s. Range keeps it bright & vibrant.
    const pulse = 0.5 + 0.5 * Math.sin((t / 4.5) * Math.PI * 2);
    const glowOpacity = 0.22 + pulse * 0.35;   // 0.22 -> 0.57
    const coreOpacity = 0.7 + pulse * 0.3;     // 0.7  -> 1.0
    const glowScale = 1.02 + pulse * 0.05;

    glowMats.forEach((m) => (m.opacity = glowOpacity));
    coreMats.forEach((m) => (m.opacity = coreOpacity));
    burger.children.forEach((c) => {
      if (c.isLine && c.material.opacity === glowOpacity) {
        c.scale.set(glowScale, glowScale, glowScale);
      }
    });

    // Smoke: drift upward extremely slowly, wrap around. Burger stays put.
    smokes.forEach((s) => {
      s.position.y += s.userData.speed * 0.06;
      s.position.x = s.userData.baseX + Math.sin(t * 0.1 + s.userData.phase) * 0.3;
      if (s.position.y > 4) {
        s.position.y = -3;
        s.userData.baseX = (Math.random() - 0.5) * 5;
      }
    });

    renderer.render(scene, camera);
  }

  function loop() {
    if (running) render();
    requestAnimationFrame(loop);
  }

  if (still) {
    // Single steady frame for reduced-motion users.
    glowMats.forEach((m) => (m.opacity = 0.5));
    coreMats.forEach((m) => (m.opacity = 1));
    renderer.render(scene, camera);
  } else {
    loop();
  }
}

/* ---------- Soft radial smoke texture (canvas) ---------- */
function makeSmokeTexture() {
  const size = 128;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d");
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,0.6)");
  g.addColorStop(0.4, "rgba(255,255,255,0.18)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  return tex;
}
