/**
 * Error Handler - Global error boundaries, retry logic, circuit breaker
 * @module core/error-handler
 */

import { events, EVENTS } from './events.js';

/**
 * @typedef {Object} RetryConfig
 * @property {number} maxRetries - Max retry attempts (default: 3)
 * @property {number} baseDelay - Base delay in ms (default: 1000)
 * @property {number} maxDelay - Max delay in ms (default: 30000)
 * @property {number} factor - Exponential backoff factor (default: 2)
 */

/**
 * @typedef {Object} CircuitBreakerConfig
 * @property {number} failureThreshold - Failures before opening (default: 5)
 * @property {number} resetTimeout - ms before half-open (default: 60000)
 * @property {number} halfOpenMax - Calls in half-open state (default: 1)
 */

class ErrorHandler {
  constructor() {
    this.errorLog = [];
    this.maxLogSize = 100;
    this.initialized = false;
    /** @type {boolean} Prevents recursive error emission */
    this._handlingError = false;
  }

  /**
   * Initialize global error handlers
   */
  init() {
    if (this.initialized) return;

    window.onerror = (message, source, lineno, colno, error) => {
      this.handleError({
        type: 'global',
        message: String(message),
        source,
        lineno,
        colno,
        error,
        timestamp: Date.now()
      });
      return false;
    };

    this._unhandledHandler = (event) => {
      this.handleError({
        type: 'unhandledrejection',
        message: event.reason?.message || String(event.reason),
        error: event.reason,
        timestamp: Date.now()
      });
    };
    window.addEventListener('unhandledrejection', this._unhandledHandler);

    this.initialized = true;
  }

  /**
   * Handle an error
   * @param {Object} errorInfo
   * @returns {string} Error ID
   */
  handleError(errorInfo) {
    const entry = {
      ...errorInfo,
      id: `err_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
    };

    this.errorLog.push(entry);
    if (this.errorLog.length > this.maxLogSize) {
      this.errorLog.shift();
    }

    console.error(`[ErrorHandler] ${entry.type}:`, entry.message, entry.error || '');

    if (!this._handlingError) {
      this._handlingError = true;
      try {
        events.emit(EVENTS.APP_ERROR, { error: entry.error, info: entry });
      } finally {
        this._handlingError = false;
      }
    }

    return entry.id;
  }

  /**
   * Get error log
   * @returns {Array}
   */
  getErrorLog() {
    return [...this.errorLog];
  }

  /**
   * Get error stats
   * @returns {Object}
   */
  getStats() {
    const byType = {};
    for (const entry of this.errorLog) {
      byType[entry.type] = (byType[entry.type] || 0) + 1;
    }
    return {
      total: this.errorLog.length,
      byType,
      lastError: this.errorLog[this.errorLog.length - 1] || null
    };
  }

  /**
   * Clear error log
   */
  clearLog() {
    this.errorLog = [];
  }

  /**
   * Destroy global handlers
   */
  destroy() {
    window.onerror = null;
    window.removeEventListener('unhandledrejection', this._unhandledHandler);
    this.initialized = false;
  }
}

/**
 * Safe event emitter wrapper - catches listener errors
 * @param {Function} emitFn - Original emit function
 * @param {string} eventName - Event name for logging
 * @returns {Function} Wrapped emit
 */
export function safeEmit(emitFn, eventName) {
  return (data) => {
    try {
      return emitFn(data);
    } catch (err) {
      console.error(`[EventBus] Listener error for "${eventName}":`, err);
      events.emit(EVENTS.APP_ERROR, { error: err, info: { event: eventName } });
    }
  };
}

/**
 * Retry a function with exponential backoff
 * @param {Function} fn - Async function to retry
 * @param {RetryConfig} [config={}] - Retry configuration
 * @returns {Promise<*>} Result of fn
 */
export async function retryWithBackoff(fn, config = {}) {
  const { maxRetries = 3, baseDelay = 1000, maxDelay = 30000, factor = 2 } = config;
  let lastError;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;

      if (attempt < maxRetries) {
        const delay = Math.min(baseDelay * Math.pow(factor, attempt), maxDelay);
        const jitter = delay * 0.1 * Math.random();
        console.debug(`[Retry] Attempt ${attempt + 1}/${maxRetries} failed, retrying in ${Math.round(delay + jitter)}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay + jitter));
      }
    }
  }

  throw lastError;
}

/**
 * Circuit breaker pattern
 */
export class CircuitBreaker {
  /**
   * @param {CircuitBreakerConfig} [config={}]
   */
  constructor(config = {}) {
    this.failureThreshold = config.failureThreshold || 5;
    this.resetTimeout = config.resetTimeout || 60000;
    this.halfOpenMax = config.halfOpenMax || 1;

    this.state = 'closed'; // closed | open | half-open
    this.failureCount = 0;
    this.successCount = 0;
    this.lastFailureTime = null;
    this.halfOpenCalls = 0;
  }

  /**
   * Execute a function through the circuit breaker
   * @param {Function} fn - Async function to execute
   * @returns {Promise<*>}
   */
  async execute(fn) {
    if (this.state === 'open') {
      if (Date.now() - this.lastFailureTime >= this.resetTimeout) {
        this.state = 'half-open';
        this.halfOpenCalls = 0;
      } else {
        throw new Error('Circuit breaker is OPEN - requests blocked');
      }
    }

    if (this.state === 'half-open') {
      if (this.halfOpenCalls >= this.halfOpenMax) {
        throw new Error('Circuit breaker is HALF-OPEN - max calls reached');
      }
      this.halfOpenCalls++;
    }

    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (err) {
      this.onFailure();
      throw err;
    }
  }

  onSuccess() {
    if (this.state === 'half-open') {
      this.successCount++;
      if (this.successCount >= this.halfOpenMax) {
        this.state = 'closed';
        this.failureCount = 0;
        this.successCount = 0;
      }
    } else {
      this.failureCount = 0;
    }
  }

  onFailure() {
    this.failureCount++;
    this.lastFailureTime = Date.now();

    if (this.state === 'half-open') {
      this.state = 'open';
      console.debug('[CircuitBreaker] Transitioning back to open');
    } else if (this.failureCount >= this.failureThreshold) {
      this.state = 'open';
      console.debug(`[CircuitBreaker] OPEN after ${this.failureCount} failures`);
    }
  }

  getState() {
    return {
      state: this.state,
      failureCount: this.failureCount,
      lastFailureTime: this.lastFailureTime
    };
  }

  reset() {
    this.state = 'closed';
    this.failureCount = 0;
    this.successCount = 0;
    this.halfOpenCalls = 0;
  }
}

/**
 * Safe addEventListener wrapper
 * @param {HTMLElement} el - Element
 * @param {string} event - Event name
 * @param {Function} handler - Event handler
 * @param {Object} [options] - addEventListener options
 */
export function safeOn(el, event, handler, options) {
  if (!el) return () => {};

  const wrappedHandler = (e) => {
    try {
      handler(e);
    } catch (err) {
      console.error(`[ErrorHandler] Event "${event}" handler error:`, err);
      events.emit(EVENTS.APP_ERROR, { error: err, info: { event, element: el.tagName } });
    }
  };

  el.addEventListener(event, wrappedHandler, options);
  return () => el.removeEventListener(event, wrappedHandler, options);
}

// Export singleton
export const errorHandler = new ErrorHandler();
