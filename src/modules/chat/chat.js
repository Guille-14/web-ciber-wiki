/**
 * Chat module for CyberWiki Hub.
 * Handles AI chat with Ollama and Gemini providers, including
 * streaming, RAG context, server management, and settings UI.
 * @module modules/chat/chat
 */

import { state } from '../../core/state.js';
import { events, EVENTS } from '../../core/events.js';
import { storage, STORAGE_KEYS } from '../../core/storage.js';
import { $, escapeHtml, delegate, showToast } from '../../utils/dom.js';
import { formatMarkdown, sanitize } from '../../utils/html.js';
import { encrypt, decrypt } from '../../utils/crypto.js';
import { buildRAGContext } from '../search/search.js';

// ---------------------------------------------------------------------------
// Module-level state
// ---------------------------------------------------------------------------

/** @type {AbortController|null} */
let chatAbortController = null;

/** @type {boolean} */
let isGenerating = false;

// ---------------------------------------------------------------------------
// Security limits
// ---------------------------------------------------------------------------

const MAX_INPUT_LENGTH = 10000;
const MAX_HISTORY_MESSAGES = 100;
const RATE_LIMIT_WINDOW_MS = 60000;
const RATE_LIMIT_MAX = 10;
/** @type {number[]} Timestamps of recent messages for rate limiting */
const messageTimestamps = [];

// ---------------------------------------------------------------------------
// Default chat config (fallback when state is empty)
// ---------------------------------------------------------------------------

const DEFAULT_CHAT_CONFIG = {
  provider: '',
  ollamaServers: [],
  ollamaActiveServerId: '',
  ollamaModel: '',
  geminiKey: '',
  geminiModel: 'gemini-2.0-flash',
  systemPrompt:
    'Eres CyberWiki AI, un asistente experto en ciberseguridad. Respondes en español de forma concisa y técnica. Referencias: MITRE ATT&CK, OWASP Top 10, CVE/CVSS, NIST. Cuando sea relevante, menciona herramientas (Nmap, Burp Suite, Metasploit, BloodHound, etc.) y técnicas específicas. Si no sabes algo, di honestamente que no tienes información.',
};

// ---------------------------------------------------------------------------
// fetch con timeout vía AbortController (las llamadas a Gemini no tenían
// timeout ni abort y podían dejar la UI colgada indefinidamente)
// ---------------------------------------------------------------------------

async function fetchWithTimeout(url, options = {}, timeoutMs = 30000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new Error(`Tiempo de espera agotado (${Math.round(timeoutMs / 1000)}s)`);
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

// ---------------------------------------------------------------------------
// Ollama common URLs for auto-detection
// ---------------------------------------------------------------------------

const OLLAMA_COMMON_URLS = [
  'http://127.0.0.1:11434',
  'http://localhost:11434',
];

// ---------------------------------------------------------------------------
// DOM references (resolved lazily after DOM is ready)
// ---------------------------------------------------------------------------

/** @returns {HTMLElement|null} */
const chatMessages = () => $('chat-messages');

/** @returns {HTMLTextAreaElement|null} */
const chatInput = () => $('chat-input');

/** @returns {HTMLButtonElement|null} */
const chatSendBtn = () => $('chat-send-btn');

/** @returns {HTMLButtonElement|null} */
const chatSettingsBtn = () => $('chat-settings-btn');

/** @returns {HTMLButtonElement|null} */
const chatClearBtn = () => $('chat-clear-btn');

/** @returns {HTMLElement|null} */
const chatSettingsModal = () => $('chat-settings-modal');

/** @returns {HTMLElement|null} */
const chatSettingsClose = () => $('chat-settings-close');

/** @returns {HTMLSelectElement|null} */
const chatProviderSelect = () => $('chat-provider-select');

/** @returns {HTMLElement|null} */
const chatStatus = () => $('chat-status');

/** @returns {HTMLElement|null} */
const chatProviderLabel = () => $('chat-provider-label');

/** @returns {HTMLElement|null} */
const chatMsgCount = () => $('chat-msg-count');

// ---------------------------------------------------------------------------
// Helpers — read / write chat config & history through state
// ---------------------------------------------------------------------------

/**
 * Get decrypted Gemini API key.
 * Handles both legacy plaintext (claves "AIza…") and encrypted keys.
 * @returns {Promise<string>}
 */
async function getDecryptedGeminiKey() {
  const cfg = state.get('chatConfig') || {};
  const raw = cfg.geminiKey || '';
  if (!raw) return '';
  // Clave en texto plano legada: se usa tal cual.
  if (raw.startsWith('AIza')) return raw;
  // Valor cifrado: si no descifra, NO enviar el ciphertext como key.
  const decrypted = await decrypt(raw);
  if (decrypted === null) {
    console.warn('[chat] La API key cifrada no pudo descifrarse; reconfigúrala en Ajustes.');
    return '';
  }
  return decrypted;
}

/**
 * Encrypt and save Gemini API key.
 * @param {string} plaintextKey
 */
async function saveEncryptedGeminiKey(plaintextKey) {
  if (!plaintextKey) {
    const cfg = state.get('chatConfig') || {};
    cfg.geminiKey = '';
    state.set('chatConfig', cfg);
    return;
  }
  const encrypted = await encrypt(plaintextKey);
  const cfg = state.get('chatConfig') || {};
  cfg.geminiKey = encrypted;
  state.set('chatConfig', cfg);
}

/**
 * Load chat config from state (state already persists via PERSISTENT_KEYS).
 * Merges with defaults so new fields are always present.
 */
export function loadChatConfig() {
  const saved = state.get('chatConfig');
  if (saved) {
    state.set('chatConfig', { ...DEFAULT_CHAT_CONFIG, ...saved });
  } else {
    state.set('chatConfig', { ...DEFAULT_CHAT_CONFIG });
  }
}

/**
 * Save current chat config to state (auto-persists).
 */
export function saveChatConfig() {
  state.set('chatConfig', state.get('chatConfig'));
}

/**
 * Save chat history to state (auto-persists).
 */
export function saveChatHistory() {
  state.set('chatHistory', state.get('chatHistory') || []);
}

/**
 * Get the active Ollama server from config.
 * @returns {Object|null}
 */
export function getActiveServer() {
  const cfg = state.get('chatConfig') || {};
  return (
    cfg.ollamaServers?.find((s) => s.id === cfg.ollamaActiveServerId) ||
    cfg.ollamaServers?.[0] ||
    null
  );
}

/**
 * Get the base URL for the active Ollama server.
 * @returns {string}
 */
export function getOllamaUrl() {
  return getActiveServer()?.url || 'http://127.0.0.1:11434';
}

// ---------------------------------------------------------------------------
// Ollama Provider
// ---------------------------------------------------------------------------

/**
 * Fetch from Ollama API with timeout and CORS error handling.
 * @param {string} path - API path (e.g. '/api/tags')
 * @param {Object} [options={}] - Fetch options
 * @param {number} [options.timeout=15000] - Timeout in ms
 * @returns {Promise<Response>}
 */
export async function ollamaFetch(path, options = {}) {
  const url = getOllamaUrl().replace(/\/+$/, '') + path;
  const controller = new AbortController();
  const timeout = setTimeout(
    () => controller.abort(),
    options.timeout || 15000,
  );
  try {
    const resp = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timeout);
    return resp;
  } catch (err) {
    clearTimeout(timeout);
    if (err.name === 'AbortError') {
      throw new Error('Tiempo de conexión agotado. Verifica que Ollama esté corriendo.');
    }
    if (
      err.message?.includes('Failed to fetch') ||
      err.message?.includes('NetworkError') ||
      err.message?.includes('CORS')
    ) {
      throw new Error(
        'Error de conexión/CORS. Solución: ejecuta "OLLAMA_ORIGINS=* ollama serve" en tu PC antes de usar el chat.',
      );
    }
    throw err;
  }
}

/**
 * Test connection to the active Ollama server.
 * @returns {Promise<{ok: boolean, models?: string[], msg?: string}>}
 */
export async function ollamaTest() {
  const resp = await ollamaFetch('/api/tags', { method: 'GET' });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}: ${resp.statusText}`);
  const data = await resp.json();
  if (!data.models?.length) {
    throw new Error(
      'Ollama conectado pero sin modelos instalados. Ejecuta: ollama pull <modelo>',
    );
  }
  const models = data.models.map((m) => m.name);
  return {
    ok: true,
    models,
    msg: `Conectado. ${data.models.length} modelo(s): ${models.join(', ')}`,
  };
}

/**
 * Auto-detect a working Ollama server by trying configured servers
 * then common URLs.
 * @returns {Promise<{ok: boolean, models?: string[], msg?: string}>}
 */
export async function ollamaAutoDetect() {
  const cfg = state.get('chatConfig');

  // Try configured servers first
  for (const server of cfg.ollamaServers) {
    try {
      cfg.ollamaActiveServerId = server.id;
      state.set('chatConfig', cfg);
      const result = await ollamaTest();
      return result;
    } catch {
      continue;
    }
  }

  // Try common URLs
  for (const url of OLLAMA_COMMON_URLS) {
    const tempId = 'temp-' + Date.now();
    try {
      cfg.ollamaServers.push({ id: tempId, name: 'Auto-detectado', url, type: 'local' });
      cfg.ollamaActiveServerId = tempId;
      state.set('chatConfig', cfg);
      const result = await ollamaTest();
      return result;
    } catch {
      // Revierte el push: antes los intentos fallidos dejaban servidores
      // "Auto-detectado" fantasma acumulados en la config para siempre.
      cfg.ollamaServers = cfg.ollamaServers.filter((s) => s.id !== tempId);
      if (cfg.ollamaServers.length > 0) {
        cfg.ollamaActiveServerId = cfg.ollamaServers[cfg.ollamaServers.length - 1].id;
      }
      state.set('chatConfig', cfg);
      continue;
    }
  }

  throw new Error('No se encontró Ollama en las URLs configuradas ni en las comunes.');
}

/**
 * Pull / download a model from Ollama with streaming progress.
 * @param {string} modelName - Model name (e.g. 'llama3')
 * @param {Function} [onProgress] - Callback receiving progress data: {total, completed}
 */
export async function ollamaPullModel(modelName, onProgress) {
  const resp = await ollamaFetch('/api/pull', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: modelName, stream: true }),
    timeout: 300000,
  });
  if (!resp.ok) throw new Error(`Error descargando modelo: ${resp.status}`);

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buf = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });
    const lines = buf.split('\n');
    buf = lines.pop();
    for (const line of lines) {
      if (!line.trim()) continue;
      try {
        const data = JSON.parse(line);
        if (data.total && onProgress) onProgress(data);
      } catch {
        // ignore malformed lines
      }
    }
  }
}

/**
 * Stream a chat completion from Ollama.
 * @param {Array<{role: string, content: string}>} messages
 * @param {Function} onToken - Called with (token, fullText) for each chunk
 * @param {AbortSignal} signal
 * @returns {Promise<string>} Full accumulated response
 */
export async function ollamaGenerateStream(messages, onToken, signal) {
  const cfg = state.get('chatConfig');
  const url = getOllamaUrl().replace(/\/+$/, '') + '/api/chat';
  const body = {
    model: cfg.ollamaModel,
    messages,
    stream: true,
    options: { temperature: 0.7, num_predict: 2048 },
  };

  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal,
  });

  if (!resp.ok) {
    const errText = await resp.text().catch(() => '');
    if (resp.status === 404) {
      throw new Error(
        `Modelo "${cfg.ollamaModel}" no encontrado. Descárgalo desde configuración.`,
      );
    }
    if (resp.status === 503) {
      throw new Error('Ollama está sobrecargado. Intenta de nuevo en unos segundos.');
    }
    throw new Error(`Ollama error ${resp.status}: ${errText.slice(0, 200)}`);
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buf = '';
  let fullText = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });
    const lines = buf.split('\n');
    buf = lines.pop();
    for (const line of lines) {
      if (!line.trim()) continue;
      try {
        const data = JSON.parse(line);
        if (data.message?.content) {
          fullText += data.message.content;
          onToken(data.message.content, fullText);
        }
      } catch {
        // ignore malformed lines
      }
    }
  }
  return fullText;
}

// ---------------------------------------------------------------------------
// Gemini Provider
// ---------------------------------------------------------------------------

/**
 * Generate a chat completion using the Gemini API.
 * @param {Array<{role: string, content: string}>} messages
 * @returns {Promise<string>}
 */
export async function geminiGenerate(messages) {
  const cfg = state.get('chatConfig');
  const contents = [];
  for (const msg of messages) {
    if (msg.role === 'system') continue;
    contents.push({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    });
  }

  const systemMsg = messages.find((m) => m.role === 'system');
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${cfg.geminiModel}:generateContent`;

  const geminiKey = await getDecryptedGeminiKey();
  // Antes: fetch sin timeout ni abort → el botón podía quedar colgado siempre.
  const resp = await fetchWithTimeout(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': geminiKey },
    body: JSON.stringify({
      contents,
      systemInstruction: systemMsg
        ? { parts: [{ text: systemMsg.content }] }
        : undefined,
      generationConfig: {
        temperature: 0.7,
        topK: 32,
        topP: 0.9,
        maxOutputTokens: 2048,
      },
    }),
  }, 60000);

  if (!resp.ok) {
    const err = await resp.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gemini error: ${resp.status}`);
  }

  const data = await resp.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

/**
 * Test the Gemini API key by listing available models.
 * @returns {Promise<{ok: boolean, models?: string[], msg?: string}>}
 */
export async function geminiTest() {
  const geminiKey = await getDecryptedGeminiKey();
  const resp = await fetchWithTimeout(
    `https://generativelanguage.googleapis.com/v1beta/models`,
    { headers: { 'x-goog-api-key': geminiKey } },
    15000,
  );
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  const data = await resp.json();
  const models =
    data.models
      ?.map((m) => m.name?.replace('models/', ''))
      .filter(Boolean) || [];
  if (!models.length) throw new Error('No se encontraron modelos disponibles.');
  return {
    ok: true,
    models,
    msg: `Conectado. ${models.length} modelos disponibles`,
  };
}

// ---------------------------------------------------------------------------
// Chat UI helpers
// ---------------------------------------------------------------------------

/**
 * Create a streaming message placeholder in the chat UI.
 * @returns {HTMLElement} The streaming message element
 */
export function createStreamingMessage() {
  const container = chatMessages();
  if (!container) return document.createElement('div');

  const welcome = container.querySelector('.chat-welcome');
  if (welcome) welcome.remove();

  const div = document.createElement('div');
  div.className = 'chat-msg chat-msg-assistant chat-streaming';
  div.setAttribute('role', 'article');
  div.setAttribute('aria-label', 'Respuesta del asistente');
  div.innerHTML =
    '<div class="chat-msg-avatar"><img src="kali-dragon.png" alt="AI" width="20" height="15"></div>' +
    '<div class="chat-msg-content"><div class="chat-streaming-text" aria-live="polite"></div></div>';
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  return div;
}

/**
 * Update the content of a streaming message element.
 * @param {HTMLElement} el
 * @param {string} text
 */
export function updateStreamingMessage(el, text) {
  const textEl = el.querySelector('.chat-streaming-text');
  if (textEl) {
    textEl.innerHTML = sanitize(formatMarkdown(text));
    if (typeof Prism !== 'undefined') Prism.highlightAllUnder(textEl);
  }
  const container = chatMessages();
  if (container) container.scrollTop = container.scrollHeight;
}

/**
 * Show typing indicator dots inside a streaming message.
 * @param {HTMLElement} el
 */
export function showTypingInMessage(el) {
  const textEl = el.querySelector('.chat-streaming-text');
  if (textEl) {
    textEl.innerHTML =
      '<div class="typing-dots"><span></span><span></span><span></span></div>';
  }
}

/**
 * Finalize a streaming message — remove streaming class, render suffix,
 * and attach the copy button.
 * @param {HTMLElement} el
 * @param {string} [suffix] - Optional final text to render
 */
export function finalizeStreamingMessage(el, suffix) {
  el.classList.remove('chat-streaming');
  const textEl = el.querySelector('.chat-streaming-text');
  if (textEl && suffix) {
    textEl.innerHTML = sanitize(formatMarkdown(suffix));
    if (typeof Prism !== 'undefined') Prism.highlightAllUnder(textEl);
  }

  const content = el.querySelector('.chat-msg-content');
  if (content && !content.querySelector('.chat-copy-btn')) {
    const copyBtn = document.createElement('button');
    copyBtn.className = 'chat-copy-btn';
    copyBtn.textContent = '\u{1F4CB}';
    copyBtn.title = 'Copiar respuesta';
    copyBtn.addEventListener('click', () => {
      const text = textEl?.textContent || '';
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = '\u2705';
        setTimeout(() => (copyBtn.textContent = '\u{1F4CB}'), 1500);
      });
    });
    content.appendChild(copyBtn);
  }
}

/**
 * Remove a streaming message element from the DOM.
 * @param {HTMLElement} el
 */
export function removeStreamingMessage(el) {
  if (el) el.remove();
}

/**
 * Toggle the send / stop button between its two states.
 */
export function updateSendButton() {
  const btn = chatSendBtn();
  if (!btn) return;
  if (isGenerating) {
    btn.innerHTML =
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>';
    btn.title = 'Detener generación';
  } else {
    btn.innerHTML =
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
    btn.title = 'Enviar';
  }
}

/**
 * Append a chat message to the UI.
 * @param {string} role - 'user' | 'assistant' | 'system' | 'error'
 * @param {string} text
 */
export function appendChatMessage(role, text) {
  const container = chatMessages();
  if (!container) return;

  const welcome = container.querySelector('.chat-welcome');
  if (welcome) welcome.remove();

  const div = document.createElement('div');
  div.className = `chat-msg chat-msg-${role}`;
  div.setAttribute('role', 'article');
  div.setAttribute('aria-label', role === 'user' ? 'Tu mensaje' : role === 'error' ? 'Error' : 'Respuesta del asistente');

  const avatar =
    role === 'user'
      ? '\u{1F464}'
      : role === 'error'
        ? '\u274C'
        : '<img src="kali-dragon.png" alt="AI" width="20" height="15" style="vertical-align:middle">';

  const formatted =
    role === 'assistant' ? sanitize(formatMarkdown(text)) : escapeHtml(text);

  div.innerHTML =
    `<div class="chat-msg-avatar">${avatar}</div>` +
    `<div class="chat-msg-content">${formatted}</div>`;

  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

/**
 * Update chat footer (provider label, message count, status).
 */
export function updateChatFooter() {
  const cfg = state.get('chatConfig') || {};
  const history = state.get('chatHistory') || [];

  const providerEl = chatProviderLabel();
  if (providerEl) {
    const labels = {
      ollama: `Ollama \u00B7 ${getActiveServer()?.name || '?'} \u00B7 ${cfg.ollamaModel || '?'}`,
      gemini: `Gemini \u00B7 ${cfg.geminiModel}`,
    };
    providerEl.textContent = cfg.provider ? labels[cfg.provider] : 'Sin proveedor';
  }

  const msgCountEl = chatMsgCount();
  if (msgCountEl) msgCountEl.textContent = `${history.length} mensajes`;

  const statusEl = chatStatus();
  if (statusEl) {
    statusEl.textContent = isGenerating
      ? 'Generando respuesta...'
      : history.length > 0
        ? 'En línea'
        : 'Configura tu proveedor para comenzar';
  }
}

/**
 * Render chat history into the UI.
 */
export function renderChat() {
  const container = chatMessages();
  const history = state.get('chatHistory') || [];

  if (history.length > 0 && container?.querySelector('.chat-welcome')) {
    container.innerHTML = '';
    for (const msg of history) {
      appendChatMessage(msg.role, msg.content);
    }
  }
  updateChatFooter();
}

// ---------------------------------------------------------------------------
// Chat send / stop
// ---------------------------------------------------------------------------

/**
 * Send a chat message.
 */
export async function sendChatMessage() {
  const input = chatInput();
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;
  if (isGenerating) return;

  // Input length validation
  if (text.length > MAX_INPUT_LENGTH) {
    showToast(`\u26A0\uFE0F Mensaje demasiado largo (máx. ${MAX_INPUT_LENGTH.toLocaleString()} caracteres)`);
    return;
  }

  // Rate limiting
  const now = Date.now();
  while (messageTimestamps.length > 0 && messageTimestamps[0] < now - RATE_LIMIT_WINDOW_MS) {
    messageTimestamps.shift();
  }
  if (messageTimestamps.length >= RATE_LIMIT_MAX) {
    showToast('\u26A0\uFE0F Demasiadas solicitudes. Espera un momento.');
    return;
  }
  messageTimestamps.push(now);

  const cfg = state.get('chatConfig') || {};
  if (!cfg.provider || (cfg.provider === 'gemini' && !cfg.geminiKey)) {
    showToast('\u26A0\uFE0F Configura el proveedor de IA primero');
    chatSettingsBtn()?.click();
    return;
  }

  input.value = '';
  input.style.height = 'auto';

  const history = state.get('chatHistory') || [];
  history.push({ role: 'user', content: text });
  // Trim history to prevent unbounded growth
  if (history.length > MAX_HISTORY_MESSAGES) {
    history.splice(0, history.length - MAX_HISTORY_MESSAGES);
  }
  state.set('chatHistory', history);

  appendChatMessage('user', text);

  const msgEl = createStreamingMessage();
  isGenerating = true;
  updateSendButton();
  chatAbortController = new AbortController();

  try {
    const ragContext = buildRAGContext(text, (typeof WIKI_DATA !== 'undefined' ? WIKI_DATA : null));
    const systemPrompt = (cfg.systemPrompt || DEFAULT_CHAT_CONFIG.systemPrompt) + ragContext;
    const messages = [
      { role: 'system', content: systemPrompt },
      ...history.slice(-20),
    ];

    let fullResponse = '';
    if (cfg.provider === 'ollama') {
      events.emit(EVENTS.CHAT_STREAM_START, { provider: 'ollama' });
      fullResponse = await ollamaGenerateStream(
        messages,
        (token, full) => {
          updateStreamingMessage(msgEl, full);
          events.emit(EVENTS.CHAT_STREAM_TOKEN, { token, fullText: full });
        },
        chatAbortController.signal,
      );
    } else {
      showTypingInMessage(msgEl);
      fullResponse = await geminiGenerate(messages);
      updateStreamingMessage(msgEl, fullResponse);
    }

    events.emit(EVENTS.CHAT_STREAM_END, { response: fullResponse });

    history.push({ role: 'assistant', content: fullResponse });
    state.set('chatHistory', history);

    finalizeStreamingMessage(msgEl);
    saveChatHistory();
    updateChatFooter();

    events.emit(EVENTS.CHAT_MESSAGE_RECEIVED, { role: 'assistant', content: fullResponse });
  } catch (err) {
    events.emit(EVENTS.CHAT_STREAM_ERROR, { error: err.message });
    if (err.name === 'AbortError') {
      finalizeStreamingMessage(msgEl, '\u23F9\uFE0F Generación detenida.');
    } else {
      removeStreamingMessage(msgEl);
      appendChatMessage('error', `Error: ${err.message}`);
      showToast('\u274C ' + err.message);
    }
  } finally {
    isGenerating = false;
    chatAbortController = null;
    updateSendButton();
  }
}

/**
 * Stop ongoing generation.
 */
export function stopGeneration() {
  if (chatAbortController) chatAbortController.abort();
}

// ---------------------------------------------------------------------------
// Server Management
// ---------------------------------------------------------------------------

/**
 * Check server status by pinging /api/tags.
 * @param {string} url
 * @returns {Promise<boolean>}
 */
export async function checkServerStatus(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1500);
    const resp = await fetch(url.replace(/\/+$/, '') + '/api/tags', {
      signal: controller.signal,
    });
    clearTimeout(timeout);
    return resp.ok;
  } catch {
    return false;
  }
}

/**
 * Render Ollama server list in settings.
 */
export function renderOllamaServerList() {
  const container = $('chat-ollama-servers');
  if (!container) return;

  const cfg = state.get('chatConfig') || {};
  const servers = cfg.ollamaServers || [];

  let html = '';
  for (const s of servers) {
    const isActive = s.id === cfg.ollamaActiveServerId;
    const typeIcon = s.type === 'tailscale' ? '\u{1F310}' : '\u{1F3E0}';
    const typeLabel = s.type === 'tailscale' ? 'Tailscale' : 'Local';
    html += `<div class="server-item ${isActive ? 'active' : ''}" data-id="${s.id}">
      <div class="server-item-main" data-action="select">
        <span class="server-item-status" data-url="${escapeHtml(s.url)}" title="Comprobando..."></span>
        <span class="server-item-icon">${typeIcon}</span>
        <div class="server-item-info">
          <div class="server-item-name">${escapeHtml(s.name)}</div>
          <div class="server-item-url">${escapeHtml(s.url)}</div>
        </div>
        <span class="server-item-type">${typeLabel}</span>
        ${isActive ? '<span class="server-item-badge">ACTIVO</span>' : ''}
      </div>
      <div class="server-item-actions">
        <button class="server-action-btn" data-action="test" title="Probar conexi\u00F3n">\u{1F50C}</button>
        <button class="server-action-btn" data-action="edit" title="Editar">\u270F\uFE0F</button>
        <button class="server-action-btn server-action-danger" data-action="delete" title="Eliminar">\u{1F5D1}\uFE0F</button>
      </div>
    </div>`;
  }
  container.innerHTML = html;

  // Update status dots async
  container.querySelectorAll('.server-item-status').forEach(async (dot) => {
    const online = await checkServerStatus(dot.dataset.url);
    dot.classList.add(online ? 'online' : 'offline');
    dot.title = online ? 'Servidor online' : 'Servidor offline';
  });
}

/**
 * Open server edit modal.
 * @param {Object|null} server - Server object to edit, or null for new server
 */
export function openServerEditModal(server) {
  const modalEl = $('server-edit-modal');
  const nameInput = $('server-edit-name');
  const urlInput = $('server-edit-url');
  const typeSelect = $('server-edit-type');
  const saveBtn = $('server-edit-save');
  const titleEl = $('server-edit-title');

  if (!modalEl) return;

  const isEdit = !!server;
  if (titleEl) titleEl.textContent = isEdit ? '\u270F\uFE0F Editar servidor' : '\u2795 Nuevo servidor';
  if (nameInput) nameInput.value = server?.name || '';
  if (urlInput) urlInput.value = server?.url || 'http://';
  if (typeSelect) typeSelect.value = server?.type || 'local';
  if (saveBtn) saveBtn.textContent = isEdit ? '\u{1F4BE} Guardar' : '\u2795 Añadir';
  modalEl.classList.add('active');

  // Remove previous save listener by replacing the button
  const newSaveBtn = saveBtn?.cloneNode(true);
  if (saveBtn && newSaveBtn) {
    saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
    newSaveBtn.addEventListener('click', () => {
      const name = nameInput?.value.trim();
      const url = urlInput?.value.trim();
      const type = typeSelect?.value;
      if (!name || !url) {
        showToast('\u26A0\uFE0F Nombre y URL son obligatorios');
        return;
      }
      const cfg = state.get('chatConfig');
      if (isEdit) {
        server.name = name;
        server.url = url;
        server.type = type;
      } else {
        const id = 'srv-' + Date.now();
        cfg.ollamaServers.push({ id, name, url, type });
      }
      state.set('chatConfig', cfg);
      modalEl.classList.remove('active');
      renderOllamaServerList();
      showToast(isEdit ? '\u2705 Servidor actualizado' : '\u2705 Servidor añadido');
    });
  }
}

// ---------------------------------------------------------------------------
// Clear chat
// ---------------------------------------------------------------------------

/**
 * Clear chat history and reset the UI to the welcome screen.
 */
export function clearChat() {
  if (isGenerating) {
    showToast('\u26A0\uFE0F Espera a que termine la generación');
    return;
  }
  state.set('chatHistory', []);
  saveChatHistory();
  const container = chatMessages();
  if (container) {
    container.innerHTML = `<div class="chat-welcome">
      <img class="chat-welcome-icon" src="kali-dragon.png" alt="" width="64" height="48">
      <h3>CyberWiki AI</h3>
      <p>Tu asistente de ciberseguridad. Pregúntame sobre MITRE ATT&CK, OWASP, CVEs, herramientas ofensivas/defensivas, o cualquier tema de seguridad.</p>
      <div class="chat-quick-questions">
        <button class="chat-quick-btn" data-q="¿Qué es el framework MITRE ATT&CK y cómo se usa en ciberseguridad?">MITRE ATT&CK</button>
        <button class="chat-quick-btn" data-q="Explica las 5 vulnerabilidades más críticas del OWASP Top 10 2021">OWASP Top 10</button>
        <button class="chat-quick-btn" data-q="¿Cómo funciona un ataque de pass-the-hash y cómo se defiende?">Pass-the-Hash</button>
        <button class="chat-quick-btn" data-q="¿Qué es un CVE y cómo se evalúa su severidad con CVSS?">CVE y CVSS</button>
        <button class="chat-quick-btn" data-q="¿Qué herramientas usa un Red Team para enumerar dominios Active Directory?">Red Team AD</button>
        <button class="chat-quick-btn" data-q="¿Cómo configurar un SIEM para detectar movimientos laterales?">SIEM + Lateral</button>
      </div>
    </div>`;
  }
  updateChatFooter();
  showToast('\u{1F5D1}\uFE0F Chat limpiado');
}

// ---------------------------------------------------------------------------
// Initialize chat event listeners
// ---------------------------------------------------------------------------

/**
 * Initialize chat module — set up event listeners and load config.
 */
export function initChat() {
  loadChatConfig();
  renderChat();
  initChatSettings();
}

/**
 * Initialize chat settings handlers.
 */
export function initChatSettings() {
  // --- Send button ---
  const btn = chatSendBtn();
  if (btn) {
    btn.addEventListener('click', () => {
      if (isGenerating) {
        stopGeneration();
      } else {
        sendChatMessage();
      }
    });
  }

  // --- Input auto-resize and Enter to send ---
  const input = chatInput();
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendChatMessage();
      }
    });
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 120) + 'px';
    });
  }

  // --- Quick question buttons ---
  const container = chatMessages();
  if (container) {
    delegate(container, 'click', '.chat-quick-btn', (e, target) => {
      if (!isGenerating && input) {
        input.value = target.dataset.q || '';
        sendChatMessage();
      }
    });
  }

  // --- Settings modal open ---
  const settingsBtn = chatSettingsBtn();
  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      const cfg = state.get('chatConfig') || {};
      const providerSel = chatProviderSelect();
      if (providerSel) providerSel.value = cfg.provider;

      renderOllamaServerList();

      const modelInput = $('chat-ollama-model');
      const geminiKeyInput = $('chat-gemini-key');
      const geminiModelInput = $('chat-gemini-model');
      const systemPromptInput = $('chat-system-prompt');
      const ollamaSettings = $('ollama-settings');
      const geminiSettings = $('gemini-settings');

      if (modelInput) modelInput.value = cfg.ollamaModel || '';
      if (geminiKeyInput) {
        // Show placeholder if key exists (encrypted), empty if not
        geminiKeyInput.value = '';
        geminiKeyInput.placeholder = cfg.geminiKey ? '•••••••• (ya configurado, deja vacío para mantener)' : 'AIza...';
      }
      if (geminiModelInput) geminiModelInput.value = cfg.geminiModel || 'gemini-2.0-flash';
      if (systemPromptInput) systemPromptInput.value = cfg.systemPrompt || '';
      if (ollamaSettings) ollamaSettings.style.display = cfg.provider === 'ollama' ? 'block' : 'none';
      if (geminiSettings) geminiSettings.style.display = cfg.provider === 'gemini' ? 'block' : 'none';

      chatSettingsModal()?.classList.add('active');
    });
  }

  // --- Settings modal close ---
  const settingsClose = chatSettingsClose();
  if (settingsClose) {
    settingsClose.addEventListener('click', () => {
      chatSettingsModal()?.classList.remove('active');
    });
  }

  const settingsModal = chatSettingsModal();
  if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
      if (e.target === settingsModal) settingsModal.classList.remove('active');
    });
  }

  // --- Provider selector change ---
  const providerSel = chatProviderSelect();
  if (providerSel) {
    providerSel.addEventListener('change', () => {
      const ollamaSettings = $('ollama-settings');
      const geminiSettings = $('gemini-settings');
      if (ollamaSettings) ollamaSettings.style.display = providerSel.value === 'ollama' ? 'block' : 'none';
      if (geminiSettings) geminiSettings.style.display = providerSel.value === 'gemini' ? 'block' : 'none';
    });
  }

  // --- Ollama test ---
  const ollamaTestBtn = $('chat-ollama-test');
  if (ollamaTestBtn) {
    ollamaTestBtn.addEventListener('click', async () => {
      const btnEl = $('chat-ollama-test');
      const modelInput = $('chat-ollama-model');
      const modelList = $('chat-ollama-models');
      const activeServer = getActiveServer();

      btnEl.disabled = true;
      btnEl.textContent = '\u{1F50D} Conectando...';

      try {
        const result = await ollamaTest();
        btnEl.textContent = '\u2705 ' + result.msg;
        btnEl.style.borderColor = 'var(--accent)';
        btnEl.style.color = 'var(--accent)';
        showToast(`\u2705 Conectado a ${activeServer?.name || 'Ollama'}`);

        if (modelList) {
          modelList.innerHTML = '';
          result.models.forEach((m) => {
            const opt = document.createElement('option');
            opt.value = m;
            opt.textContent = m;
            const cfg = state.get('chatConfig');
            if (m === cfg.ollamaModel) opt.selected = true;
            modelList.appendChild(opt);
          });
          modelList.style.display = result.models.length ? 'block' : 'none';
          modelList.addEventListener('change', () => {
            if (modelInput) modelInput.value = modelList.value;
          });
        }
      } catch (err) {
        btnEl.textContent = '\u274C ' + err.message;
        btnEl.style.borderColor = 'var(--difficulty-hard)';
        btnEl.style.color = 'var(--difficulty-hard)';
        showToast(`\u274C ${activeServer?.name || 'Ollama'}: ${err.message}`);
      } finally {
        btnEl.disabled = false;
        setTimeout(() => {
          btnEl.textContent = '\u{1F50C} Probar conexión';
          btnEl.style.borderColor = '';
          btnEl.style.color = '';
        }, 4000);
      }
    });
  }

  // --- Ollama auto-detect ---
  const autoDetectBtn = $('chat-ollama-autodetect');
  if (autoDetectBtn) {
    autoDetectBtn.addEventListener('click', async () => {
      const btnEl = $('chat-ollama-autodetect');
      btnEl.disabled = true;
      btnEl.textContent = '\u{1F50D} Buscando...';
      try {
        const result = await ollamaAutoDetect();
        renderOllamaServerList();
        const activeServer = getActiveServer();
        btnEl.textContent = `\u2705 Encontrado: ${activeServer?.name || 'Ollama'}`;
        showToast('\u2705 ' + result.msg);
        $('chat-ollama-test')?.click();
      } catch (err) {
        btnEl.textContent = '\u274C No encontrado';
        showToast('\u274C ' + err.message);
      } finally {
        btnEl.disabled = false;
        setTimeout(() => {
          btnEl.textContent = '\u{1F50D} Auto-detectar';
        }, 3000);
      }
    });
  }

  // --- Pull model ---
  const pullBtn = $('chat-ollama-pull');
  if (pullBtn) {
    pullBtn.addEventListener('click', async () => {
      const modelInput = $('chat-ollama-model');
      const model = modelInput?.value.trim();
      if (!model) {
        showToast('\u26A0\uFE0F Escribe el nombre del modelo');
        return;
      }
      const btnEl = $('chat-ollama-pull');
      const progress = $('chat-ollama-pull-progress');
      btnEl.disabled = true;
      btnEl.textContent = '\u2B07\uFE0F Descargando...';
      try {
        await ollamaPullModel(model, (data) => {
          if (data.total && progress) {
            const pct = Math.round((data.completed / data.total) * 100);
            progress.textContent = `${pct}% (${data.completed}/${data.total})`;
            progress.style.display = 'block';
          }
        });
        btnEl.textContent = '\u2705 Modelo descargado';
        showToast(`\u2705 Modelo "${model}" listo`);
        $('chat-ollama-test')?.click();
      } catch (err) {
        btnEl.textContent = '\u274C Error';
        showToast('\u274C Error descargando: ' + err.message);
      } finally {
        btnEl.disabled = false;
        setTimeout(() => {
          btnEl.textContent = '\u2B07\uFE0F Descargar modelo';
          if (progress) progress.style.display = 'none';
        }, 3000);
      }
    });
  }

  // --- Gemini test ---
  const geminiTestBtn = $('chat-gemini-test');
  if (geminiTestBtn) {
    geminiTestBtn.addEventListener('click', async () => {
      const btnEl = $('chat-gemini-test');
      btnEl.disabled = true;
      btnEl.textContent = '\u{1F50D} Conectando...';
      const plaintextKey = $('chat-gemini-key')?.value.trim() || '';
      await saveEncryptedGeminiKey(plaintextKey);
      const cfg = state.get('chatConfig');
      cfg.geminiModel = $('chat-gemini-model')?.value || 'gemini-2.0-flash';
      state.set('chatConfig', cfg);
      try {
        const result = await geminiTest();
        btnEl.textContent = '\u2705 ' + result.msg;
        btnEl.style.borderColor = 'var(--accent)';
        btnEl.style.color = 'var(--accent)';
      } catch (err) {
        btnEl.textContent = '\u274C ' + err.message;
        btnEl.style.borderColor = 'var(--difficulty-hard)';
        btnEl.style.color = 'var(--difficulty-hard)';
      } finally {
        btnEl.disabled = false;
        setTimeout(() => {
          btnEl.textContent = '\u{1F50C} Probar conexión';
          btnEl.style.borderColor = '';
          btnEl.style.color = '';
        }, 4000);
      }
    });
  }

  // --- Save settings ---
  const saveSettingsBtn = $('chat-settings-save');
  if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener('click', async () => {
      const cfg = state.get('chatConfig');
      const providerSel = chatProviderSelect();
      cfg.provider = providerSel?.value || '';
      cfg.ollamaModel = $('chat-ollama-model')?.value.trim() || '';
      const plaintextKey = $('chat-gemini-key')?.value.trim();
      // Only encrypt and save if user entered a new key (not empty placeholder)
      if (plaintextKey) {
        await saveEncryptedGeminiKey(plaintextKey);
      }
      cfg.geminiModel = $('chat-gemini-model')?.value || 'gemini-2.0-flash';
      cfg.systemPrompt = $('chat-system-prompt')?.value.trim() || '';
      state.set('chatConfig', cfg);
      saveChatConfig();
      updateChatFooter();
      chatSettingsModal()?.classList.remove('active');
      showToast('\u2705 Configuración guardada');
    });
  }

  // --- Clear chat ---
  const clearBtn = chatClearBtn();
  if (clearBtn) {
    clearBtn.addEventListener('click', clearChat);
  }

  // --- Add server button ---
  const addServerBtn = $('chat-ollama-add-server');
  if (addServerBtn) {
    addServerBtn.addEventListener('click', () => openServerEditModal(null));
  }

  // --- Server edit modal close buttons ---
  const serverEditClose = $('server-edit-close');
  if (serverEditClose) {
    serverEditClose.addEventListener('click', () => {
      $('server-edit-modal')?.classList.remove('active');
    });
  }

  const serverEditCancel = $('server-edit-cancel');
  if (serverEditCancel) {
    serverEditCancel.addEventListener('click', () => {
      $('server-edit-modal')?.classList.remove('active');
    });
  }

  // --- Server list actions (select, test, edit, delete) via delegation ---
  const serverContainer = $('chat-ollama-servers');
  if (serverContainer) {
    delegate(serverContainer, 'click', '[data-action]', async (e, target) => {
      const item = target.closest('.server-item');
      if (!item) return;
      const id = item.dataset.id;
      const action = target.dataset.action;
      const cfg = state.get('chatConfig');
      const server = cfg.ollamaServers.find((s) => s.id === id);
      if (!server) return;

      if (action === 'select') {
        cfg.ollamaActiveServerId = id;
        state.set('chatConfig', cfg);
        renderOllamaServerList();
        $('chat-ollama-test')?.click();
      } else if (action === 'test') {
        cfg.ollamaActiveServerId = id;
        state.set('chatConfig', cfg);
        $('chat-ollama-test')?.click();
      } else if (action === 'edit') {
        openServerEditModal(server);
      } else if (action === 'delete') {
        if (cfg.ollamaServers.length <= 1) {
          showToast('\u26A0\uFE0F Debe haber al menos un servidor');
          return;
        }
        cfg.ollamaServers = cfg.ollamaServers.filter((s) => s.id !== id);
        if (cfg.ollamaActiveServerId === id) {
          cfg.ollamaActiveServerId = cfg.ollamaServers[0].id;
        }
        state.set('chatConfig', cfg);
        renderOllamaServerList();
        showToast('\u{1F5D1}\uFE0F Servidor eliminado');
      }
    });
  }

  updateChatFooter();
}
