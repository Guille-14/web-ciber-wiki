/**
 * Test setup - Global test utilities and mocks
 */

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = String(value); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { store = {}; },
    get length() { return Object.keys(store).length; },
    key: (index) => Object.keys(store)[index] || null
  };
})();

// Mock window globals
if (typeof globalThis.window === 'undefined') {
  globalThis.window = {};
}

globalThis.localStorage = localStorageMock;

// Also set on global for Node.js environment
if (typeof global !== 'undefined') {
  global.localStorage = localStorageMock;
}

// Mock document
if (!globalThis.document) {
  globalThis.document = {
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    createElement: (tag) => ({
      tagName: tag,
      className: '',
      style: {},
      textContent: '',
      innerHTML: '',
      appendChild: () => {},
      removeChild: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      setAttribute: () => {},
      getAttribute: () => null,
      classList: {
        add: () => {},
        remove: () => {},
        toggle: () => {},
        contains: () => false
      }
    }),
    body: {
      appendChild: () => {},
      removeChild: () => {},
      insertBefore: () => {},
      firstChild: null
    },
    documentElement: {
      style: { setProperty: () => {}, removeProperty: () => {} },
      classList: {
        add: () => {},
        remove: () => {},
        contains: () => false
      }
    },
    addEventListener: () => {},
    removeEventListener: () => {}
  };
}

// Mock navigator
if (!globalThis.navigator) {
  globalThis.navigator = {
    onLine: true,
    clipboard: {
      writeText: () => Promise.resolve()
    }
  };
}

// Mock window events
if (!globalThis.window.addEventListener) {
  globalThis.window.addEventListener = () => {};
}
if (!globalThis.window.removeEventListener) {
  globalThis.window.removeEventListener = () => {};
}

// Mock matchMedia
if (!globalThis.window.matchMedia) {
  globalThis.window.matchMedia = () => ({
    matches: false,
    addEventListener: () => {},
    removeEventListener: () => {}
  });
}

// Mock requestAnimationFrame
if (!globalThis.requestAnimationFrame) {
  globalThis.requestAnimationFrame = (cb) => setTimeout(cb, 16);
}

// Mock performance
if (!globalThis.performance) {
  globalThis.performance = {
    now: () => Date.now(),
    mark: () => {},
    measure: () => {},
    getEntriesByType: () => []
  };
}

// Export test utilities
export const mockLocalStorage = localStorageMock;

export function resetMocks() {
  localStorageMock.clear();
}

export function createMockEventBus() {
  const listeners = new Map();
  return {
    on: (event, fn) => {
      if (!listeners.has(event)) listeners.set(event, []);
      listeners.get(event).push(fn);
      return () => {
        const arr = listeners.get(event);
        const idx = arr.indexOf(fn);
        if (idx > -1) arr.splice(idx, 1);
      };
    },
    emit: (event, data) => {
      for (const fn of (listeners.get(event) || [])) {
        try { fn(data); } catch (e) { /* ignore */ }
      }
    },
    off: (event, fn) => {
      const arr = listeners.get(event);
      if (arr) {
        const idx = arr.indexOf(fn);
        if (idx > -1) arr.splice(idx, 1);
      }
    },
    once: (event, fn) => {
      const wrapper = (data) => {
        fn(data);
        listeners.get(event)?.splice(listeners.get(event).indexOf(wrapper), 1);
      };
      return this.on(event, wrapper);
    }
  };
}
