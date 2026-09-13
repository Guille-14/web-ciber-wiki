/* ═══════════════════════════════════════════
   CiberQuiz v5.0 — Boot HTML Template (ES Module)
   Ported from legacy quiz.js (backward-compat IIFE).
   ═══════════════════════════════════════════ */
import { Quiz } from './quiz-engine.js';

// CSP blocks inline event handlers (script-src 'self'), so the engine's
// data-qz-action="xxx()" attributes are re-dispatched via a delegated listener.
function parseQuizArgs(raw) {
  const args = [];
  if (raw.trim() === '') return args;
  for (const part of raw.split(',')) {
    const t = part.trim();
    if (t === 'true') args.push(true);
    else if (t === 'false') args.push(false);
    else if (t === 'null' || t === 'undefined') args.push(null);
    else if (/^-?\d+(\.\d+)?$/.test(t)) args.push(Number(t));
    else if (/^['"]/.test(t) && /['"]$/.test(t)) args.push(t.slice(1, -1));
    else args.push(t);
  }
  return args;
}

function attachQuizHandlers(section) {
  if (section.dataset.qzDelegated) return;
  section.dataset.qzDelegated = '1';
  section.addEventListener('click', (e) => {
    const el = e.target.closest('[data-qz-action]');
    if (!el) return;
    const raw = (el.getAttribute('data-qz-action') || '').trim();
    const m = raw.match(/^(\w+)\(([^)]*)\)$/);
    if (!m) return;
    const fn = Quiz[m[1]];
    if (typeof fn !== 'function') return;
    e.preventDefault();
    try {
      fn.apply(null, parseQuizArgs(m[2]));
    } catch (err) {
      console.error('[quiz] handler error:', err);
    }
  });
}


export const QUIZ_HTML = `
<div id="qz-boot" class="qz-boot">
  <div class="qz-boot-ring"></div>
  <div class="qz-boot-icon">🎮</div>
  <div class="qz-boot-title">CiberQuiz</div>
  <div class="qz-boot-sub" id="qz-boot-msg">Preparando preguntas...</div>
  <div class="qz-boot-progress"><div class="qz-boot-progress-fill" id="qz-boot-fill"></div></div>
</div>

<!-- ═══ TOPBAR ═══ -->
<header class="qz-bar">
  <button class="qz-bar-back" id="qz-bar-back">‹</button>
  <div class="qz-bar-center">
    <span class="qz-bar-title" id="qz-bar-title">CiberQuiz</span>
    <div class="qz-bar-sub" id="qz-bar-sub"></div>
  </div>
  <div class="qz-bar-right">
    <span class="qz-chip qz-chip-fire" id="qz-h-streak">0</span>
    <span class="qz-chip qz-chip-xp" id="qz-h-xp">0 XP</span>
    <div class="qz-hearts" id="qz-h-lives"></div>
  </div>
</header>

<!-- ═══ XP BAR ═══ -->
<div class="qz-xpbar">
  <div class="qz-xpbar-inner">
    <div class="qz-xpbar-left" id="qz-h-lvl">🌱 Nivel 1</div>
    <div class="qz-xpbar-right" id="qz-h-xpbar-label">0 / 100</div>
  </div>
  <div class="qz-xpbar-track"><div class="qz-xpbar-fill" id="qz-h-xpbar"></div></div>
</div>

<canvas id="qz-confetti-canvas"></canvas>

<!-- ═══ HOME ═══ -->
<section class="qz-panel qz-panel--active" id="qz-p-home">
  <div class="qz-scroll">
    <div id="qz-streak-slot"></div>

    <div class="qz-daily" id="qz-daily" data-qz-action="startDaily()">
      <div class="qz-daily-glow"></div>
      <div class="qz-daily-left">
        <div class="qz-daily-ico">📅</div>
      </div>
      <div class="qz-daily-mid">
        <div class="qz-daily-name">Desafío Diario</div>
        <div class="qz-daily-desc">12 preguntas al azar · +50 XP bonus</div>
        <div class="qz-daily-fire">🔥 Racha: <span id="qz-h-streak2">0</span> días</div>
      </div>
      <div class="qz-daily-badge" id="qz-daily-done" style="display:none">✅ HOY</div>
    </div>

    <div class="qz-heading">Rutas de Aprendizaje</div>
    <div class="qz-grid" id="qz-paths"></div>

    <div id="qz-nolives-slot"></div>

    <div class="qz-heading">Tu Progreso</div>
    <div id="qz-quickstats"></div>
  </div>
</section>

<!-- ═══ SESSION ═══ -->
<section class="qz-panel" id="qz-p-session">
  <div class="qz-sess-hdr">
    <button class="qz-sess-back" data-qz-action="goBack()">‹</button>
    <div class="qz-sess-prog"><div class="qz-sess-prog-fill" id="qz-sprog"></div></div>
    <div class="qz-sess-hearts" id="qz-s-lives"></div>
  </div>
  <div class="qz-scroll qz-sess-body" id="qz-sess-body"></div>
</section>

<!-- ═══ RESULTS ═══ -->
<section class="qz-panel" id="qz-p-results">
  <div class="qz-scroll">
    <div class="qz-results">
      <div class="qz-res-emoji" id="qz-r-emoji">🎉</div>
      <div class="qz-res-title" id="qz-r-title">¡Buen trabajo!</div>
      <div class="qz-res-sub" id="qz-r-sub"></div>
      <div class="qz-res-cards">
        <div class="qz-res-card qz-res-card--xp"><div class="qz-res-val" id="qz-r-xp">0</div><div class="qz-res-lbl">XP</div></div>
        <div class="qz-res-card qz-res-card--ok"><div class="qz-res-val" id="qz-r-ok">0</div><div class="qz-res-lbl">Correctas</div></div>
        <div class="qz-res-card qz-res-card--bad"><div class="qz-res-val" id="qz-r-bad">0</div><div class="qz-res-lbl">Fallos</div></div>
      </div>
      <div id="qz-r-achs"></div>
      <button class="qz-btn qz-btn--primary" id="qz-r-replay">Volver al inicio</button>
      <button class="qz-btn qz-btn--ghost" data-qz-action="showView('achievements')">🏆 Logros</button>
      <button class="qz-btn qz-btn--ghost" data-qz-action="showView('league')">🥇 Liga Semanal</button>
      <button class="qz-btn qz-btn--ghost" data-qz-action="exitToMain()">📚 Volver a la Wiki</button>
    </div>
  </div>
</section>

<!-- ═══ ACHIEVEMENTS ═══ -->
<section class="qz-panel" id="qz-p-achievements">
  <div class="qz-scroll">
    <div class="qz-ach-top">
      <div class="qz-ach-big" id="qz-ach-num">0</div>
      <div class="qz-ach-sub" id="qz-ach-sub">de 0 logros</div>
    </div>
    <div class="qz-heading">Logros <span id="qz-ach-count" class="qz-heading-badge"></span></div>
    <div class="qz-ach-grid" id="qz-achs-grid"></div>
    <button class="qz-btn qz-btn--ghost" data-qz-action="showView('home')" style="margin-top:18px">← Volver</button>
  </div>
</section>

<!-- ═══ LEAGUE ═══ -->
<section class="qz-panel" id="qz-p-league">
  <div class="qz-scroll">
    <div id="qz-league-body"></div>
    <button class="qz-btn qz-btn--ghost" data-qz-action="showView('home')" style="margin-top:18px">← Volver</button>
  </div>
</section>

<!-- ═══ FEEDBACK ═══ -->
<div class="qz-fb" id="qz-fb">
  <div class="qz-fb-head">
    <span class="qz-fb-ico" id="qz-fb-ico">✅</span>
    <span class="qz-fb-ttl" id="qz-fb-ttl">¡Correcto!</span>
  </div>
  <div class="qz-fb-exp" id="qz-fb-exp"></div>
  <button class="qz-fb-learn" id="qz-fb-learn" style="display:none"></button>
  <button class="qz-fb-next" id="qz-fb-next" data-qz-action="nextQ()">Continuar →</button>
</div>
`;

let injected = false;

/**
 * Inject the CiberQuiz DOM into #quiz-section (idempotent).
 * @returns {boolean} true if injection happened, false otherwise.
 */
export function injectQuizHTML() {
  if (injected) return false;
  const section = document.getElementById('quiz-section');
  if (!section) return false;
  section.innerHTML = QUIZ_HTML;
  section.classList.add('qz-ready');
  attachQuizHandlers(section);
  const body = section.closest('.content-body');
  if (body) {
    body.style.padding = '0';
    body.style.overflow = 'hidden';
  }
  injected = true;
  return true;
}

/** True once the quiz DOM has been injected. */
export function isQuizInjected() {
  return injected || !!document.getElementById('qz-p-home');
}
