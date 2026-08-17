/**
 * Vercel Web Analytics Configuration
 * 
 * This script configures Vercel Web Analytics for the site.
 * The main analytics script is loaded via CDN (see index.html).
 * 
 * The @vercel/analytics package is installed for:
 * - TypeScript type definitions
 * - Future framework migration support
 * 
 * For more information, visit:
 * https://vercel.com/docs/analytics/quickstart
 * https://vercel.com/docs/analytics/package
 */

(function() {
  // Initialize the analytics queue before the main script loads
  // This allows us to configure analytics behavior
  window.va = window.va || function () {
    (window.vaq = window.vaq || []).push(arguments);
  };

  // Optional: Configure beforeSend hook to filter events
  // Uncomment and modify as needed:
  // window.va('beforeSend', (event) => {
  //   // Example: Filter out certain URLs
  //   // if (event.url.includes('/admin')) {
  //   //   return null; // Don't track this event
  //   // }
  //   return event;
  // });

  // Log when analytics is ready (development only)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('[Analytics] Vercel Web Analytics queue initialized for development');
  }
})();
