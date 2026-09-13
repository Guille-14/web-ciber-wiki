/* ═══════════════════════════════════════════════════════════════
   terminal-html.js — Plantilla HTML de la Sala de Comandos.
   Se inyecta dentro de #terminal-container cuando se abre la pestaña.
   Los onclick del original se sustituyen por data-term-action
   (el CSP del sitio bloquea los manejadores inline).
   ═══════════════════════════════════════════════════════════════ */

export const TERMINAL_HTML = `
<div class="terminal-root">

  <!-- ═══════════════ PANTALLA DE ARRANQUE ═══════════════ -->
  <div id="boot-screen"><div id="boot-log"></div></div>

  <div id="app">

    <!-- ═══════════════ VISTA: SELECTOR DE MÁQUINAS ═══════════════ -->
    <div class="view on" id="v-map">
      <div class="topbar">
        <h1>CIBER<span>QUIZ</span> · Sala de Comandos</h1>
        <div class="topbar-actions">
          <button class="icon-btn" data-term-action="UI.showHelp()" aria-label="Ayuda">?</button>
          <div class="xp-pill" id="global-xp">⚡ 0 XP</div>
        </div>
      </div>
      <div class="map-scroll">
        <div class="map-hero">
          <h2>💻 Terminal real, red real</h2>
          <p>Sin opción múltiple. Escribe comandos de verdad — nmap, curl, sqlmap, ssh — contra una red simulada de 16 máquinas de 4 categorías. Explora libremente: cada flag se detecta automáticamente en la salida, tomes el camino que tomes.</p>
        </div>

        <div class="rank-track">
          <div class="rank-badge" id="rank-badge">🌱</div>
          <div class="rank-info">
            <div class="rn" id="rank-name">Script Kiddie</div>
            <div class="rt" id="rank-sub">0 / 150 XP para el siguiente rango</div>
            <div class="rank-track-bar"><div class="rank-track-fill" id="rank-fill" style="width:0%"></div></div>
          </div>
        </div>

        <div class="cat-filter" id="cat-filter" role="tablist" aria-label="Filtrar máquinas por categoría"></div>
        <div class="box-list" id="box-list"></div>

        <div class="ach-section">
          <div class="ach-head">🏅 Logros</div>
          <div class="ach-grid" id="ach-grid"></div>
        </div>

        <button class="reset-link" data-term-action="UI.confirmReset()">↻ Reiniciar todo el progreso</button>
      </div>
    </div>

    <!-- ═══════════════ VISTA: TERMINAL ═══════════════ -->
    <div class="view" id="v-term">
      <div class="term-topbar">
        <button class="tb-back" data-term-action="UI.exitToMap()">←</button>
        <div class="tb-breadcrumb" id="tb-breadcrumb">guillermo@kali</div>
        <div class="tb-flags" id="tb-flags"></div>
        <button class="tb-hint-btn" data-term-action="UI.useHint()">💡 hint</button>
      </div>

      <div class="term-scroll" id="term-scroll" role="log" aria-live="polite" aria-label="Salida del terminal"></div>

      <div class="quick-row" id="quick-row"></div>

      <div class="term-input-bar">
        <div class="autocomplete" id="autocomplete"></div>
        <div class="term-input-row" id="term-input-row" role="search">
          <span class="pfx" id="term-pfx">$</span>
          <input id="term-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="escribe un comando…" aria-label="Entrada del terminal">
          <button class="term-send-btn" data-term-action="UI.submit()" aria-label="Ejecutar comando">↵</button>
        </div>
      </div>
    </div>

  </div>

  <!-- flag / logro capturado -->
  <div class="flag-toast" id="flag-toast">
    <div class="ft-top">
      <b id="ft-title">Flag capturada</b>
      <span class="ft-pts" id="ft-pts">+0</span>
    </div>
    <p id="ft-desc"></p>
  </div>

  <!-- onboarding (primera visita) -->
  <div class="overlay" id="onboard-overlay">
    <div class="modal-card">
      <div class="mc-icon">💻</div>
      <h2>Bienvenido a la Sala de Comandos</h2>
      <p class="left">Esto no es un test de opción múltiple: es una <b style="color:var(--txt)">terminal real</b> con un filesystem navegable y una red de 16 máquinas (clásicas, cloud, pwn y wireless).</p>
      <p class="left" style="font-size:12px">
        🖥️ Empiezas en tu propia máquina (localhost). Usa <code>nmap</code> para descubrir objetivos.<br><br>
        ☁️💣📡 Las pestañas del mapa filtran por categoría: Cloud (aws/kubectl), Pwn (binarios) y Wireless (wifi/VLAN/MITM).<br><br>
        🔑 <code>ssh usuario@ip</code> te pide contraseña real — si es correcta, tu prompt cambia al del host remoto.<br><br>
        🚩 Las flags se detectan automáticamente en la salida de cualquier comando — no hay un único camino "correcto".<br><br>
        💡 Si te atascas, el botón "hint" te da una pista contextual (cuesta un pequeño registro, no XP).<br><br>
        ❓ Pulsa la <b style="color:var(--cyan)">?</b> arriba para ver la lista completa de comandos.
      </p>
      <button class="mc-btn" data-term-action="UI.closeOnboarding()">Entendido, ¡a hackear!</button>
    </div>
  </div>

  <!-- máquina completada -->
  <div class="overlay" id="complete-overlay">
    <div class="modal-card win">
      <div class="mc-icon">🏆</div>
      <h2 id="cc-title">Máquina completada</h2>
      <p id="cc-sub">Todas las flags capturadas</p>
      <div class="mc-stats">
        <div class="mc-stat"><b id="cc-xp">0</b><span>XP total</span></div>
        <div class="mc-stat"><b id="cc-flags">0/0</b><span>Flags</span></div>
      </div>
      <button class="mc-btn green" data-term-action="UI.closeComplete()">Volver al mapa</button>
    </div>
  </div>

  <!-- ayuda / referencia de comandos -->
  <div class="overlay help-modal" id="help-overlay">
    <div class="modal-card">
      <h2>📖 Referencia de comandos</h2>
      <div id="help-body"></div>
      <button class="mc-btn2" data-term-action="UI.closeHelp()">Cerrar</button>
    </div>
  </div>

  <!-- confirmar reset -->
  <div class="overlay" id="reset-overlay">
    <div class="modal-card">
      <div class="mc-icon">⚠️</div>
      <h2>¿Borrar todo el progreso?</h2>
      <p>Perderás tu XP, flags capturadas y logros. Esta acción no se puede deshacer.</p>
      <button class="mc-btn" style="background:var(--red)" data-term-action="UI.doReset()">Sí, borrar todo</button>
      <button class="mc-btn2" data-term-action="UI.closeResetConfirm()">Cancelar</button>
    </div>
  </div>

</div>
`;

export function injectTerminalHTML(container) {
  if (!container) return false;
  if (container.querySelector('.terminal-root')) return false;
  container.innerHTML = TERMINAL_HTML;
  return true;
}
