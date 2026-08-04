/* =====================================================================
   APP LOGIC (Vanilla JS)
   - Sticky navbar + scroll state + active section highlight
   - Mobile hamburger menu (auto-close on select)
   - Categorized menu with up to 2 sub-levels
   - Lazy image loading, entrance animation, image zoom lightbox
   - Scroll reveal animations
===================================================================== */

const pin = document.querySelector(".map-pin1");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight) {
    pin.style.position = "absolute";
    pin.style.bottom = "auto";
    pin.style.top = `${window.scrollY + footerTop - pin.offsetHeight - 20}px`;
  } else {
    pin.style.position = "fixed";
    pin.style.top = "auto";
    pin.style.bottom = "25px";
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}

// =============== Install Window ===============
window.addEventListener("DOMContentLoaded", () => {

  let deferredPrompt;

const installBox = document.getElementById("installBox");
const installBtn = document.getElementById("installBtn");
const closeInstall = document.getElementById("closeInstall");


window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  setTimeout(() => {
    installBox.style.display = "block";
  }, 15000);
});


installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();

  const result = await deferredPrompt.userChoice;

  if (result.outcome === "accepted") {
    console.log("Installed");
  }

  deferredPrompt = null;
  installBox.style.display = "none";
});


closeInstall.addEventListener("click", () => {
  installBox.style.display = "none";
});
  
});


(function () {
  "use strict";

  /* =============== NAVBAR =============== */
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const links = Array.from(document.querySelectorAll(".nav-link"));

  // Scrolled state
  const onScroll = () => {
    if (window.scrollY > 20) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
  });

  // Close mobile menu after selecting a link
  links.forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Active section highlight via IntersectionObserver
  const sections = ["home", "about", "menu", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach((a) => a.classList.toggle("active", a.dataset.section === id));
  };

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* =============== SCROLL REVEAL =============== */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const ro = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => ro.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* =============== MENU =============== */
  const MENU = window.MENU;
  const mainTabs = document.getElementById("mainTabs");
  const subTabs = document.getElementById("subTabs");
  const subTabs2 = document.getElementById("subTabs2");
  const grid = document.getElementById("cardsGrid");

  const formatPrice = (n) =>
    n.toLocaleString("en-US"); // grouped digits, kept LTR-friendly

  let state = { cat: null, sub: null, sub2: null };

  function getCategory(id) {
    return MENU.categories.find((c) => c.id === id);
  }

  function buildMainTabs() {
    mainTabs.innerHTML = "";
    MENU.categories.forEach((c) => {
      const btn = document.createElement("button");
      btn.className = "tab";
      btn.textContent = c.name;
      btn.setAttribute("role", "tab");
      btn.addEventListener("click", () => selectCategory(c.id));
      btn.dataset.id = c.id;
      mainTabs.appendChild(btn);
    });
  }

  function selectCategory(catId) {
    state.cat = catId;
    state.sub = null;
    state.sub2 = null;

    // highlight main tab
    Array.from(mainTabs.children).forEach((b) =>
      b.classList.toggle("active", b.dataset.id === catId)
    );

    const cat = getCategory(catId);

    // Level 1 sub tabs
    if (cat.subs && cat.subs.length) {
      subTabs.hidden = false;
      subTabs.innerHTML = "";
      cat.subs.forEach((s, i) => {
        const btn = document.createElement("button");
        btn.className = "subtab";
        btn.textContent = s.name;
        btn.setAttribute("role", "tab");
        btn.dataset.id = s.id;
        btn.addEventListener("click", () => selectSub(catId, s.id));
        subTabs.appendChild(btn);
      });
      // auto-select first sub
      selectSub(catId, cat.subs[0].id);
    } else {
      subTabs.hidden = true;
      subTabs.innerHTML = "";
      subTabs2.hidden = true;
      subTabs2.innerHTML = "";
      renderCards();
    }
  }

  function selectSub(catId, subId) {
    state.sub = subId;
    state.sub2 = null;

    Array.from(subTabs.children).forEach((b) =>
      b.classList.toggle("active", b.dataset.id === subId)
    );

    const cat = getCategory(catId);
    const sub = cat.subs.find((s) => s.id === subId);

    // Level 2 sub tabs
    if (sub.subs2 && sub.subs2.length) {
      subTabs2.hidden = false;
      subTabs2.innerHTML = "";
      sub.subs2.forEach((s2) => {
        const btn = document.createElement("button");
        btn.className = "subtab";
        btn.textContent = s2.name;
        btn.setAttribute("role", "tab");
        btn.dataset.id = s2.id;
        btn.addEventListener("click", () => selectSub2(s2.id));
        subTabs2.appendChild(btn);
      });
      selectSub2(sub.subs2[0].id);
    } else {
      subTabs2.hidden = true;
      subTabs2.innerHTML = "";
      renderCards();
    }
  }

  function selectSub2(sub2Id) {
    state.sub2 = sub2Id;
    Array.from(subTabs2.children).forEach((b) =>
      b.classList.toggle("active", b.dataset.id === sub2Id)
    );
    renderCards();
  }

  function filterItems() {
    return MENU.items.filter((it) => {
      if (it.cat !== state.cat) return false;
      if (state.sub && it.sub !== state.sub) return false;
      if (state.sub2 && it.sub2 !== state.sub2) return false;
      return true;
    });
  }

  function renderCards() {
    const items = filterItems();
    grid.innerHTML = "";

    if (!items.length) {
      const empty = document.createElement("p");
      empty.className = "menu-empty";
      empty.textContent = "لا توجد أصناف في هذا القسم حالياً.";
      grid.appendChild(empty);
      return;
    }

    items.forEach((it, idx) => {
      const card = document.createElement("article");
      card.className = "food-card";

      card.innerHTML = `
        <div class="food-media">
          <img src="${it.img}" alt="${it.name}" loading="lazy" decoding="async" width="400" height="300" />
          <button class="zoom-btn" aria-label="تكبير صورة ${it.name}" data-img="${it.img}" data-name="${it.name}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          </button>
        </div>
        <div class="food-body">
          <h3 class="food-name">${it.name}</h3>
          <p class="food-ingredients">${it.ingredients}</p>
          <div class="food-foot">
            <span class="food-price">${formatPrice(it.price)} <small>ل.س</small></span>
            <button class="order-btn">اطلب الآن</button>
          </div>
        </div>
      `;

      grid.appendChild(card);

      // entrance animation (staggered)
      requestAnimationFrame(() => {
        setTimeout(() => card.classList.add("in"), Math.min(idx * 70, 500));
      });

      // zoom
      card.querySelector(".zoom-btn").addEventListener("click", (e) => {
        const t = e.currentTarget;
        openLightbox(t.dataset.img, t.dataset.name);
      });

      // order -> scroll to contact
      card.querySelector(".order-btn").addEventListener("click", () => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  /* =============== LIGHTBOX =============== */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "معاينة الطبق";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => lightbox.classList.add("show"));
  }
  function closeLightbox() {
    lightbox.classList.remove("show");
    document.body.style.overflow = "";
    setTimeout(() => { lightbox.hidden = true; }, 300);
  }
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });

  /* =============== INIT =============== */
  if (MENU && MENU.categories.length) {
    buildMainTabs();
    selectCategory(MENU.categories[0].id);
  }
})();
