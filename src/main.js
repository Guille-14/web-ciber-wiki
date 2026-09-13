/**
 * Main entry point for CyberWiki Hub's modular architecture.
 * Initializes all modules and wires them together.
 *
 * @module main
 */

// Core
import { state } from './core/state.js';
import { events, EVENTS } from './core/events.js';
import { router } from './core/router.js';
import { storage, STORAGE_KEYS } from './core/storage.js';

// SEO
import { seoIntegration } from './core/seo-integration.js';
import { seoMeta } from './core/seo-meta.js';
import { sitemapGenerator } from './core/sitemap-generator.js';

// Performance
import { perfIntegration } from './core/performance-integration.js';
import { dataLoader } from './core/data-loader.js';
import LazyLoader from './core/lazy-loader.js';
import { loadTabData } from './core/data-lazy.js';
import { monitor } from './utils/performance.js';
import { animationOptimizer } from './utils/animation-optimizer.js';

// Components
import { initSidebar, renderCategories, renderSidebarStats } from './components/sidebar.js';
import { initHeader, updateStats, updateClock } from './components/header.js';
import { initModal, openModal as modalOpen } from './components/modal.js';
import { initTheme } from './components/theme-toggle.js';
import { initParticles, initMatrix } from './components/particles.js';
import { initExpertPopup } from './components/expert-popup.js';

// Modules
import { initArticles, renderArticles, filterByTag, filterByCategory, showAllArticles } from './modules/articles/articles.js';
import { initSearch } from './modules/search/search.js';
import { initChat } from './modules/chat/chat.js';
import { initBookmarks, renderBookmarks, getBookmarks } from './modules/bookmarks/bookmarks.js';
import { initHistory, renderHistory } from './modules/history/history.js';
import { initGlossary, renderGlossary } from './modules/glossary/glossary.js';
import { initOwasp, renderOwasp } from './modules/owasp/owasp.js';
import { initCheatsheets, renderCheatsheets } from './modules/cheatsheets/cheatsheets.js';
import { initTags, renderTagCloud } from './modules/tags/tags.js';
import { Quiz as QuizModule, initQuiz } from './modules/quiz/quiz.js';
import { isQuizInjected } from './modules/quiz/quiz-html.js';
import { initCVEFeed } from './modules/cve/cve-feed.js';
import { initProgress, markArticleRead, addQuizScore } from './modules/progress/progress.js';

// Utils
import { $, ready, showToast, copyToClipboard, escapeHtml } from './utils/dom.js';
import { getArticleOfTheDay } from './utils/format.js';

// Accessibility
import { focusManager } from './core/a11y-focus.js';
import { screenReader } from './core/a11y-screen-reader.js';
import { keyboardNav } from './core/a11y-keyboard.js';
import { motionA11y } from './core/a11y-motion.js';

// Error handling & resilience
import { errorHandler } from './core/error-handler.js';
import { safeOn } from './core/error-handler.js';

// PWA
import { initPWA } from './modules/pwa/pwa.js';

// Loading components
import { showSkeletonGrid, hideSkeletonGrid, EMPTY_STATES } from './components/loading.js';

// Font loader (non-blocking)
import { initFontLoader } from './utils/font-loader.js';

// Data (loaded as global scripts for performance - 39K+ lines)
const WIKI_DATA = window.WIKI_DATA;

/**
 * Tab renderers mapping.
 * Each key is a tab ID, and the value is the render function to call.
 */
const TAB_RENDERERS = {
  articles: renderArticles,
  owasp: renderOwasp,
  cheatsheets: renderCheatsheets,
  glossary: renderGlossary,
  tags: () => { renderTagCloud(); const ta = $('tag-articles'); if (ta) ta.innerHTML = ''; },
  bookmarks: renderBookmarks,
  history: renderHistory,
  chat: () => {}, // Chat has its own renderChat via initChat
  guides: () => {}, // Guides handled by guides-interactive.js
  quiz: initQuiz, // Quiz handled by quiz system
  terminal: () => {
    import('./modules/terminal/index.js').then((m) => m.initTerminal($('terminal-container')));
  },
};

/**
 * Skeleton grid container IDs for each tab
 */
const SKELETON_CONTAINERS = {
  articles: 'articles-grid',
  owasp: 'owasp-grid',
  cheatsheets: 'cheatsheets-grid',
  glossary: 'glossary-grid',
  bookmarks: 'bookmarks-grid',
  history: 'history-list',
};

/**
 * Switch to a tab by ID.
 * Updates state, nav links, section visibility, and calls the tab renderer.
 * Loads deferred data on first visit to a secondary tab.
 * @param {string} tabId - The tab to switch to (e.g. 'articles', 'owasp', 'chat').
 */
export async function switchTab(tabId) {
  try {
    monitor.start(`tab-switch-${tabId}`);
  } catch(e) {}

  state.set('activeTab', tabId);

  // Integra cada pestaña con el historial del navegador: sin esto, atrás/
  // adelante solo cambiaba la URL (el router resolvía rutas con callback
  // null y nadie consumía route:*).
  const tabPaths = {
    articles: '/articles',
    owasp: '/owasp',
    cheatsheets: '/cheatsheets',
    glossary: '/glossary',
    tags: '/tags',
    bookmarks: '/bookmarks',
    history: '/history',
    chat: '/chat',
    quiz: '/quiz',
    terminal: '/terminal',
    guides: '/guides',
  };
  const targetPath = tabPaths[tabId];
  if (targetPath && window.location.pathname !== targetPath) {
    try { history.pushState({}, '', targetPath); } catch { /* ignore */ }
  }

  // Update nav link active states
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((l) => l.classList.toggle('active', l.dataset.tab === tabId));

  // Toggle section visibility
  const sections = {
    articles: $('articles-section'),
    owasp: $('owasp-section'),
    cheatsheets: $('cheatsheets-section'),
    glossary: $('glossary-section'),
    tags: $('tags-section'),
    bookmarks: $('bookmarks-section'),
    history: $('history-section'),
    chat: $('chat-section'),
    guides: $('guides-section'),
    quiz: $('quiz-section'),
    terminal: $('terminal-section'),
  };

  Object.keys(sections).forEach((k) => {
    const el = sections[k];
    if (!el) return;
    if (k === tabId) {
      el.style.display = '';
      el.classList.remove('section-hidden');
      el.classList.add('section-visible');
    } else {
      el.classList.remove('section-visible');
      el.classList.add('section-hidden');
      el.style.display = '';
    }
  });

  // Dim categories sidebar when not on articles tab
  const catGroup = $('categories-group');
  if (catGroup) {
    catGroup.classList.toggle('sidebar-dimmed', tabId !== 'articles');
  }

  // Hide content header on quiz tab
  const header = document.querySelector('.content-header');
  if (header) header.classList.toggle('hidden', tabId === 'quiz');

  // Show skeleton loading for supported tabs
  const skeletonContainer = SKELETON_CONTAINERS[tabId];
  if (skeletonContainer) {
    showSkeletonGrid(skeletonContainer);
  }

  // Load deferred data for this tab (non-blocking for critical tabs)
  try {
    await loadTabData(tabId);
  } catch (err) {
    console.warn(`[main] Failed to load data for tab "${tabId}":`, err);
  }

  // Call the tab renderer
  const renderer = TAB_RENDERERS[tabId];
  if (renderer) {
    try {
      renderer();
    } catch (err) {
      console.error(`[main] Error rendering tab "${tabId}":`, err);
    }
  }

  // Hide skeleton loading after render
  if (skeletonContainer) {
    hideSkeletonGrid(skeletonContainer);
  }

  // Handle quiz tab (ES module)
  if (tabId === 'quiz' && isQuizInjected() && QuizModule && typeof QuizModule.showView === 'function') {
    setTimeout(() => { QuizModule.showView('home'); }, 50);
  }

  // Contrato canónico de TAB_CHANGED: el payload es el id de la pestaña
  // (string). Antes se emitía {tab} y los 7 módulos oyentes comparaban
  // contra string → listeners muertos.
  events.emit(EVENTS.TAB_CHANGED, tabId);
  monitor.end(`tab-switch-${tabId}`);
}

/**
 * Handle keyboard shortcuts.
 * - `/` or `Ctrl+/`: Focus search
 * - `K`: Toggle presentation mode
 * - `B`: Switch to bookmarks
 * - `?`: Show shortcut help
 * - `Escape`: Close modal / presentation mode
 */
function initKeyboardShortcuts() {
  const searchInput = $('search-input');

  // Los atajos simples (/ b k ? Esc h c q g t) los gestiona el sistema de
  // accesibilidad (core/a11y-keyboard.js). Antes había DOS sistemas
  // registrando las mismas teclas con acciones distintas: se duplicaban
  // efectos y '?' mostraba un toast en vez de la ayuda.
  // Aquí solo queda Ctrl+/ que a11y-keyboard no cubre.
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  });
}

/**
 * Initialize the Article of the Day banner.
 * Uses a deterministic hash of today's date to select an article.
 */
function initAOTD() {
  const banner = $('aotd-banner');
  const link = $('aotd-link');
  const closeBtn = $('aotd-close');

  if (!banner || !link || !WIKI_DATA) return;

  const today = new Date().toDateString();
  const cached = storage.get(STORAGE_KEYS.AOTD);

  if (cached && cached.date === today) {
    link.textContent = cached.title;
      link.onclick = (e) => {
        e.preventDefault();
        modalOpen(cached.id, WIKI_DATA);
      };
    banner.classList.remove('hidden');
    banner.style.display = 'flex';
  } else {
    const article = getArticleOfTheDay(WIKI_DATA.articles || []);
    if (article) {
      storage.set(STORAGE_KEYS.AOTD, {
        date: today,
        id: article.id,
        title: article.title,
      });
      link.textContent = article.title;
      link.onclick = (e) => {
        e.preventDefault();
        modalOpen(article.id, WIKI_DATA);
      };
      banner.classList.remove('hidden');
      banner.style.display = 'flex';
    }
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      banner.classList.add('hidden');
      banner.style.display = 'none';
    });
  }
}

/**
 * Initialize the app loader (fade out and remove).
 */
function initLoader() {
  const loader = $('app-loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 300);
    setTimeout(() => loader.remove(), 800);
  }
}

/**
 * Chip "Continuar leyendo": muestra el último artículo abierto y permite
 * retomarlo con un clic. Usa readingHistory (ya persistida). Se oculta si
 * no hay historial, si el artículo está abierto o si el usuario lo cierra
 * (durante la sesión).
 */
let continueChipDismissed = false;

function renderContinueReading() {
  const section = $('articles-section');
  if (!section) return;
  let chip = document.getElementById('continue-reading');
  if (chip) chip.remove();
  if (continueChipDismissed) return;
  if ((state.get('activeTab') || 'articles') !== 'articles') return;

  const history = state.get('readingHistory') || [];
  const last = history[0];
  if (!last || !last.id) return;
  const article = (WIKI_DATA?.articles || []).find((a) => a && a.id === last.id);
  if (!article) return;

  chip = document.createElement('button');
  chip.id = 'continue-reading';
  chip.type = 'button';
  chip.className = 'continue-chip';
  const when = last.time ? new Date(last.time).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }) : '';
  chip.innerHTML =
    '<span class="cc-icon">📖</span>' +
    `<span class="cc-text"><strong>Continuar leyendo</strong><span>${escapeHtml(article.title)}${when ? ' · ' + when : ''}</span></span>` +
    '<span class="cc-close" role="button" aria-label="Cerrar" title="Cerrar">×</span>';
  chip.addEventListener('click', (e) => {
    if (e.target.closest('.cc-close')) {
      continueChipDismissed = true;
      chip.remove();
      return;
    }
    window.openModal(article.id);
  });
  section.insertBefore(chip, section.firstChild);
}

function initContinueReading() {
  events.on(EVENTS.TAB_CHANGED, (tab) => {
    if (tab === 'articles') renderContinueReading();
  });
  events.on(EVENTS.ARTICLE_CLOSED, () => {
    // Al cerrar un artículo el historial cambió: refresca el chip.
    setTimeout(renderContinueReading, 100);
  });
  renderContinueReading();
}

/**
 * Set up SEO tracking for article open/close events.
 * Intercepts ARTICLE_OPENED (which only carries id/title) to look up
 * the full article object and forward it to the SEO integration.
 */
function initSEOTracking() {
  events.on(EVENTS.ARTICLE_OPENED, (data) => {
    if (!WIKI_DATA || !WIKI_DATA.articles) return;
    const article = WIKI_DATA.articles.find((a) => a && a.id === data.id);
    if (article) {
      seoIntegration.handleArticleOpen(article);
    }
  });

  // Open the article modal when a card/bookmark requests it.
  // Guarded: openModal re-emits ARTICLE_OPENED, so skip if already open.
  events.on(EVENTS.ARTICLE_OPENED, (data) => {
    if (!data || !data.id) return;
    const overlay = $('article-modal');
    if (overlay && overlay.classList.contains('active')) return;
    window.openModal(data.id);
  });

  events.on(EVENTS.ARTICLE_CLOSED, () => {
    seoIntegration.handleArticleClose();
  });
}

/**
 * Main initialization sequence.
 * Called when the DOM is ready.
 */
async function init() {
  monitor.start('init-total');

  try {
    // 0. Initialize error handler first
    errorHandler.init();

    // 0.1 Load fonts and CSS asynchronously
    initFontLoader();

    // Validate WIKI_DATA
    if (typeof WIKI_DATA === 'undefined') {
      document.body.innerHTML = '<h1 style="color:#f85149;padding:2rem">Error: WIKI_DATA no cargó</h1>';
      return;
    }

    // 1. Hide loader
    monitor.start('init-loader');
    initLoader();
    monitor.end('init-loader');

    // 2. Initialize core
    monitor.start('init-core');
    state.initialize?.();
    router.init({ emit: (event, data) => events.emit(event, data) });

    // Registra handlers de ruta: antes las rutas se creaban con callback
    // null y el botón atrás/adelante no hacía nada. Ahora cada URL
    // resuelve a su pestaña (y los deep-links de artículo abren el modal).
    const routeTabs = {
      '/': 'articles',
      '/articles': 'articles',
      '/articles/:id': 'article-detail',
      '/owasp': 'owasp',
      '/cheatsheets': 'cheatsheets',
      '/glossary': 'glossary',
      '/tags': 'tags',
      '/bookmarks': 'bookmarks',
      '/history': 'history',
      '/chat': 'chat',
      '/quiz': 'quiz',
      '/quiz/:path': 'quiz',
      '/terminal': 'terminal',
      '/guides': 'guides',
      '/guide/:id': 'guides',
    };
    for (const [pattern, tab] of Object.entries(routeTabs)) {
      router.on(pattern, ({ params } = {}) => {
        if (tab === 'article-detail') {
          switchTab('articles');
          if (params?.id && typeof window.openModal === 'function') {
            window.openModal(params.id);
          }
          return;
        }
        if (state.get('activeTab') !== tab) switchTab(tab);
      }, { view: tab });
    }
    monitor.end('init-core');

    // 3. Initialize components
    monitor.start('init-components');
    initTheme();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && window.innerWidth >= 768) {
      initParticles();
      initMatrix();
    }
    initSidebar(WIKI_DATA, switchTab);
    initHeader(WIKI_DATA);
    initModal(WIKI_DATA);
    initExpertPopup();
    monitor.end('init-components');

    // 4. Initialize modules
    monitor.start('init-modules');
    initArticles(WIKI_DATA);
    initSearch(WIKI_DATA);
    initChat();
    initCVEFeed();
    initProgress();
    initBookmarks(WIKI_DATA);
    initHistory();
    initGlossary(WIKI_DATA);
    initOwasp(WIKI_DATA);
    initCheatsheets(WIKI_DATA);
    initTags(WIKI_DATA);
    monitor.end('init-modules');

    // 5. Initialize performance systems (after data is loaded)
    monitor.start('init-performance');
    perfIntegration.init(WIKI_DATA);
    monitor.end('init-performance');

    // 6. Initialize SEO systems
    monitor.start('init-seo');
    seoIntegration.init(WIKI_DATA);
    initSEOTracking();
    initContinueReading();
    monitor.end('init-seo');

    // 7. Initialize accessibility systems
    monitor.start('init-accessibility');
    focusManager.init();
    screenReader.init();
    keyboardNav.init();
    motionA11y.init();
    document.addEventListener('click', (e) => {
      const el = e.target.closest('[data-app-action]');
      if (!el) return;
      const [action, arg] = (el.getAttribute('data-app-action') || '').split(':');
      if (action === 'switchTab' && typeof switchTab === 'function') switchTab(arg);
      else if (action === 'reload') location.reload();
    });
    monitor.end('init-accessibility');

    // 7.5 Initialize PWA
    monitor.start('init-pwa');
    initPWA();
    monitor.end('init-pwa');

    // 8. Set up navigation
    monitor.start('init-navigation');
    renderCategories();
    switchTab(state.get('activeTab') || 'articles');
    monitor.end('init-navigation');

    // 9. Initialize extras
    monitor.start('init-extras');
    initAOTD();
    initKeyboardShortcuts();
    monitor.end('init-extras');

    // 10. Update UI
    monitor.start('init-ui-update');
    updateStats();
    renderSidebarStats();
    renderHistory();
    monitor.end('init-ui-update');

    // 11. Emit ready event
    events.emit(EVENTS.APP_READY);

    // 12. Hide loader (fallback in case initLoader didn't run)
    const loader = $('app-loader');
    if (loader) {
      setTimeout(() => loader.classList.add('hidden'), 300);
      setTimeout(() => loader.remove(), 800);
    }

    monitor.end('init-total');

  } catch (err) {
    monitor.end('init-total');
    console.error('[main] Initialization error:', err);
    const grid = $('articles-grid');
    if (grid) {
      grid.innerHTML = `<div style="padding:1rem;background:#161b22;border:1px solid #f85149;border-radius:8px;color:#f85149;font-family:monospace;white-space:pre-wrap;margin:1rem;font-size:12px"><b>❌ Error:</b> ${err.message}<br>${err.stack || ''}</div>`;
    }
    events.emit(EVENTS.APP_ERROR, { error: err });
  }
}

// =====================================================
// Global bindings for legacy/quiz/guides compatibility
// =====================================================

/**
 * Expose switchTab globally for quiz/guides compatibility.
 * These modules expect window.switchTab to be available.
 */
window.switchTab = switchTab;

/**
 * Expose Quiz module globally for inline onclick handlers in quiz HTML.
 * @deprecated Uses ES module internally; global is for backward compatibility only.
 */
window.Quiz = QuizModule;

/**
 * Open modal globally for onclick handlers in article HTML.
 */
window.openModal = (id) => modalOpen(id, WIKI_DATA);

/**
 * Abre un artículo por id desde el quiz ("Leer más" del ranking).
 * Antes el quiz llamaba window.searchArticles, que nunca existió.
 */
window.searchArticles = (articleId) => {
  if (articleId && typeof modalOpen === 'function') modalOpen(articleId, WIKI_DATA);
};

/**
 * Show toast globally.
 */
window.showToast = showToast;

/**
 * Filter by tag globally for card tag clicks.
 */
window.filterByTag = (tag) => filterByTag(tag);

/**
 * Filter by category globally for sidebar clicks.
 */
window.filterByCategory = (catId) => filterByCategory(catId);

/**
 * Show all articles globally (pagination bypass).
 */
window.showAllArticles = () => showAllArticles();

/**
 * Copy text to clipboard globally.
 */
window.copyText = (txt) => copyToClipboard(txt);

// =====================================================
// Start the app
// =====================================================
ready().then(init);
