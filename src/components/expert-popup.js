/**
 * Temporary Expert Content Popup Component
 * Displays newly added expert articles and resources with clear distinction.
 */

import { $ } from '../utils/dom.js';

export function initExpertPopup() {
  if (sessionStorage.getItem('expert_popup_shown') === 'true') {
    return;
  }

  const popupHtml = `
    <div id="expert-popup-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:99999;display:flex;align-items:center;justify-content:center;padding:1rem;backdrop-filter:blur(5px);">
      <div style="background:var(--bg-card, #1e293b);border:1px solid var(--accent, #10b981);border-radius:12px;max-width:750px;width:100%;max-height:85vh;overflow-y:auto;padding:2rem;color:var(--text, #f8fafc);box-shadow:0 25px 50px -12px rgba(0,0,0,0.7);position:relative;">
        <button id="expert-popup-close" style="position:absolute;top:1rem;right:1rem;background:none;border:none;color:var(--text-dim, #94a3b8);font-size:1.75rem;cursor:pointer;padding:0.25rem 0.75rem;line-height:1;transition:color 0.2s;">&times;</button>
        
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
          <span style="font-size:2rem;">🚀</span>
          <div>
            <h2 style="margin:0;font-size:1.5rem;color:var(--accent, #10b981);">Resumen de Actualización Experta</h2>
            <p style="margin:0;font-size:0.875rem;color:var(--text-dim, #94a3b8);">Nuevos contenidos y ampliaciones masivas integradas (Nivel OSCP / OSEP / OSED)</p>
          </div>
        </div>

        <p style="font-size:0.92rem;line-height:1.5;margin-bottom:1.25rem;">
          A continuación tienes el desglose exacto de lo que se ha incorporado recientemente en la base de datos de la Wiki:
        </p>

        <!-- New Articles Section -->
        <div style="margin-bottom:1.25rem;">
          <h3 style="font-size:1rem;color:var(--accent-blue, #3b82f6);margin-bottom:0.5rem;display:flex;align-items:center;gap:0.5rem;">
            <span>✨ Artículos Completamente Nuevos</span>
          </h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;font-size:0.85rem;">
            <div style="background:rgba(59,130,246,0.08);padding:0.5rem 0.75rem;border-radius:6px;border-left:3px solid #3b82f6;">
              <strong>cloud-aws-security</strong><br><small style="color:var(--text-dim);">Seguridad Cloud & Pentesting AWS</small>
            </div>
            <div style="background:rgba(59,130,246,0.08);padding:0.5rem 0.75rem;border-radius:6px;border-left:3px solid #3b82f6;">
              <strong>threat-hunting-yara</strong><br><small style="color:var(--text-dim);">Threat Hunting con Reglas YARA y Sigma</small>
            </div>
            <div style="background:rgba(59,130,246,0.08);padding:0.5rem 0.75rem;border-radius:6px;border-left:3px solid #3b82f6;">
              <strong>red-team-c2</strong><br><small style="color:var(--text-dim);">Operaciones Red Team & Arquitectura C2</small>
            </div>
            <div style="background:rgba(59,130,246,0.08);padding:0.5rem 0.75rem;border-radius:6px;border-left:3px solid #3b82f6;">
              <strong>web-ssrf-xxe</strong><br><small style="color:var(--text-dim);">Vulnerabilidades Web Avanzadas: SSRF & XXE</small>
            </div>
            <div style="background:rgba(59,130,246,0.08);padding:0.5rem 0.75rem;border-radius:6px;border-left:3px solid #3b82f6;">
              <strong>container-k8s-sec</strong><br><small style="color:var(--text-dim);">Seguridad en Docker & Kubernetes</small>
            </div>
            <div style="background:rgba(59,130,246,0.08);padding:0.5rem 0.75rem;border-radius:6px;border-left:3px solid #3b82f6;">
              <strong>reverse-engineering-ghidra</strong><br><small style="color:var(--text-dim);">Ingeniería Inversa con Ghidra y x64dbg</small>
            </div>
          </div>
        </div>

        <!-- Improved Articles Section -->
        <div style="margin-bottom:1.5rem;">
          <h3 style="font-size:1rem;color:var(--accent, #10b981);margin-bottom:0.5rem;display:flex;align-items:center;gap:0.5rem;">
            <span>⚡ Artículos Ampliados con Nivel Experto</span>
          </h3>
          <div style="display:flex;flex-wrap:wrap;gap:0.4rem;font-size:0.8rem;">
            <span style="background:rgba(16,185,129,0.1);color:var(--accent);padding:0.25rem 0.5rem;border-radius:4px;border:1px solid rgba(16,185,129,0.2);">nmap (Evasión NGFW / Lua)</span>
            <span style="background:rgba(16,185,129,0.1);color:var(--accent);padding:0.25rem 0.5rem;border-radius:4px;border:1px solid rgba(16,185,129,0.2);">binary-exploitation (ret2dlresolve)</span>
            <span style="background:rgba(16,185,129,0.1);color:var(--accent);padding:0.25rem 0.5rem;border-radius:4px;border:1px solid rgba(16,185,129,0.2);">persistence (eBPF / COM Hijacking)</span>
            <span style="background:rgba(16,185,129,0.1);color:var(--accent);padding:0.25rem 0.5rem;border-radius:4px;border:1px solid rgba(16,185,129,0.2);">forensics (Volatility 3 / VAD)</span>
            <span style="background:rgba(16,185,129,0.1);color:var(--accent);padding:0.25rem 0.5rem;border-radius:4px;border:1px solid rgba(16,185,129,0.2);">api-security (JWT Key Confusion)</span>
            <span style="background:rgba(16,185,129,0.1);color:var(--accent);padding:0.25rem 0.5rem;border-radius:4px;border:1px solid rgba(16,185,129,0.2);">zero-trust (Envoy / Istio mTLS)</span>
            <span style="background:rgba(16,185,129,0.1);color:var(--accent);padding:0.25rem 0.5rem;border-radius:4px;border:1px solid rgba(16,185,129,0.2);">fuzzing (AFL++ Persistent Mode)</span>
            <span style="background:rgba(16,185,129,0.1);color:var(--accent);padding:0.25rem 0.5rem;border-radius:4px;border:1px solid rgba(16,185,129,0.2);">active-directory (AD CS ESC1 / Shadow Creds)</span>
            <span style="background:rgba(16,185,129,0.1);color:var(--accent);padding:0.25rem 0.5rem;border-radius:4px;border:1px solid rgba(16,185,129,0.2);">malware-development (Ekko Sleep Obfuscation)</span>
            <span style="background:rgba(16,185,129,0.1);color:var(--accent);padding:0.25rem 0.5rem;border-radius:4px;border:1px solid rgba(16,185,129,0.2);">web3-security (Read-Only Reentrancy)</span>
            <span style="background:rgba(16,185,129,0.1);color:var(--accent);padding:0.25rem 0.5rem;border-radius:4px;border:1px solid rgba(16,185,129,0.2);">+ 10 artículos avanzados más</span>
          </div>
        </div>

        <div style="display:flex;justify-content:flex-end;gap:1rem;">
          <button id="expert-popup-btn" style="background:var(--accent, #10b981);color:#0f172a;border:none;padding:0.6rem 1.5rem;border-radius:6px;font-weight:600;cursor:pointer;transition:opacity 0.2s;">¡Entendido, continuar!</button>
        </div>
      </div>
    </div>
  `;

  const container = document.createElement('div');
  container.innerHTML = popupHtml;
  document.body.appendChild(container);

  const closePopup = () => {
    const overlay = document.getElementById('expert-popup-overlay');
    if (overlay) overlay.remove();
    sessionStorage.setItem('expert_popup_shown', 'true');
  };

  // Bind events with robust checks
  setTimeout(() => {
    const closeBtn = document.getElementById('expert-popup-close');
    const actionBtn = document.getElementById('expert-popup-btn');
    const overlay = document.getElementById('expert-popup-overlay');

    if (closeBtn) closeBtn.onclick = closePopup;
    if (actionBtn) actionBtn.onclick = closePopup;
    if (overlay) {
      overlay.onclick = (e) => {
        if (e.target === overlay) closePopup();
      };
    }
  }, 50);
}
