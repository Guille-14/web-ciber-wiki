/**
 * Glossary module for CyberWiki Hub.
 * Renders glossary terms grouped by security pillars.
 * @module modules/glossary/glossary
 */

import { state } from '../../core/state.js';
import { events, EVENTS } from '../../core/events.js';
import { $ } from '../../utils/dom.js';
import { highlightMatch } from '../../utils/html.js';

let wikiData = null;

const PILLARS = [
  { id: 'red', name: '⚔️ Red Team & Ofensivo', keywords: ['exploit', 'ataque', 'payload', 'phishing', 'inyección', 'shell', 'red team', 'hacking', 'kerberoasting', 'backdoor', 'c2', 'social engineering', 'escalada', 'pass-the-hash'] },
  { id: 'blue', name: '🛡️ Blue Team & Defensivo', keywords: ['defensa', 'firewall', 'waf', 'soc', 'siem', 'monitoreo', 'hardening', 'blue team', 'ids', 'ips', 'acl', 'edr', 'ndr', 'ueba', 'threat hunting', 'zero trust'] },
  { id: 'net', name: '🌐 Redes & Comunicaciones', keywords: ['protocolo', 'tcp', 'ip', 'dns', 'http', 'routing', 'switch', 'vlan', 'puerto', 'vpn', 'nat', 'dhcp', 'arp', 'ssh', 'tls', 'snmp', 'proxy'] },
  { id: 'crypto', name: '🔐 Criptografía & Privacidad', keywords: ['cifrado', 'hash', 'pki', 'llave', 'ssl', 'tls', 'certificado', 'cripto', 'aes', 'tor', 'anonimato'] },
  { id: 'malware', name: '🔬 Forense & Malware', keywords: ['virus', 'ransomware', 'malware', 'forense', 'memoria', 'disco', 'análisis', 'yara', 'wiper', 'troyano', 'loader', 'polimórfico', 'keylogger'] },
  { id: 'grc', name: '📑 Gestión & Estándares', keywords: ['cve', 'cvss', 'riesgo', 'apt', 'vulnerabilidad', 'auditoría', 'cumplimiento', 'pci', 'rbac', 'mfa', 'va', 'byod'] }
];

/**
 * Render glossary grouped by pillars.
 */
export function renderGlossary() {
  const grid = $('glossary-grid');
  if (!grid || !wikiData) return;

  const q = (state.get('searchQuery') || '').toLowerCase();
  const items = q
    ? wikiData.glossary.filter((i) => i.term.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q))
    : wikiData.glossary;

  if (!items.length) {
    grid.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📖</div><div class="empty-state-title">Sin resultados</div></div>';
    return;
  }

  const pillarKeys = PILLARS.map((p) => p.keywords);
  const grouped = PILLARS.map(() => []);
  const others = [];

  items.forEach((item) => {
    const text = (item.term + ' ' + item.desc).toLowerCase();
    let found = false;
    PILLARS.forEach((_, idx) => {
      if (!found && pillarKeys[idx].some((k) => text.includes(k))) {
        grouped[idx].push(item);
        found = true;
      }
    });
    if (!found) others.push(item);
  });

  let html = '';

  PILLARS.forEach((pillar, idx) => {
    if (!grouped[idx].length) return;
    html += `<div class="pillar-section"><div class="pillar-header">${pillar.name} <span style="font-size:12px;font-weight:400;color:var(--text-dim);margin-left:auto">${grouped[idx].length}</span></div><div class="pillar-grid">`;
    grouped[idx].forEach((item) => {
      html += `<div class="pillar-card"><div class="term-title">${highlightMatch(item.term, q)}</div><div class="term-desc">${highlightMatch(item.desc, q)}</div></div>`;
    });
    html += '</div></div>';
  });

  if (others.length) {
    html += `<div class="pillar-section"><div class="pillar-header">🔍 Otros Conceptos <span style="font-size:12px;font-weight:400;color:var(--text-dim);margin-left:auto">${others.length}</span></div><div class="pillar-grid">`;
    others.forEach((item) => {
      html += `<div class="pillar-card"><div class="term-title">${highlightMatch(item.term, q)}</div><div class="term-desc">${highlightMatch(item.desc, q)}</div></div>`;
    });
    html += '</div></div>';
  }

  grid.innerHTML = html;
}

/**
 * Initialize glossary module.
 * @param {object} data - WIKI_DATA
 */
export function initGlossary(data) {
  wikiData = data;

  events.on(EVENTS.SEARCH_QUERY_CHANGED, () => {
    renderGlossary();
  });

  events.on(EVENTS.TAB_CHANGED, (tab) => {
    if (tab === 'glossary') renderGlossary();
  });
}
