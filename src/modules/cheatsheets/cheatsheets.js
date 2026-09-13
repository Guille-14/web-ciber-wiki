/**
 * Cheatsheets module for CyberWiki Hub.
 * Renders terminal-style command reference cards.
 * @module modules/cheatsheets/cheatsheets
 */

import { state } from '../../core/state.js';
import { events, EVENTS } from '../../core/events.js';
import { $, copyToClipboard, showToast, escapeHtml } from '../../utils/dom.js';
import { highlightMatch } from '../../utils/html.js';

let wikiData = null;

function flashBtn(btn) {
  const original = btn.textContent;
  btn.classList.add('copy-ok');
  btn.textContent = '✅';
  setTimeout(() => {
    btn.classList.remove('copy-ok');
    btn.textContent = original;
  }, 1500);
}

/**
 * Render cheatsheets as terminal blocks.
 */
export function renderCheatsheets() {
  const grid = $('cheatsheets-list');
  if (!grid) return;
  const csData = (wikiData && wikiData.cheatsheets) || (window.WIKI_DATA && window.WIKI_DATA.cheatsheets) || window.WIKI_DATA_CHEATSHEETS;
  if (!csData) return;

  const q = (state.get('searchQuery') || '').toLowerCase();

  let html = '';
  csData.forEach((cs) => {
    const cmds = q
      ? cs.commands.filter((c) => c.cmd.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q))
      : cs.commands;

    if (!cmds.length) return;

    html += `<div class="terminal-block">
      <div class="terminal-header">
        <div class="terminal-dot terminal-dot-red"></div>
        <div class="terminal-dot terminal-dot-yellow"></div>
        <div class="terminal-dot terminal-dot-green"></div>
        <span class="terminal-title">${escapeHtml(cs.tool)} --help</span>
        <button class="copy-all-btn" data-copy-all="${encodeURIComponent(cmds.map((c) => c.cmd).join('\n'))}" title="Copiar todos los comandos">⧉ Copiar todo</button>
      </div>
      <div class="terminal-content">`;

    cmds.forEach((cmd) => {
      html += `<div class="cmd-row">
        <div class="cmd-row-body">
          <div style="font-size:11px;color:var(--text-dim)"># ${highlightMatch(cmd.desc, q)}</div>
          <div class="cmd-text" data-cmd="${encodeURIComponent(cmd.cmd)}">$ ${highlightMatch(cmd.cmd, q)}</div>
        </div>
        <button class="copy-btn" data-copy="${encodeURIComponent(cmd.cmd)}" title="Copiar comando">Copy</button>
      </div>`;
    });

    html += '</div></div>';
  });

  grid.innerHTML = html || '<div class="empty-state"><div class="empty-state-icon">⚡</div><div class="empty-state-title">Sin resultados</div></div>';
}

/**
 * Initialize cheatsheets module.
 * @param {object} data - WIKI_DATA
 */
export function initCheatsheets(data) {
  wikiData = data;

  const grid = $('cheatsheets-list');
  if (grid) {
    grid.addEventListener('click', (e) => {
      const allBtn = e.target.closest('[data-copy-all]');
      if (allBtn) {
        const cmds = decodeURIComponent(allBtn.dataset.copyAll);
        copyToClipboard(cmds).then(() => {
          showToast(`✅ ${cmds.split('\n').length} comandos copiados`);
          flashBtn(allBtn);
        });
        return;
      }
      const btn = e.target.closest('[data-copy]');
      if (btn) {
        const cmd = decodeURIComponent(btn.dataset.copy);
        copyToClipboard(cmd).then(() => {
          showToast('✅ Comando copiado');
          flashBtn(btn);
        });
      }
    });
  }

  events.on(EVENTS.SEARCH_QUERY_CHANGED, () => {
    renderCheatsheets();
  });

  events.on(EVENTS.TAB_CHANGED, (tab) => {
    if (tab === 'cheatsheets') renderCheatsheets();
  });
}
