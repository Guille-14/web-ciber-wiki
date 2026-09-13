import { state } from './state.js';
import { events, EVENTS } from './events.js';
import { dataLoader } from './data-loader.js';
import LazyLoader from './lazy-loader.js';
const lazyLoader = LazyLoader;
import { monitor, webVitals, fpsMonitor, memoryMonitor } from '../utils/performance.js';
import { animationOptimizer } from '../utils/animation-optimizer.js';
import { searchCache, ragCache, articleCache } from './cache.js';

/**
 * Performance Integration - Wires up all performance systems
 */
export class PerformanceIntegration {
  constructor() {
    this.initialized = false;
    this._metricsInterval = null;
    this._unsubscribers = [];
  }

  /**
   * Initialize all performance systems
   * @param {Object} wikiData
   */
  init(wikiData) {
    if (this.initialized) return;

    // 1. Initialize data loader with indexes
    dataLoader.init(wikiData);

    // 2. Initialize animation optimizer
    this.initAnimationOptimizer();

    // 3. Initialize performance monitoring
    this.initMonitoring();

    // 4. Set up lazy loading routes
    this.initLazyLoading();

    // 5. Set up cache warming
    this.warmCaches(wikiData);

    this.initialized = true;
  }

  /**
   * Initialize animation optimizer for canvas effects
   */
  initAnimationOptimizer() {
    const unsub = () => {};
    window.addEventListener('reducedMotionChange', (e) => {
      events.emit(EVENTS.THEME_CHANGED, { reducedMotion: e.detail.reduced });
    });
    this._unsubscribers.push(unsub);
  }

  /**
   * Initialize performance monitoring
   */
  initMonitoring() {
    webVitals.trackLCP();
    webVitals.trackFID();
    webVitals.trackCLS();
    webVitals.trackFCP();

    memoryMonitor.start(10000);

    this._metricsInterval = setInterval(() => {
      const metrics = monitor.getMetrics();
      const vitals = webVitals.getVitals();
      const fps = fpsMonitor.getFPS();
      const memory = memoryMonitor.getUsage();


    }, 30000);
  }

  /**
   * Initialize lazy loading for tab modules
   */
  initLazyLoading() {
    const routeModules = {
      articles: ['articles', 'search'],
      owasp: ['owasp'],
      cheatsheets: ['cheatsheets'],
      glossary: ['glossary'],
      tags: ['tags'],
      bookmarks: ['bookmarks'],
      history: ['history'],
      chat: ['chat'],
    };

    const currentTab = state.get('activeTab');
    if (routeModules[currentTab]) {
      lazyLoader.preloadIdle(routeModules[currentTab]);
    }

    const unsubTab = events.on(EVENTS.TAB_CHANGED, (data) => {
      const tab = data.tab || data.newTab;
      if (routeModules[tab]) {
        lazyLoader.preloadIdle(routeModules[tab]);
      }
    });
    this._unsubscribers.push(unsubTab);
  }

  /**
   * Warm caches with frequently accessed data
   * @param {Object} wikiData
   */
  warmCaches(wikiData) {
    if (!wikiData || !wikiData.articles) return;

    if (wikiData.categories) {
      for (const category of wikiData.categories) {
        dataLoader.loadCategory(category.id);
      }
    }
  }

  /**
   * Get performance report
   * @returns {Object}
   */
  getReport() {
    return {
      metrics: monitor.getMetrics(),
      vitals: webVitals.getVitals(),
      fps: fpsMonitor.getFPS(),
      memory: memoryMonitor.getUsage(),
      cacheStats: {
        search: searchCache.getStats(),
        rag: ragCache.getStats(),
      },
      lazyLoaderStats: lazyLoader.stats(),
    };
  }

  /**
   * Destroy all performance systems
   */
  destroy() {
    if (this._metricsInterval) {
      clearInterval(this._metricsInterval);
      this._metricsInterval = null;
    }

    memoryMonitor.stop();
    fpsMonitor.stop();
    webVitals.destroy();
    monitor.clear();
    animationOptimizer.destroy();

    for (const unsub of this._unsubscribers) {
      if (typeof unsub === 'function') unsub();
    }
    this._unsubscribers = [];

    this.initialized = false;
  }
}

export const perfIntegration = new PerformanceIntegration();
