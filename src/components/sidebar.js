/**
 * Sidebar navigation component for CyberWiki Hub.
 * Handles category filters, sidebar stats, mobile toggle, and nav links.
 * @module components/sidebar
 */

import { state } from '../core/state.js';
import { events, EVENTS } from '../core/events.js';
import { $, $$, delegate } from '../utils/dom.js';
import { renderArticles } from '../modules/articles/articles.js';

/** @type {HTMLElement|null} */
let categoriesFilter = null;

/** @type {HTMLElement|null} */
let sidebarStats = null;

/** @type {HTMLElement|null} */
let sidebar = null;

/** @type {HTMLElement|null} */
let sidebarOverlay = null;

/** @type {HTMLElement|null} */
let categoryTitle = null;

/** @type {object|null} */
let storedWikiData = null;

/** @type {Function|null} */
let onTabClick = null;

/**
 * Initialize sidebar component.
 * @param {object} wikiData - Wiki dataset containing categories and articles.
 * @param {Function} [tabSwitcher] - Function to call when a nav tab is clicked.
 */
export function initSidebar(wikiData, tabSwitcher) {
  storedWikiData = wikiData;
  onTabClick = tabSwitcher || null;
  categoriesFilter = $('categories-filter');
  sidebarStats = $('sidebar-stats');
  sidebar = $('sidebar');
  sidebarOverlay = $('sidebar-overlay');
  categoryTitle = $('current-category-title');

  setupMobileSidebar();
  setupCategoryFilter(wikiData);
  setupNavLinks();

  renderCategories(wikiData);
  renderSidebarStats(wikiData);
}

/**
 * Render category filter buttons in sidebar.
 * @param {object} [wikiData] - Wiki dataset containing categories and articles.
 */
export function renderCategories(wikiData) {
  wikiData = wikiData || storedWikiData;
  if (!categoriesFilter || !wikiData) return;

  const activeCategory = state.get('activeCategory') || 'all';
  let html = `<button class="filter-btn ${activeCategory === 'all' ? 'active' : ''}" data-category="all">📂 Todos los Temas</button>`;

  wikiData.categories.forEach(cat => {
    const count = wikiData.articles.filter(a => a.category === cat.id).length;
    html += `<button class="filter-btn ${activeCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">${cat.name} <span style="font-size:10px;opacity:0.6;margin-left:auto">${count}</span></button>`;
  });

  categoriesFilter.innerHTML = html;
}

/**
 * Render sidebar statistics showing article distribution per category.
 * @param {object} [wikiData] - Wiki dataset containing categories and articles.
 */
export function renderSidebarStats(wikiData) {
  wikiData = wikiData || storedWikiData;
  if (!sidebarStats || !wikiData) return;

  const total = wikiData.articles.length;
  const cats = wikiData.categories;
  const bookmarks = (state.get('bookmarks') || []).length;
  const totalReadTime = wikiData.articles.reduce((sum, a) => {
    const text = a.content?.replace(/<[^>]+>/g, '').trim() || '';
    return sum + Math.max(1, Math.round(text.split(/\s+/).length / 200));
  }, 0);

  let html = `
    <div class="sidebar-stat-row"><span class="stat-label">📚 Artículos</span><span class="stat-count">${total.toLocaleString()}</span></div>
    <div class="sidebar-stat-row"><span class="stat-label">📂 Categorías</span><span class="stat-count">${cats.length}</span></div>
    <div class="sidebar-stat-row"><span class="stat-label">📖 Tiempo lectura</span><span class="stat-count">${Math.round(totalReadTime / 60)}h</span></div>
    <div class="sidebar-stat-row"><span class="stat-label">⭐ Guardados</span><span class="stat-count">${bookmarks}</span></div>
  `;

  const topCats = cats.slice(0, 4);
  topCats.forEach((cat, i) => {
    const count = wikiData.articles.filter(a => a.category === cat.id).length;
    const pct = total ? (count / total) * 100 : 0;
    html += `<div class="sidebar-stat-row"><span class="stat-label">${cat.name.split(' ').slice(0, 2).join(' ')}</span><div class="sidebar-stat-bar"><div class="sidebar-stat-fill" style="width:${pct}%;background:var(--stat-color-${i + 1})"></div></div><span class="stat-count">${count}</span></div>`;
  });

  sidebarStats.innerHTML = html;
}

/**
 * Toggle mobile sidebar open/closed state.
 */
export function toggleMobileSidebar() {
  if (!sidebar) return;

  sidebar.classList.toggle('open');
  if (sidebarOverlay) {
    sidebarOverlay.classList.toggle('active');
  }

  events.emit(EVENTS.SIDEBAR_TOGGLED, {
    isOpen: sidebar.classList.contains('open')
  });
}

/**
 * Close mobile sidebar.
 */
export function closeMobileSidebar() {
  if (sidebar) {
    sidebar.classList.remove('open');
  }
  if (sidebarOverlay) {
    sidebarOverlay.classList.remove('active');
  }
}

/**
 * Set up mobile sidebar toggle button and overlay click handlers.
 */
function setupMobileSidebar() {
  const menuToggle = $('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileSidebar);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeMobileSidebar);
  }
}

/**
 * Set up category filter click delegation.
 * @param {object} wikiData - Wiki dataset containing categories and articles.
 */
function setupCategoryFilter(wikiData) {
  if (!categoriesFilter) return;

  delegate(categoriesFilter, 'click', '.filter-btn', (e, target) => {
    const catId = target.dataset.category;
    if (!catId) return;

    state.set('activeCategory', catId);

    const catObj = wikiData.categories.find(c => c.id === catId);
    if (categoryTitle) {
      categoryTitle.textContent = catObj ? catObj.name : '📚 Artículos y Guías';
    }

    events.emit(EVENTS.ARTICLE_FILTER_CHANGED, {
      category: catId,
      categoryName: catObj?.name || 'Todos'
    });

    renderCategories(wikiData);
    if (typeof onTabClick === 'function') {
      onTabClick('articles');
    }
    renderArticles();
  });
}

/**
 * Set up nav link click handlers for tab switching via event delegation.
 */
function setupNavLinks() {
  const sidebarNav = $$('.sidebar-nav');
  if (!sidebarNav) return;

  sidebarNav.addEventListener('click', (e) => {
    const link = e.target.closest('.nav-link');
    if (!link) return;

    e.preventDefault();
    const tabId = link.dataset.tab;
    if (tabId && typeof onTabClick === 'function') {
      onTabClick(tabId);
    }
  });
}
