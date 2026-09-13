/**
 * OWASP module for CyberWiki Hub.
 * Renders the OWASP Top 10 table.
 * @module modules/owasp/owasp
 */

import { state } from '../../core/state.js';
import { events, EVENTS } from '../../core/events.js';
import { $, escapeHtml } from '../../utils/dom.js';
import { highlightMatch } from '../../utils/html.js';

let wikiData = null;

/**
 * Render OWASP Top 10 table.
 */
export function renderOwasp() {
  const grid = $('owasp-grid');
  if (!grid || !wikiData) return;

  const q = (state.get('searchQuery') || '').toLowerCase();
  const filtered = q
    ? wikiData.owaspTop10.filter((i) => i.title.toLowerCase().includes(q) || i.summary.toLowerCase().includes(q))
    : wikiData.owaspTop10;

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🐛</div><div class="empty-state-title">Sin resultados</div></div>';
    return;
  }

  let html = '<table class="owasp-table"><thead><tr><th>CÓDIGO</th><th>VULNERABILIDAD</th><th>IMPACTO</th><th>PREVENCIÓN CLAVE</th></tr></thead><tbody>';

  filtered.forEach((row) => {
    const impactClass = row.impact === 'Crítico' ? 'impact-critical' : 'impact-high';
    html += `<tr class="owasp-row">
      <td style="font-family:monospace;color:var(--accent-blue);font-weight:600">${escapeHtml(row.code)}</td>
      <td><strong>${highlightMatch(row.title, q)}</strong><br><small style="color:var(--text-dim)">${escapeHtml(row.summary)}</small></td>
      <td><span class="impact-badge ${impactClass}">${escapeHtml(row.impact.toUpperCase())}</span></td>
      <td style="font-size:12px">${escapeHtml(row.prevention)}</td>
    </tr>`;
  });

  grid.innerHTML = html + '</tbody></table>';
}

/**
 * Initialize OWASP module.
 * @param {object} data - WIKI_DATA
 */
export function initOwasp(data) {
  wikiData = data;

  events.on(EVENTS.SEARCH_QUERY_CHANGED, () => {
    renderOwasp();
  });

  events.on(EVENTS.TAB_CHANGED, (tab) => {
    if (tab === 'owasp') renderOwasp();
  });
}
