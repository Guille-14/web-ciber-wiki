/**
 * PWA Module - Install prompt, offline detection, updates
 * @module modules/pwa
 */

import { events, EVENTS } from '../../core/events.js';
import { $, $$, showToast } from '../../utils/dom.js';

let deferredPrompt = null;
let isOnline = navigator.onLine;
let updateAvailable = false;
let registration = null;

/**
 * Initialize PWA features
 */
export function initPWA() {
  // Listen for install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallBanner();
  });

  // Listen for app installed
  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    hideInstallBanner();
    showToast('App instalada correctamente', 'success');
  });

  // Online/offline detection
  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  // Check initial state
  if (!navigator.onLine) {
    showOfflineIndicator();
  }

  // Register service worker
  registerServiceWorker();

}

/**
 * Register service worker and listen for updates
 */
async function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  // Inside a native app (Capacitor) the assets are bundled and offline by
  // default; a cache-first SW would only serve stale content.
  if (window.Capacitor?.isNativePlatform?.()) {
    // Builds before the native check may have registered a service worker
    // that now serves stale content from a previous version. Unregister it
    // so the WebView always reads the assets shipped in the bundle.
    try {
      const regs = await navigator.serviceWorker.getRegistrations();
      for (const reg of regs) await reg.unregister();
      if (regs.length && window.caches) {
        const keys = await caches.keys();
        for (const key of keys) await caches.delete(key);
      }
    } catch (err) {
      console.warn('[PWA] Failed to unregister native service worker:', err);
    }
    return;
  }

  // Never use a service worker during development: the SW's cache-first
  // strategy serves stale assets and makes the app look broken on localhost.
  if (import.meta.env.DEV) {
    try {
      const regs = await navigator.serviceWorker.getRegistrations();
      for (const reg of regs) await reg.unregister();
    } catch (err) {
      console.warn('[PWA] Failed to unregister dev service worker:', err);
    }
    return;
  }

  try {
    registration = await navigator.serviceWorker.register('/sw.js');

    // Check for updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      if (!newWorker) return;

      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          updateAvailable = true;
          showUpdateBanner();
        }
      });
    });
  } catch (err) {
    console.warn('[PWA] Service Worker registration failed:', err);
  }
}

/**
 * Show install banner in sidebar footer
 */
function showInstallBanner() {
  const footer = $$('.sidebar-footer');
  if (!footer) return;

  // Clean up any existing install buttons first to prevent duplicates
  hideInstallBanner();

  const btn = document.createElement('button');
  btn.id = 'pwa-install-btn';
  btn.className = 'theme-toggle pwa-install-btn';
  btn.title = 'Instalar app';
  btn.setAttribute('aria-label', 'Instalar CyberWiki como app');
  btn.textContent = '📲';
  btn.addEventListener('click', promptInstall);

  footer.insertBefore(btn, footer.firstChild);
}

function hideInstallBanner() {
  const buttons = document.querySelectorAll('#pwa-install-btn, .pwa-install-btn');
  buttons.forEach((b) => b.remove());
}

/**
 * Trigger the install prompt
 */
async function promptInstall() {
  if (!deferredPrompt) return;

  const currentPrompt = deferredPrompt;
  deferredPrompt = null;
  hideInstallBanner();

  try {
    currentPrompt.prompt();
    const { outcome } = await currentPrompt.userChoice;

    if (outcome === 'accepted') {
      showToast('Instalando CyberWiki Hub...', 'info');
    }
  } catch (err) {
    console.warn('[PWA] Install prompt error:', err);
  }
}

/**
 * Show update available banner
 */
function showUpdateBanner() {
  showToast('Nueva versión disponible. Recarga para actualizar.', 'info', 10000);
}

/**
 * Handle going online
 */
function handleOnline() {
  isOnline = true;
  hideOfflineIndicator();
  showToast('Conexión restaurada', 'success');
  events.emit('pwa:online');
}

/**
 * Handle going offline
 */
function handleOffline() {
  isOnline = false;
  showOfflineIndicator();
  showToast('Sin conexión. Modo offline activado.', 'warning', 5000);
  events.emit('pwa:offline');
}

/**
 * Show offline indicator in header
 */
function showOfflineIndicator() {
  const header = $$('.content-header');
  if (!header || $('#offline-indicator')) return;

  const indicator = document.createElement('div');
  indicator.id = 'offline-indicator';
  indicator.className = 'offline-indicator';
  indicator.setAttribute('role', 'status');
  indicator.innerHTML = '<span class="offline-dot"></span> Sin conexión';
  header.appendChild(indicator);
}

function hideOfflineIndicator() {
  const indicator = $('#offline-indicator');
  if (indicator) indicator.remove();
}

/**
 * Check if app is online
 * @returns {boolean}
 */
export function getOnlineStatus() {
  return isOnline;
}

/**
 * Check if update is available
 * @returns {boolean}
 */
export function isUpdateAvailable() {
  return updateAvailable;
}

/**
 * Apply pending update
 */
export function applyUpdate() {
  if (registration?.waiting) {
    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    window.location.reload();
  }
}
