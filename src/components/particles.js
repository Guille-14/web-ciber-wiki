/**
 * Particle animation component for CyberWiki Hub.
 * Ultra-light canvas particles and Matrix rain effect.
 * @module components/particles
 */

import { $ } from '../utils/dom.js';
import { events, EVENTS } from '../core/events.js';

/** @type {HTMLCanvasElement|null} */
let particleCanvas = null;

/** @type {HTMLCanvasElement|null} */
let matrixCanvas = null;

/** @type {boolean} */
let particlesActive = true;

/**
 * Get theme-appropriate particle color.
 * @returns {string}
 */
// Caché del tema: antes getComputedStyle() se llamaba EN CADA FRAME
// (getParticleColor + getConnectionColor), forzando reflow a 60fps.
let cachedIsLight = null;

function computeIsLight() {
  return getComputedStyle(document.documentElement)
    .getPropertyValue('--bg-content')
    .trim() === '#f6f8fa';
}

function getParticleColor() {
  if (cachedIsLight === null) cachedIsLight = computeIsLight();
  return cachedIsLight ? 'rgba(9,105,218,0.15)' : 'rgba(88,166,255,0.15)';
}

/**
 * Get theme-appropriate connection color.
 * @param {number} alpha
 * @returns {string}
 */
function getConnectionColor(alpha) {
  if (cachedIsLight === null) cachedIsLight = computeIsLight();
  return cachedIsLight
    ? `rgba(9,105,218,${alpha})`
    : `rgba(88,166,255,${alpha})`;
}

/**
 * Initialize floating particles animation on a canvas.
 */
export function initParticles() {
  particleCanvas = $('particle-canvas');
  if (!particleCanvas) return;

  // Invalida la caché de color cuando cambia el tema.
  events.on(EVENTS.THEME_CHANGED, () => { cachedIsLight = null; });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    particleCanvas.style.display = 'none';
    return;
  }

  const ctx = particleCanvas.getContext('2d');
  let w = window.innerWidth;
  let h = window.innerHeight;
  particleCanvas.width = w;
  particleCanvas.height = h;

  const isMobile = w < 768;
  const count = isMobile ? 12 : 30;

  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    r: Math.random() * 1.2 + 0.3,
  }));

  let frame = 0;
  let canvasVisible = true;
  let animationId = null;

  document.addEventListener('visibilitychange', () => {
    particlesActive = document.visibilityState === 'visible';
  });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      canvasVisible = entry.isIntersecting;
    }).observe(particleCanvas);
  }

  function draw() {
    if (!particlesActive || !canvasVisible) {
      animationId = requestAnimationFrame(draw);
      return;
    }

    frame++;
    if (frame % 4 !== 0) {
      animationId = requestAnimationFrame(draw);
      return;
    }

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = getParticleColor();

    for (let i = 0; i < count; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    if (count > 15) {
      for (let i = 0; i < count; i += 2) {
        for (let j = i + 1; j < count; j += 2) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = dx * dx + dy * dy;
          if (dist < 6400) {
            ctx.strokeStyle = getConnectionColor(0.04 * (1 - Math.sqrt(dist) / 80));
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();

  window.addEventListener('resize', () => {
    w = window.innerWidth;
    h = window.innerHeight;
    particleCanvas.width = w;
    particleCanvas.height = h;
  });

  return () => {
    if (animationId) cancelAnimationFrame(animationId);
  };
}

/**
 * Initialize Matrix rain effect on a canvas.
 */
export function initMatrix() {
  matrixCanvas = $('matrix-canvas');
  if (!matrixCanvas) return;

  if (window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    matrixCanvas.style.display = 'none';
    return;
  }

  const ctx = matrixCanvas.getContext('2d');
  const fontSize = 14;
  let w = window.innerWidth;
  let h = window.innerHeight;
  matrixCanvas.width = w;
  matrixCanvas.height = h;

  const cols = Math.floor(w / fontSize);
  const drops = Array(cols).fill(1);

  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';

  let matrixFrame = 0;
  let canvasVisible = true;
  let matrixAnimationId = null;

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      canvasVisible = entry.isIntersecting;
    }).observe(matrixCanvas);
  }

  function drawMatrix() {
    if (!particlesActive || !canvasVisible) {
      matrixAnimationId = requestAnimationFrame(drawMatrix);
      return;
    }

    matrixFrame++;
    if (matrixFrame % 3 !== 0) {
      requestAnimationFrame(drawMatrix);
      return;
    }

    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = 'rgba(0,255,0,0.15)';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > h && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    requestAnimationFrame(drawMatrix);
  }

  drawMatrix();

  window.addEventListener('resize', () => {
    w = window.innerWidth;
    h = window.innerHeight;
    matrixCanvas.width = w;
    matrixCanvas.height = h;
  });

  return () => {
    if (matrixAnimationId) cancelAnimationFrame(matrixAnimationId);
  };
}
