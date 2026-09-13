/**
 * Header component for CyberWiki Hub.
 * Handles stats display, clock, and search input behavior.
 * @module components/header
 */

import { state } from '../core/state.js';
import { events, EVENTS } from '../core/events.js';
import { $ } from '../utils/dom.js';
import { formatNumber } from '../utils/format.js';

/** @type {HTMLElement|null} */
let clockEl = null;

/** @type {HTMLInputElement|null} */
let searchInput = null;

/** @type {HTMLElement|null} */
let searchKbd = null;

/** @type {number|null} */
let clockInterval = null;

/** @type {object|null} */
let storedWikiData = null;

/**
 * Initialize header component.
 * @param {object} wikiData - Wiki dataset containing articles, cheatsheets, and glossary.
 */
export function initHeader(wikiData) {
  storedWikiData = wikiData;
  clockEl = $('header-clock');
  searchInput = $('search-input');
  searchKbd = document.querySelector('.search-kbd');

  updateStats(wikiData);
  setupClock();
  setupSearchInput();
}

/**
 * Update statistics display in header and footer.
 * @param {object} [wikiData] - Wiki dataset containing articles, cheatsheets, and glossary.
 */
export function updateStats(wikiData) {
  wikiData = wikiData || storedWikiData;
  if (!wikiData) return;
  const articles = wikiData.articles.length;
  const cmdCount = wikiData.cheatsheets.reduce((sum, cs) => sum + cs.commands.length, 0);
  const terms = wikiData.glossary.length;

  const allTags = new Set();
  wikiData.articles.forEach(a => (a.tags || []).forEach(t => allTags.add(t)));

  const statArticles = $('stat-articles');
  const statCheatsheets = $('stat-cheatsheets');
  const statGlossary = $('stat-glossary');
  const footerArticles = $('footer-articles');
  const footerCheatsheets = $('footer-cheatsheets');
  const footerGlossary = $('footer-glossary');
  const footerTags = $('footer-tags');

  if (statArticles) statArticles.textContent = formatNumber(articles);
  if (statCheatsheets) statCheatsheets.textContent = formatNumber(cmdCount);
  if (statGlossary) statGlossary.textContent = formatNumber(terms);
  if (footerArticles) footerArticles.textContent = formatNumber(articles);
  if (footerCheatsheets) footerCheatsheets.textContent = formatNumber(cmdCount);
  if (footerGlossary) footerGlossary.textContent = formatNumber(terms);
  if (footerTags) footerTags.textContent = formatNumber(allTags.size);
}

/**
 * Update clock display with current time.
 */
export function updateClock() {
  if (!clockEl) return;
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  clockEl.innerHTML = `${hours}<span class="clock-separator">:</span>${minutes}`;
}

/**
 * Set up clock synced to the next minute boundary.
 */
function setupClock() {
  if (clockInterval) {
    clearInterval(clockInterval);
  }

  function scheduleClock() {
    updateClock();
    const now = new Date();
    const msToNextMin = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    setTimeout(() => {
      updateClock();
      clockInterval = setInterval(updateClock, 60000);
    }, msToNextMin);
  }

  scheduleClock();
}

/**
 * Set up search input focus/blur behavior.
 * Shows/hides keyboard shortcut hint based on input state.
 */
function setupSearchInput() {
  if (!searchInput) return;

  searchInput.addEventListener('focus', () => {
    if (searchKbd) {
      searchKbd.style.display = 'none';
    }
  });

  searchInput.addEventListener('blur', () => {
    if (searchKbd && !searchInput.value) {
      searchKbd.style.display = '';
    }
  });
}
