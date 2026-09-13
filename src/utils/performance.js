/**
 * Performance Monitor - Tracks and reports app performance metrics
 */
export class PerformanceMonitor {
  constructor() {
    this._metrics = {};
    this._timers = {};
  }

  /**
   * Start timing a named operation
   * @param {string} name
   */
  start(name) {
    this._timers[name] = performance.now();
  }

  /**
   * End timing and record duration
   * @param {string} name
   * @returns {number} Duration in milliseconds
   */
  end(name) {
    if (!(name in this._timers)) {
      throw new Error(`No timer started with name "${name}"`);
    }
    const duration = performance.now() - this._timers[name];
    delete this._timers[name];
    this.record(name, duration, 'ms');
    return duration;
  }

  /**
   * Record a custom metric
   * @param {string} name
   * @param {number} value
   * @param {string} [unit='ms']
   */
  record(name, value, unit = 'ms') {
    this._metrics[name] = {
      value,
      unit,
      timestamp: Date.now(),
    };
  }

  /**
   * Get all recorded metrics
   * @returns {Object}
   */
  getMetrics() {
    return { ...this._metrics };
  }

  /**
   * Get a specific metric
   * @param {string} name
   * @returns {{ value: number, unit: string, timestamp: number }|null}
   */
  getMetric(name) {
    return this._metrics[name] ?? null;
  }

  /**
   * Clear all metrics
   */
  clear() {
    this._metrics = {};
    this._timers = {};
  }

  /**
   * Generate performance report
   * @returns {string} Formatted report string
   */
  report() {
    const lines = ['=== Performance Report ===', `Generated: ${new Date().toISOString()}`, ''];
    const entries = Object.entries(this._metrics);
    if (entries.length === 0) {
      lines.push('No metrics recorded.');
    } else {
      lines.push(`Total metrics: ${entries.length}`);
      lines.push('');
      for (const [name, { value, unit, timestamp }] of entries) {
        const ts = new Date(timestamp).toISOString();
        lines.push(`  ${name}: ${value.toFixed(2)} ${unit} (${ts})`);
      }
    }
    return lines.join('\n');
  }

  /**
   * Export metrics as JSON
   * @returns {string}
   */
  export() {
    return JSON.stringify(this._metrics, null, 2);
  }

  /**
   * Send metrics to analytics endpoint (if configured)
   * @param {string} endpoint
   */
  async send(endpoint) {
    try {
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: this.export(),
      });
    } catch (err) {
      console.error('[PerformanceMonitor] Failed to send metrics:', err);
    }
  }

  /**
   * Destroy monitor
   */
  destroy() {
    this.clear();
  }
}

/**
 * Web Vitals - Core Web Vitals tracking
 */
export class WebVitals {
  /**
   * @param {Function} onMetric - Callback for each metric
   */
  constructor(onMetric) {
    this._onMetric = onMetric;
    this._vitals = {};
    this._observers = [];
  }

  /**
   * Track Largest Contentful Paint (LCP)
   */
  trackLCP() {
    if (typeof PerformanceObserver === 'undefined') return;
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        const metric = { name: 'LCP', value: lastEntry.startTime, unit: 'ms' };
        this._vitals.LCP = metric;
        this._onMetric(metric);
      });
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
      this._observers.push(observer);
    } catch (_) {}
  }

  /**
   * Track First Input Delay (FID)
   */
  trackFID() {
    if (typeof PerformanceObserver === 'undefined') return;
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const metric = { name: 'FID', value: entry.processingStart - entry.startTime, unit: 'ms' };
          this._vitals.FID = metric;
          this._onMetric(metric);
          break;
        }
      });
      observer.observe({ type: 'first-input', buffered: true });
      this._observers.push(observer);
    } catch (_) {}
  }

  /**
   * Track Cumulative Layout Shift (CLS)
   */
  trackCLS() {
    if (typeof PerformanceObserver === 'undefined') return;
    try {
      let clsValue = 0;
      let lastEntryTime = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            const delta = entry.value;
            if (entry.startTime - lastEntryTime > 1000) {
              clsValue = 0;
            }
            lastEntryTime = entry.startTime;
            clsValue += delta;
            const metric = { name: 'CLS', value: clsValue, unit: 'score' };
            this._vitals.CLS = metric;
            this._onMetric(metric);
          }
        }
      });
      observer.observe({ type: 'layout-shift', buffered: true });
      this._observers.push(observer);
    } catch (_) {}
  }

  /**
   * Track First Contentful Paint (FCP)
   */
  trackFCP() {
    if (typeof PerformanceObserver === 'undefined') return;
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            const metric = { name: 'FCP', value: entry.startTime, unit: 'ms' };
            this._vitals.FCP = metric;
            this._onMetric(metric);
            break;
          }
        }
      });
      observer.observe({ type: 'paint', buffered: true });
      this._observers.push(observer);
    } catch (_) {}
  }

  /**
   * Track Time to Interactive (TTI)
   */
  trackTTI() {
    if (typeof PerformanceObserver === 'undefined') return;
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        if (entries.length > 0) {
          const lastLongTask = entries[entries.length - 1];
          const metric = { name: 'TTI', value: lastLongTask.startTime + lastLongTask.duration, unit: 'ms' };
          this._vitals.TTI = metric;
          this._onMetric(metric);
        }
      });
      observer.observe({ type: 'longtask', buffered: true });
      this._observers.push(observer);
    } catch (_) {}
  }

  /**
   * Get all vitals
   * @returns {Object}
   */
  getVitals() {
    return { ...this._vitals };
  }

  /**
   * Destroy tracker
   */
  destroy() {
    for (const observer of this._observers) {
      observer.disconnect();
    }
    this._observers = [];
    this._vitals = {};
  }
}

/**
 * FPS Monitor - Tracks frames per second
 */
export class FPSMonitor {
  /**
   * @param {Function} onFPS - Callback with current FPS
   */
  constructor(onFPS) {
    this._onFPS = onFPS;
    this._frameCount = 0;
    this._lastTime = 0;
    this._currentFPS = 0;
    this._rafId = null;
    this._intervalId = null;
  }

  /**
   * Start monitoring FPS
   */
  start() {
    this._lastTime = performance.now();
    this._frameCount = 0;
    this._tick();
    this._intervalId = setInterval(() => {
      const now = performance.now();
      const elapsed = now - this._lastTime;
      this._currentFPS = (this._frameCount / elapsed) * 1000;
      this._frameCount = 0;
      this._lastTime = now;
      this._onFPS(this._currentFPS);
    }, 1000);
  }

  _tick() {
    this._frameCount++;
    this._rafId = requestAnimationFrame(() => this._tick());
  }

  /**
   * Stop monitoring
   */
  stop() {
    if (this._rafId !== null) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
    if (this._intervalId !== null) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
  }

  /**
   * Get current FPS
   * @returns {number}
   */
  getFPS() {
    return Math.round(this._currentFPS);
  }

  /**
   * Check if performance is acceptable (>= 30 FPS)
   * @returns {boolean}
   */
  isPerformant() {
    return this._currentFPS >= 30;
  }

  /**
   * Destroy monitor
   */
  destroy() {
    this.stop();
    this._currentFPS = 0;
  }
}

/**
 * Memory Monitor - Tracks memory usage
 */
export class MemoryMonitor {
  /**
   * @param {Function} onWarning - Callback when memory is high
   */
  constructor(onWarning) {
    this._onWarning = onWarning;
    this._intervalId = null;
  }

  /**
   * Get current memory usage
   * @returns {{ used: number, total: number, limit: number }}
   */
  getUsage() {
    if (typeof performance !== 'undefined' && performance.memory) {
      const { usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit } = performance.memory;
      return {
        used: usedJSHeapSize,
        total: totalJSHeapSize,
        limit: jsHeapSizeLimit,
      };
    }
    return { used: 0, total: 0, limit: 0 };
  }

  /**
   * Check if memory is high
   * @returns {boolean}
   */
  isMemoryHigh() {
    const { used, limit } = this.getUsage();
    if (limit === 0) return false;
    return used / limit > 0.8;
  }

  /**
   * Start periodic monitoring
   * @param {number} interval - Check interval in ms
   */
  start(interval = 5000) {
    this.stop();
    this._intervalId = setInterval(() => {
      if (this.isMemoryHigh()) {
        const usage = this.getUsage();
        this._onWarning(usage);
      }
    }, interval);
  }

  /**
   * Stop monitoring
   */
  stop() {
    if (this._intervalId !== null) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
  }

  /**
   * Destroy monitor
   */
  destroy() {
    this.stop();
  }
}

// Export singleton instances
export const monitor = new PerformanceMonitor();
export const webVitals = new WebVitals((metric) => {
});
export const fpsMonitor = new FPSMonitor((fps) => {
  // Silent FPS tracking - accessible via getFPS()
});
export const memoryMonitor = new MemoryMonitor((usage) => {
  console.warn(`[MemoryMonitor] High memory: ${Math.round(usage.used / 1024 / 1024)}MB`);
});
