/**
 * Client-side encryption utilities for sensitive data (API keys).
 * Uses Web Crypto API (SubtleCrypto) with AES-GCM.
 *
 * NOTE: This is obfuscation-level protection. It prevents casual localStorage
 * inspection but cannot protect against XSS. For true security, API keys
 * should be proxied through a backend.
 *
 * @module utils/crypto
 */

const ALGO = 'AES-GCM';
const KEY_LENGTH = 256;
const SALT_KEY = 'cyberwiki-crypto-salt';
const IV_LENGTH = 12;

/**
 * Get or create a random salt for key derivation.
 * @returns {Uint8Array}
 */
function getSalt() {
  let raw = localStorage.getItem(SALT_KEY);
  if (raw) {
    return Uint8Array.from(atob(raw), c => c.charCodeAt(0));
  }
  const salt = crypto.getRandomValues(new Uint8Array(16));
  localStorage.setItem(SALT_KEY, btoa(String.fromCharCode(...salt)));
  return salt;
}

/**
 * Derive an AES-GCM key from a password and salt using PBKDF2.
 * @returns {Promise<CryptoKey>}
 */
async function deriveKey() {
  const password = navigator.userAgent + navigator.language;
  const encoder = new TextEncoder();
  const salt = getSalt();

  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: ALGO, length: KEY_LENGTH },
    false,
    ['encrypt', 'decrypt']
  );
}

/**
 * Encrypt a plaintext string.
 * @param {string} plaintext
 * @returns {Promise<string>} Base64-encoded ciphertext with IV prefix
 */
export async function encrypt(plaintext) {
  if (!plaintext) return plaintext;
  const key = await deriveKey();
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH));
  const encoder = new TextEncoder();

  const ciphertext = await crypto.subtle.encrypt(
    { name: ALGO, iv },
    key,
    encoder.encode(plaintext)
  );

  // Prepend IV to ciphertext
  const combined = new Uint8Array(iv.length + ciphertext.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(ciphertext), iv.length);

  return btoa(String.fromCharCode(...combined));
}

/**
 * Decrypt a base64-encoded ciphertext string.
 * @param {string} encrypted - Base64-encoded ciphertext with IV prefix
 * @returns {Promise<string|null>} Decrypted plaintext, o null si falla.
 *   Antes devolvía el propio ciphertext como "plaintext" en caso de error:
   ese valor acababa enviado como API key en el header x-goog-api-key.
 */
export async function decrypt(encrypted) {
  if (!encrypted) return encrypted;
  try {
    const key = await deriveKey();
    const data = Uint8Array.from(atob(encrypted), c => c.charCodeAt(0));
    const iv = data.slice(0, IV_LENGTH);
    const ciphertext = data.slice(IV_LENGTH);

    const decrypted = await crypto.subtle.decrypt(
      { name: ALGO, iv },
      key,
      ciphertext
    );

    return new TextDecoder().decode(decrypted);
  } catch {
    // No devolver NUNCA el ciphertext como texto claro.
    return null;
  }
}
