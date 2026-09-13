/**
 * @module core/router
 * History API router for CyberWiki.
 * Uses clean URLs (e.g. /articles/nmap) instead of hash-based routing.
 */

/** Default route map: pattern → view name */
const DEFAULT_ROUTES = {
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
  '/guide/:id': 'guide-detail'
};

/**
 * Normalises a path string.
 * Accepts '/articles/nmap', 'articles/nmap', or full URLs.
 * Always returns a path starting with '/'.
 *
 * @param {string} input
 * @returns {string}
 */
function normalisePath(input) {
  if (!input || typeof input !== 'string') return '/';
  let path = input.trim();
  // Strip origin if a full URL was passed
  if (path.startsWith('http://') || path.startsWith('https://')) {
    try { path = new URL(path).pathname; } catch { /* ignore */ }
  }
  // Strip hash fragment if present
  const hashIdx = path.indexOf('#');
  if (hashIdx !== -1) path = path.slice(0, hashIdx);
  // Strip query string if present
  const qIdx = path.indexOf('?');
  if (qIdx !== -1) path = path.slice(0, qIdx);
  if (!path.startsWith('/')) path = '/' + path;
  return path;
}

/**
 * Compiles a route pattern like '/articles/:id' into a RegExp
 * and extracts the parameter names.
 *
 * @param {string} pattern - e.g. '/articles/:id'
 * @returns {{ re: RegExp, keys: string[] }}
 */
function compilePattern(pattern) {
  const keys = [];
  const re = pattern.replace(/:([^/]+)/g, (_match, key) => {
    keys.push(key);
    return '([^/]+)';
  });
  return { re: new RegExp('^' + re + '$'), keys };
}

/**
 * History API SPA router with parameterised routes, guards and events.
 *
 * @example
 * import { createRouter } from './core/router.js';
 *
 * const router = createRouter();
 *
 * router.on('/articles/:id', ({ params, view }) => {
 *   renderArticle(params.id);
 * });
 *
 * router.on('/quiz/:path', ({ params }) => {
 *   startQuiz(params.path);
 * }, { guard: () => state.get('chatConfig') != null });
 *
 * router.init();
 */
export class Router {
  constructor() {
    /** @type {Map<string, { pattern: string, callback: Function, options: object }>} */
    this._routes = new Map();
    /** @type {string} Current matched pattern */
    this._currentPattern = null;
    /** @type {object|null} Current matched route info */
    this._currentRoute = null;
    /** @type {Function|null} Optional event bus emit function */
    this._emit = null;
    this._boundHandler = this._onPopState.bind(this);
    this._boundLinkHandler = this._onLinkClick.bind(this);
  }

  // ------------------------------------------------------------------
  // Public API
  // ------------------------------------------------------------------

  /**
   * Initialise the router.
   * Populates default routes, binds the popstate listener and resolves
   * the initial path.
   *
   * @param {object} [opts]
   * @param {Function} [opts.emit] - Event bus emit function.
   * @param {object}    [opts.defaultRoutes] - Override default route map.
   * @param {string}    [opts.fallback] - View name for unknown routes.
   * @returns {Router}
   */
  init({ emit, defaultRoutes, fallback } = {}) {
    this._emit = emit || null;
    this._fallback = fallback || null;

    const routes = { ...DEFAULT_ROUTES, ...(defaultRoutes || {}) };
    for (const pattern of Object.keys(routes)) {
      this._routes.set(pattern, {
        pattern,
        callback: null,
        options: { view: routes[pattern] }
      });
    }

    window.addEventListener('popstate', this._boundHandler);
    // Intercept nav link clicks for SPA navigation
    document.addEventListener('click', this._boundLinkHandler);
    // Resolve initial path
    this._resolve(window.location.pathname);
    return this;
  }

  /**
   * Programmatically navigate to a path.
   *
   * @param {string} path - e.g. '/articles/nmap' or 'quiz/web'
   * @returns {Router}
   */
  navigate(path) {
    const cleanPath = normalisePath(path);
    if (window.location.pathname === cleanPath) return this;
    history.pushState({}, '', cleanPath);
    this._resolve(cleanPath);
    return this;
  }

  /**
   * Register a route handler.
   *
   * @param {string} pathPattern - Pattern like '/articles/:id'.
   * @param {Function} callback - Handler receiving route info.
   * @param {object} [options]
   * @param {string}   [options.view]    - View name to associate.
   * @param {Function} [options.guard]   - Guard returning true/false or a Promise.
   * @param {string}   [options.title]   - Optional page title.
   * @returns {Router}
   */
  on(pathPattern, callback, options = {}) {
    const pattern = normalisePath(pathPattern);
    this._routes.set(pattern, { pattern, callback, options });
    return this;
  }

  /**
   * Remove a route handler (and its guard).
   *
   * @param {string} pathPattern
   * @returns {Router}
   */
  off(pathPattern) {
    const pattern = normalisePath(pathPattern);
    this._routes.delete(pattern);
    return this;
  }

  /**
   * Get information about the currently matched route.
   *
   * @returns {{ pattern: string, path: string, view: string|null, params: object }}
   */
  getCurrentRoute() {
    return this._currentRoute
      ? { ...this._currentRoute }
      : { pattern: null, path: normalisePath(window.location.pathname), view: null, params: {} };
  }

  /**
   * Convenience: returns just the params of the current route.
   *
   * @returns {object}
   */
  getParams() {
    const route = this.getCurrentRoute();
    return route.params || {};
  }

  /**
   * Tear down the router.
   *
   * @returns {void}
   */
  destroy() {
    window.removeEventListener('popstate', this._boundHandler);
    document.removeEventListener('click', this._boundLinkHandler);
    this._routes.clear();
    this._currentPattern = null;
    this._currentRoute = null;
  }

  // ------------------------------------------------------------------
  // Internal
  // ------------------------------------------------------------------

  /**
   * popstate listener (browser back/forward).
   *
   * @param {PopStateEvent} e
   * @returns {Promise<void>}
   */
  async _onPopState(_e) {
    this._resolve(window.location.pathname);
  }

  /**
   * Intercept clicks on nav links for SPA navigation.
   *
   * @param {MouseEvent} e
   */
  _onLinkClick(e) {
    const link = e.target.closest('a[data-tab]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    e.preventDefault();
    this.navigate(href);
  }

  /**
   * Match and execute the first matching route.
   *
   * @param {string} pathname
   * @returns {Promise<void>}
   */
  async _resolve(pathname) {
    const path = normalisePath(pathname);

    for (const [pattern, entry] of this._routes) {
      const { re, keys } = compilePattern(pattern);
      const match = path.match(re);
      if (!match) continue;

      // Extract params
      const params = {};
      keys.forEach((key, i) => { params[key] = decodeURIComponent(match[i + 1]); });

      // Route info
      const routeInfo = { pattern, path, view: entry.options?.view || pattern, params };
      this._currentPattern = pattern;
      this._currentRoute = routeInfo;

      // Guard
      if (entry.options?.guard) {
        try {
          const allowed = await entry.options.guard(routeInfo);
          if (!allowed) {
            this._emitEvent('route:guarded', routeInfo);
            return;
          }
        } catch (err) {
          console.error('[Router] guard error:', err);
          return;
        }
      }

      // Update page title if provided
      if (entry.options?.title) {
        document.title = entry.options.title;
      }

      // Emit before event
      this._emitEvent('route:before', routeInfo);

      // Invoke callback
      if (typeof entry.callback === 'function') {
        try {
          await entry.callback(routeInfo);
        } catch (err) {
          console.error('[Router] callback error:', err);
        }
      }

      // Emit after event
      this._emitEvent('route:after', routeInfo);
      return;
    }

    // No match — try fallback route
    this._handleFallback(path);
  }

  /**
   * Handle an unmatched path.
   *
   * @param {string} path
   */
  _handleFallback(path) {
    const routeInfo = { pattern: null, path, view: this._fallback, params: {} };
    this._currentRoute = routeInfo;
    this._currentPattern = null;

    this._emitEvent('route:fallback', routeInfo);

    if (this._fallback) {
      const fallbackEntry = this._routes.get('/' + this._fallback);
      if (fallbackEntry && typeof fallbackEntry.callback === 'function') {
        fallbackEntry.callback(routeInfo);
      }
    }
  }

  /**
   * Emit a route event through the optional event bus and also via
   * a native CustomEvent on the window for loose coupling.
   *
   * @param {string} eventName
   * @param {object} detail
   */
  _emitEvent(eventName, detail) {
    // CustomEvent for any listener
    window.dispatchEvent(new CustomEvent(eventName, { detail }));

    // Optional event bus
    if (typeof this._emit === 'function') {
      try {
        this._emit(eventName, detail);
      } catch {
        // event bus unavailable
      }
    }
  }
}

/**
 * Create and return a new Router instance.
 *
 * @returns {Router}
 */
export function createRouter() {
  return new Router();
}

/** Default singleton instance. */
export const router = new Router();

export default Router;
