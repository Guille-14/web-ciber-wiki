/**
 * Font Loader - Loads external CSS resources non-blocking
 * Uses media="print" onload trick to defer loading until after critical rendering.
 *
 * NOSCRIPT FALLBACK:
 * Add this inside <head> of index.html for users with JS disabled:
 *   <noscript>
 *     <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap">
 *     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
 *   </noscript>
 */

export function initFontLoader() {
  // Load Google Fonts non-blocking
  const googleFontsLink = document.createElement('link');
  googleFontsLink.rel = 'stylesheet';
  googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Rajdhani:wght@500;600;700&display=swap';
  googleFontsLink.media = 'print';
  googleFontsLink.onload = function() { this.media = 'all'; };
  document.head.appendChild(googleFontsLink);

  // Load Prism CSS non-blocking
  const prismLink = document.createElement('link');
  prismLink.rel = 'stylesheet';
  prismLink.href = 'vendor/prism/prism-tomorrow.min.css';
  prismLink.media = 'print';
  prismLink.onload = function() { this.media = 'all'; };
  document.head.appendChild(prismLink);
}
