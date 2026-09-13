/**
 * LazyLoader - Lazy loading system for CyberWiki Hub
 *
 * Loads modules on demand when tabs are visited for the first time.
 * Supports caching, preloading during idle time, and event emission.
 *
 * @module core/lazy-loader
 */

/** @type {Map<string, Promise<object>>} */
const cache = new Map();

/** @type {Map<string, object>} */
const loadedModules = new Map();

/** @type {Set<string>} */
const loadingModules = new Set();

/** @type {Map<string, Function[]>} */
const listeners = new Map();

/**
 * Module registry mapping names to dynamic import functions.
 * Only registers modules that are NOT statically imported in main.js
 * to avoid duplicate chunks and Vite warnings.
 * @type {Object<string, () => Promise<object>>}
 */
const MODULE_REGISTRY = {
  terminal: () => import('../modules/terminal/index.js'),
};

/**
 * Route-to-module mapping for preloading likely dependencies.
 * Only includes modules registered in MODULE_REGISTRY (lazy-loaded ones).
 * @type {Object<string, string[]>}
 */
const ROUTE_MODULES = {
  '/': ['terminal'],
  '/terminal': ['terminal'],
};

/**
 * Event types emitted by the lazy loader.
 * @enum {string}
 */
const Events = Object.freeze({
  MODULE_LOADED: 'module:loaded',
  MODULE_ERROR: 'module:error',
  MODULE_START: 'module:start',
});

/**
 * Register an event listener.
 *
 * @param {string} event - Event name (use Events enum values).
 * @param {Function} callback - Handler to invoke.
 * @returns {Function} Unsubscribe function.
 */
function on(event, callback) {
  if (!listeners.has(event)) {
    listeners.set(event, []);
  }
  listeners.get(event).push(callback);
  return () => {
    const cbs = listeners.get(event);
    if (cbs) {
      const idx = cbs.indexOf(callback);
      if (idx !== -1) cbs.splice(idx, 1);
    }
  };
}

/**
 * Emit an event to all registered listeners.
 *
 * @param {string} event - Event name.
 * @param {*} detail - Event payload.
 */
function emit(event, detail) {
  const cbs = listeners.get(event);
  if (cbs) {
    for (const cb of cbs) {
      try {
        cb(detail);
      } catch (err) {
        console.error(`[LazyLoader] Error in listener for "${event}":`, err);
      }
    }
  }
}

/**
 * Load a module by name.
 *
 * Uses the MODULE_REGISTRY to resolve the module path and caches the result.
 * Subsequent calls return the cached module instantly.
 *
 * @param {string} moduleName - Key from MODULE_REGISTRY.
 * @returns {Promise<object>} The loaded module.
 * @throws {Error} If the module name is not registered.
 */
async function load(moduleName) {
  if (loadedModules.has(moduleName)) {
    return loadedModules.get(moduleName);
  }

  const importer = MODULE_REGISTRY[moduleName];
  if (!importer) {
    throw new Error(`[LazyLoader] Unknown module: "${moduleName}"`);
  }

  if (cache.has(moduleName)) {
    return cache.get(moduleName);
  }

  loadingModules.add(moduleName);
  emit(Events.MODULE_START, { module: moduleName });

  const promise = importer()
    .then((mod) => {
      loadedModules.set(moduleName, mod);
      loadingModules.delete(moduleName);
      cache.delete(moduleName);
      emit(Events.MODULE_LOADED, { module: moduleName, exports: mod });
      return mod;
    })
    .catch((err) => {
      loadingModules.delete(moduleName);
      cache.delete(moduleName);
      emit(Events.MODULE_ERROR, { module: moduleName, error: err });
      throw err;
    });

  cache.set(moduleName, promise);
  return promise;
}

/**
 * Check if a module has already been loaded.
 *
 * @param {string} moduleName - Key from MODULE_REGISTRY.
 * @returns {boolean}
 */
function isLoaded(moduleName) {
  return loadedModules.has(moduleName);
}

/**
 * Check if a module is currently being loaded.
 *
 * @param {string} moduleName - Key from MODULE_REGISTRY.
 * @returns {boolean}
 */
function isLoading(moduleName) {
  return loadingModules.has(moduleName);
}

/**
 * Get all registered module names.
 *
 * @returns {string[]}
 */
function getRegisteredModules() {
  return Object.keys(MODULE_REGISTRY);
}

/**
 * Get all loaded module names.
 *
 * @returns {string[]}
 */
function getLoadedModules() {
  return [...loadedModules.keys()];
}

/**
 * Get a previously loaded module synchronously.
 * Returns undefined if the module hasn't been loaded yet.
 *
 * @param {string} moduleName - Key from MODULE_REGISTRY.
 * @returns {object|undefined}
 */
function getModule(moduleName) {
  return loadedModules.get(moduleName);
}

/**
 * Preload a list of modules during idle time using requestIdleCallback.
 * Falls back to immediate loading if requestIdleCallback is unavailable.
 *
 * @param {string[]} modules - Module names to preload.
 * @returns {void}
 */
function preloadIdle(modules) {
  const idleModules = modules.filter(
    (m) => !isLoaded(m) && !isLoading(m) && MODULE_REGISTRY[m],
  );

  if (idleModules.length === 0) return;

  if (typeof requestIdleCallback === 'function') {
    requestIdleCallback(
      (deadline) => {
        let i = 0;
        while (i < idleModules.length && deadline.timeRemaining() > 0) {
          load(idleModules[i]).catch(() => {});
          i++;
        }
        // If we didn't get to all modules, schedule the rest
        if (i < idleModules.length) {
          preloadIdle(idleModules.slice(i));
        }
      },
      { timeout: 2000 },
    );
  } else {
    // Fallback: load with a small delay to avoid blocking the main thread
    for (const mod of idleModules) {
      load(mod).catch(() => {});
    }
  }
}

/**
 * Preload modules that are likely needed for a given route.
 *
 * @param {string} hash - The current or upcoming route hash.
 * @returns {void}
 */
function preloadRoute(hash) {
  const modules = ROUTE_MODULES[hash];
  if (modules) {
    preloadIdle(modules);
  }
}

/**
 * Clear all cached and loaded modules.
 * Useful for development or forced reloads.
 */
function reset() {
  cache.clear();
  loadedModules.clear();
  loadingModules.clear();
}

/**
 * Get debug stats for the lazy loader.
 *
 * @returns {{ cached: number, loaded: number, loading: number }}
 */
function stats() {
  return {
    cached: cache.size,
    loaded: loadedModules.size,
    loading: loadingModules.size,
  };
}

/** Singleton lazy loader instance */
const LazyLoader = Object.freeze({
  load,
  isLoaded,
  isLoading,
  getModule,
  getRegisteredModules,
  getLoadedModules,
  preloadIdle,
  preloadRoute,
  reset,
  stats,
  on,
  Events,
  MODULE_REGISTRY,
  ROUTE_MODULES,
});

export default LazyLoader;
