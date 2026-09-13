/**
 * Theme toggle component for CyberWiki Hub.
 * Handles light/dark theme switching with persistence.
 * @module components/theme-toggle
 */

import { state } from '../core/state.js';
import { events, EVENTS } from '../core/events.js';
import { storage, STORAGE_KEYS } from '../core/storage.js';
import { $, showToast } from '../utils/dom.js';

/** @type {HTMLButtonElement|null} */
let themeToggle = null;

/**
 * Get current theme from state/storage.
 * @returns {'light'|'dark'}
 */
function getCurrentTheme() {
  return state.get('theme') || 'dark';
}

/**
 * Update toggle button accessibility attributes.
 * @param {'light'|'dark'} theme
 */
function updateA11y(theme) {
  if (!themeToggle) return;
  const isLight = theme === 'light';
  themeToggle.setAttribute('aria-label', isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
  themeToggle.setAttribute('aria-pressed', String(!isLight));
}

/**
 * Apply theme to document with smooth transition.
 * @param {'light'|'dark'} theme
 */
function applyTheme(theme) {
  const isLight = theme === 'light';
  const root = document.documentElement;

  root.classList.add('theme-transitioning');
  root.classList.toggle('light-theme', isLight);
  root.style.colorScheme = isLight ? 'light' : 'dark';

  if (themeToggle) {
    themeToggle.textContent = isLight ? '🌙' : '🌓';
    updateA11y(theme);
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      root.classList.remove('theme-transitioning');
    });
  });
}

/**
 * Toggle between light and dark themes.
 */
function toggleTheme() {
  const current = getCurrentTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  state.set('theme', next);
  storage.set(STORAGE_KEYS.THEME, next);
  applyTheme(next);
  showToast(next === 'light' ? '☀️ Modo claro' : '🌙 Modo oscuro');
  events.emit(EVENTS.THEME_CHANGED, { theme: next });
}

/**
 * Initialize theme toggle component.
 */
export function initTheme() {
  themeToggle = $('theme-toggle');
  if (!themeToggle) return;

  const saved = storage.get(STORAGE_KEYS.THEME);
  let theme;
  if (saved) {
    theme = saved;
  } else {
    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  state.set('theme', theme);
  applyTheme(theme);
  themeToggle.addEventListener('click', toggleTheme);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!storage.get(STORAGE_KEYS.THEME)) {
      const newTheme = e.matches ? 'dark' : 'light';
      state.set('theme', newTheme);
      applyTheme(newTheme);
    }
  });

  events.on(EVENTS.THEME_CHANGED, ({ theme }) => {
    applyTheme(theme);
  });
}

/**
 * Get current theme.
 * @returns {'light'|'dark'}
 */
export function getTheme() {
  return getCurrentTheme();
}
