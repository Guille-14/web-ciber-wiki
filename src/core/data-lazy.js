/**
 * DataLazyLoader - Loads secondary data sources on demand
 *
 * Critical data (articles, categories) loads synchronously.
 * Secondary data (glossary, cheatsheets, OWASP, guides) loads
 * when the user first visits the corresponding tab.
 *
 * @module core/data-lazy
 */

import { events, EVENTS } from './events.js';

/** @type {Set<string>} Tracks which data sources have been loaded */
const loaded = new Set();

/** @type {Map<string, Promise<void>} Tracks in-flight loads */
const loading = new Map();

/**
 * Deferred data sources: script src → global key + merge key
 * @type {Object<string, {global: string, mergeKey: string}>}
 */
const DEFERRED_SOURCES = {
  'data-glossary.js': { global: 'WIKI_DATA_GLOSSARY', mergeKey: 'glossary' },
  'data-cheatsheets.js': { global: 'WIKI_DATA_CHEATSHEETS', mergeKey: 'cheatsheets' },
  'data-owasp.js': { global: 'WIKI_DATA_OWASP', mergeKey: 'owaspTop10' },
  'data-guides.js': { global: 'GUIDES_DATA', mergeKey: 'guides' },
};

/**
 * Tab → data source mapping
 * @type {Object<string, string[]>}
 */
const TAB_SOURCES = {
  glossary: ['data-glossary.js'],
  cheatsheets: ['data-cheatsheets.js'],
  owasp: ['data-owasp.js'],
  guides: ['data-guides.js'],
};

/**
 * Merge a newly loaded source into window.WIKI_DATA
 * @param {string} mergeKey - Key in WIKI_DATA (e.g. 'glossary')
 * @param {string} globalKey - Window global name (e.g. 'WIKI_DATA_GLOSSARY')
 */
function mergeIntoWikiData(mergeKey, globalKey) {
  if (window[globalKey] && window.WIKI_DATA) {
    window.WIKI_DATA[mergeKey] = window[globalKey];
  }
}

/**
 * Load a data script dynamically by injecting a <script> tag.
 * @param {string} src - Script file path (e.g. 'data-glossary.js')
 * @returns {Promise<void>}
 */
function loadScript(src) {
  if (loaded.has(src)) return Promise.resolve();
  if (loading.has(src)) return loading.get(src);

  // Si el global ya existe (index.html carga glossary/cheatsheets/owasp de
  // serie), NO reinyectar el <script>: antes se volvía a descargar el mismo
  // archivo (p.ej. data-cheatsheets.js ~741 KB dos veces).
  const existing = DEFERRED_SOURCES[src];
  if (existing && window[existing.global]) {
    mergeIntoWikiData(existing.mergeKey, existing.global);
    loaded.add(src);
    events.emit('data:loaded', { source: src });
    window.dispatchEvent(new CustomEvent('data:loaded', { detail: { source: src } }));
    return Promise.resolve();
  }

  const promise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => {
      const info = DEFERRED_SOURCES[src];
      if (info) {
        mergeIntoWikiData(info.mergeKey, info.global);
        loaded.add(src);
      }
      loading.delete(src);
      events.emit('data:loaded', { source: src });
      window.dispatchEvent(new CustomEvent('data:loaded', { detail: { source: src } }));
      resolve();
    };
    script.onerror = () => {
      loading.delete(src);
      reject(new Error(`[DataLazyLoader] Failed to load ${src}`));
    };
    document.head.appendChild(script);
  });

  loading.set(src, promise);
  return promise;
}

/**
 * Load all data sources needed for a given tab.
 * @param {string} tabId - Tab identifier
 * @returns {Promise<void>}
 */
export async function loadTabData(tabId) {
  const sources = TAB_SOURCES[tabId];
  if (!sources || sources.every(s => loaded.has(s))) return;

  await Promise.all(sources.map(s => loadScript(s)));
}

/**
 * Check if a tab's data is loaded.
 * @param {string} tabId
 * @returns {boolean}
 */
export function isTabDataLoaded(tabId) {
  const sources = TAB_SOURCES[tabId];
  if (!sources) return true;
  return sources.every(s => loaded.has(s));
}

/**
 * Preload data for tabs that might be visited next.
 * Uses requestIdleCallback for non-blocking preload.
 * @param {string[]} tabIds - Tabs to preload
 */
export function preloadTabData(tabIds) {
  const toLoad = tabIds
    .flatMap(t => TAB_SOURCES[t] || [])
    .filter(s => !loaded.has(s) && !loading.has(s));

  if (toLoad.length === 0) return;

  if (typeof requestIdleCallback === 'function') {
    requestIdleCallback((deadline) => {
      let i = 0;
      while (i < toLoad.length && deadline.timeRemaining() > 0) {
        loadScript(toLoad[i]).catch(() => {});
        i++;
      }
      if (i < toLoad.length) {
        preloadTabData(tabIds);
      }
    }, { timeout: 3000 });
  } else {
    toLoad.forEach(s => loadScript(s).catch(() => {}));
  }
}

/**
 * Get debug info about loaded data sources.
 * @returns {{ loaded: string[], pending: string[] }}
 */
export function dataStats() {
  return {
    loaded: [...loaded],
    pending: [...loading.keys()],
  };
}
