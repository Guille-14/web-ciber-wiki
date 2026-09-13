/**
 * Loading Components - Skeletons, empty states, spinners
 * @module components/loading
 */

import { $ } from '../utils/dom.js';

/**
 * Show skeleton loading in a grid container
 * @param {string} containerId - Element ID
 * @param {number} [count=6] - Number of skeleton cards
 */
export function showSkeletonGrid(containerId, count = 6) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = Array.from({ length: count }, () => `
    <div class="skeleton-card" aria-hidden="true">
      <div class="skeleton skeleton-text" style="width:40%;height:12px;margin-bottom:12px"></div>
      <div class="skeleton skeleton-text" style="width:80%;height:16px;margin-bottom:8px"></div>
      <div class="skeleton skeleton-text" style="width:100%;height:14px;margin-bottom:6px"></div>
      <div class="skeleton skeleton-text" style="width:60%;height:14px;margin-bottom:16px"></div>
      <div style="display:flex;gap:8px">
        <div class="skeleton" style="width:60px;height:20px;border-radius:12px"></div>
        <div class="skeleton" style="width:50px;height:20px;border-radius:12px"></div>
      </div>
    </div>
  `).join('');

  container.setAttribute('aria-busy', 'true');
  container.setAttribute('aria-label', 'Cargando contenido...');
}

/**
 * Hide skeleton loading
 * @param {string} containerId
 */
export function hideSkeletonGrid(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.removeAttribute('aria-busy');
  container.removeAttribute('aria-label');
}

/**
 * Render empty state
 * @param {string} icon - Emoji icon
 * @param {string} title - Title text
 * @param {string} desc - Description text
 * @param {string} [cta] - Optional CTA HTML
 * @returns {string} HTML string
 */
export function renderEmptyState(icon, title, desc, cta = '') {
  return `
    <div class="empty-state">
      <div class="empty-state-icon">${icon}</div>
      <div class="empty-state-title">${title}</div>
      <div class="empty-state-desc">${desc}</div>
      ${cta ? `<div style="margin-top:16px">${cta}</div>` : ''}
    </div>
  `;
}

/**
 * Show tab switching spinner
 * @param {string} sectionId - Section element ID
 */
export function showTabSpinner(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const grid = section.querySelector('.articles-grid, .owasp-grid, .glossary-grid, .tag-cloud, .guides-gallery, #bookmarks-grid, #history-list');
  if (grid) {
    grid.innerHTML = `
      <div class="tab-spinner" style="grid-column:1/-1;text-align:center;padding:3rem">
        <div class="spinner"></div>
        <div style="margin-top:12px;color:var(--text-dim);font-size:13px">Cargando...</div>
      </div>
    `;
    grid.setAttribute('aria-busy', 'true');
  }
}

/**
 * Hide tab spinner
 * @param {string} sectionId
 */
export function hideTabSpinner(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  const grid = section.querySelector('[aria-busy]');
  if (grid) {
    grid.removeAttribute('aria-busy');
  }
}

/**
 * Empty states for each module
 */
export const EMPTY_STATES = {
  bookmarks: () => renderEmptyState(
    '🔖',
    'Sin favoritos',
    'Guarda artículos haciendo clic en el icono 🔖 de cada tarjeta.',
    '<button class="btn-small" data-app-action="switchTab:articles">Explorar artículos</button>'
  ),
  history: () => renderEmptyState(
    '🕐',
    'Sin historial',
    'Los artículos que leas aparecerán aquí.',
    '<button class="btn-small" data-app-action="switchTab:articles">Explorar artículos</button>'
  ),
  search: (query) => renderEmptyState(
    '🔍',
    'Sin resultados',
    `No se encontraron artículos para "${query}". Intenta con otros términos.`
  ),
  glossary: () => renderEmptyState(
    '📖',
    'Glosario vacío',
    'No hay términos disponibles.'
  ),
  owasp: () => renderEmptyState(
    '🐛',
    'Sin datos OWASP',
    'No se pudieron cargar las vulnerabilidades OWASP.'
  ),
  cheatsheets: () => renderEmptyState(
    '⚡',
    'Sin cheatsheets',
    'No hay comandos disponibles.'
  ),
  guides: () => renderEmptyState(
    '📊',
    'Sin guías',
    'No hay guías visuales disponibles.'
  ),
  error: (message) => renderEmptyState(
    '⚠️',
    'Error',
    message || 'Algo salió mal. Intenta de nuevo.',
    '<button class="btn-small" data-app-action="reload">Recargar página</button>'
  )
};

/**
 * Create a loading spinner element
 * @param {string} [size='medium'] - 'small' | 'medium' | 'large'
 * @returns {HTMLElement}
 */
export function createSpinner(size = 'medium') {
  const sizes = { small: 20, medium: 32, large: 48 };
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  spinner.setAttribute('role', 'status');
  spinner.setAttribute('aria-label', 'Cargando');
  spinner.style.width = `${sizes[size] || sizes.medium}px`;
  spinner.style.height = `${sizes[size] || sizes.medium}px`;
  return spinner;
}
