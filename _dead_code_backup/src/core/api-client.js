/**
 * API Client - Resilient HTTP client with retry, timeout, circuit breaker
 * @module core/api-client
 */

import { CircuitBreaker, retryWithBackoff } from './error-handler.js';

// Circuit breakers for each provider
const ollamaBreaker = new CircuitBreaker({ failureThreshold: 3, resetTimeout: 30000 });
const geminiBreaker = new CircuitBreaker({ failureThreshold: 3, resetTimeout: 30000 });

/**
 * @typedef {Object} APIClientConfig
 * @property {number} [timeout=15000] - Request timeout in ms
 * @property {number} [maxRetries=2] - Max retry attempts
 * @property {boolean} [useCircuitBreaker=true] - Whether to use circuit breaker
 */

/**
 * Fetch with timeout
 * @param {string} url
 * @param {RequestInit} options
 * @param {number} [timeout=15000]
 * @returns {Promise<Response>}
 */
export async function fetchWithTimeout(url, options = {}, timeout = 15000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    return response;
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new Error(`Request timed out after ${timeout}ms`);
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Translate fetch/HTTP errors to user-friendly messages
 * @param {Error} err
 * @param {string} provider - 'ollama' | 'gemini'
 * @returns {string}
 */
export function translateError(err, provider = 'ollama') {
  const msg = err.message || String(err);

  if (msg.includes('timed out') || msg.includes('timeout')) {
    return provider === 'ollama'
      ? 'El servidor Ollama no responde. Verifica que esté ejecutándose.'
      : 'La API de Gemini tardó demasiado. Intenta de nuevo.';
  }

  if (msg.includes('Failed to fetch') || msg.includes('NetworkError') || msg.includes('ERR_CONNECTION_REFUSED')) {
    if (provider === 'ollama') {
      return 'No se pudo conectar con Ollama. Verifica que esté ejecutándose en http://localhost:11434';
    }
    return 'Error de red. Verifica tu conexión a internet.';
  }

  if (msg.includes('CORS') || msg.includes('cors')) {
    return provider === 'ollama'
      ? 'Error CORS. Ejecuta Ollama con OLLAMA_ORIGINS=*'
      : 'Error de CORS con la API de Gemini.';
  }

  if (msg.includes('404') || msg.includes('Not Found')) {
    return provider === 'ollama'
      ? 'Modelo no encontrado en Ollama. Verifica el nombre del modelo.'
      : 'Endpoint no encontrado. Verifica la configuración de la API.';
  }

  if (msg.includes('503') || msg.includes('Service Unavailable')) {
    return provider === 'ollama'
      ? 'Ollama está sobrecargado. Espera un momento e intenta de nuevo.'
      : 'El servicio de Gemini no está disponible temporalmente.';
  }

  if (msg.includes('429') || msg.includes('Too Many Requests')) {
    return 'Demasiadas solicitudes. Espera un momento antes de intentar de nuevo.';
  }

  if (msg.includes('401') || msg.includes('Unauthorized') || msg.includes('403')) {
    return provider === 'gemini'
      ? 'API key de Gemini inválida o expirada. Verifica tu configuración.'
      : 'Error de autenticación.';
  }

  return msg;
}

/**
 * Make an API request with retry and circuit breaker
 * @param {string} url
 * @param {RequestInit} options
 * @param {APIClientConfig} [config={}]
 * @param {string} [provider='ollama']
 * @returns {Promise<Response>}
 */
export async function apiRequest(url, options = {}, config = {}, provider = 'ollama') {
  const { timeout = 15000, maxRetries = 2, useCircuitBreaker = true } = config;
  const breaker = provider === 'ollama' ? ollamaBreaker : geminiBreaker;

  const executeRequest = async () => {
    return fetchWithTimeout(url, options, timeout);
  };

  if (useCircuitBreaker) {
    return breaker.execute(() => retryWithBackoff(executeRequest, { maxRetries }));
  }

  return retryWithBackoff(executeRequest, { maxRetries });
}

/**
 * Get circuit breaker states
 * @returns {Object}
 */
export function getCircuitBreakerStates() {
  return {
    ollama: ollamaBreaker.getState(),
    gemini: geminiBreaker.getState()
  };
}

/**
 * Reset all circuit breakers
 */
export function resetCircuitBreakers() {
  ollamaBreaker.reset();
  geminiBreaker.reset();
}

/**
 * Streaming fetch with timeout and error handling
 * @param {string} url
 * @param {RequestInit} options
 * @param {Object} callbacks
 * @param {Function} callbacks.onChunk - Called with each text chunk
 * @param {Function} callbacks.onDone - Called when stream ends
 * @param {Function} callbacks.onError - Called on error
 * @param {number} [timeout=60000] - Stream timeout
 * @returns {Promise<void>}
 */
export async function streamFetch(url, options = {}, callbacks = {}, timeout = 60000) {
  const { onChunk, onDone, onError } = callbacks;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      throw new Error(`${response.status} ${response.statusText}: ${errorText.slice(0, 200)}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6);
        if (data === '[DONE]') continue;

        try {
          const parsed = JSON.parse(data);
          const text = parsed.choices?.[0]?.delta?.content || parsed.message?.content || '';
          if (text) onChunk(text);
        } catch {
          // Skip malformed JSON lines
        }
      }
    }

    onDone?.();
  } catch (err) {
    if (err.name === 'AbortError') {
      onError?.(new Error('Stream timed out'));
    } else {
      onError?.(err);
    }
  } finally {
    clearTimeout(timer);
  }
}
