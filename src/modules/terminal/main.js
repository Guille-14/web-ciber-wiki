/* ═══════════════════════════════════════════════════════════════
   main.js — Punto de entrada de la Sala de Comandos.
   Versión ES module integrada en CyberWiki Hub. Inyecta el HTML,
   arranca el boot, y une la capa de presentación (UI) con la
   lógica (Shell / GameState / VFS) mediante delegación de clicks
   compatible con CSP (nada de onclick inline).
   ═══════════════════════════════════════════════════════════════ */
import { injectTerminalHTML } from './terminal-html.js';

const BOOT_LINES = [
  { t: 'dim',  l: '[0.000] BIOS: CiberQuiz Training Range v2.0' },
  { t: 'dim',  l: '[0.112] CPU: x86_64 · RAM: 4096MB' },
  { t: 'dim',  l: '[0.318] Cargando sistema de archivos virtual...' },
  { t: 'ok',   l: '[0.521] VFS: OK' },
  { t: 'dim',  l: '[0.589] Cargando red de práctica (10.10.x.x)...' },
  { t: 'ok',   l: `[0.704] NETWORK: ${Object.keys(globalThis.HOSTS).length} hosts registrados` },
  { t: 'dim',  l: '[0.812] Cargando módulos de ataque...' },
  { t: 'ok',   l: '[0.953] MODULES: nmap, gobuster, ffuf, aws, kubectl, aircrack-ng, responder... OK' },
  { t: 'dim',  l: '[1.102] Restaurando estado de sesión...' },
  { t: 'ok',   l: '[1.247] GAMESTATE: listo' },
  { t: 'cyan', l: '' },
  { t: 'cyan', l: '  ██████╗██╗██████╗ ███████╗██████╗     SALA DE' },
  { t: 'cyan', l: ' ██╔════╝██║██╔══██╗██╔════╝██╔══██╗   COMANDOS' },
  { t: 'cyan', l: ' ██║     ██║██████╔╝█████╗  ██████╔╝' },
  { t: 'cyan', l: ' ██║     ██║██╔══██╗██╔══╝  ██╔══██╗  CiberQuiz' },
  { t: 'cyan', l: ' ╚██████╗██║██████╔╝███████╗██║  ██║   Terminal' },
  { t: 'cyan', l: '  ╚═════╝╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝  Simulator' },
  { t: 'dim',  l: '' },
  { t: 'ok',   l: '  Terminal lista. Arrancando interfaz...' },
];

let initialized = false;
let listenersAttached = false;

function animateBoot(cb) {
  const log = document.getElementById('boot-log');
  if (!log) { if (cb) cb(); return; }
  let i = 0;
  function step() {
    if (i >= BOOT_LINES.length) {
      setTimeout(cb, 280);
      return;
    }
    const item = BOOT_LINES[i];
    const el = document.createElement('div');
    el.className = 'bl ' + item.t;
    el.textContent = item.l;
    el.style.animationDelay = (i * 55) + 'ms';
    log.appendChild(el);
    i++;
    setTimeout(step, 55);
  }
  step();
}

function boot() {
  GameState.load();
  animateBoot(() => {
    const bs = document.getElementById('boot-screen');
    if (bs) {
      bs.classList.add('hidden');
      setTimeout(() => { bs.style.display = 'none'; }, 450);
    }
    UI.renderMap();
    UI.maybeShowOnboarding();
  });
}

/**
 * Ejecuta una acción data-term-action="Obj.metodo()" o
 * data-term-action="Obj.metodo('arg')" sin usar eval
 * (el CSP del sitio bloquea los manejadores inline).
 */
function runTermAction(expr) {
  if (!expr) return;
  const m = /^([A-Za-z_$][\w$]*)\.([A-Za-z_$][\w$]*)\(\s*(?:'([^'\\]*(?:\\.[^'\\]*)*)'\s*)?\)$/.exec(expr);
  if (!m) return;
  const obj = window[m[1]];
  const fn = obj && obj[m[2]];
  if (typeof fn === 'function') fn(m[3]);
}

function setupDelegatedClicks(root) {
  root.addEventListener('click', (e) => {
    const el = e.target.closest('[data-term-action]');
    if (el) runTermAction(el.dataset.termAction);
  });
}

function attachListeners() {
  if (listenersAttached) return;
  listenersAttached = true;

  const inp = document.getElementById('term-input');
  const row = document.getElementById('term-input-row');

  inp.addEventListener('focus', () => row.classList.add('focused'));
  inp.addEventListener('blur', () => setTimeout(() => row.classList.remove('focused'), 150));
  inp.addEventListener('input', () => UI.updateAutocomplete());
  inp.addEventListener('keydown', (e) => {
    const sh = UI.shell;
    if (e.key === 'Enter') {
      UI.submit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!sh.history.length) return;
      sh.histPos = Math.max(0, sh.histPos - 1);
      inp.value = sh.history[sh.histPos] || '';
      inp.selectionStart = inp.selectionEnd = inp.value.length;
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      sh.histPos = Math.min(sh.history.length, sh.histPos + 1);
      inp.value = sh.history[sh.histPos] || '';
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const first = document.querySelector('#autocomplete .ac-item');
      if (first) {
        inp.value = first.textContent.trim() + ' ';
        UI.acPick(first.textContent.trim());
      }
    } else if (e.key === 'Escape') {
      document.getElementById('autocomplete').classList.remove('show');
    }
  });

  // cerrar modales con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      ['onboard-overlay', 'complete-overlay', 'help-overlay', 'reset-overlay'].forEach((id) => {
        document.getElementById(id).classList.remove('show');
      });
    }
  });
}

/**
 * Inicializa la Sala de Comandos dentro del contenedor dado
 * (por defecto #terminal-container). Idempotente: si ya estaba
 * inicializada, solo vuelve a mostrar la vista activa.
 */
export function initTerminal(container) {
  if (!container) return;

  if (!initialized) {
    injectTerminalHTML(container);
    setupDelegatedClicks(container);
    attachListeners();
    boot();
    initialized = true;
    return;
  }

  // Re-entrada: restaurar la vista en la que quedó el usuario.
  if (window.UI && typeof window.UI.showView === 'function') {
    window.UI.showView(window.UI.getView());
  }
}
