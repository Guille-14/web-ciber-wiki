import { events, EVENTS } from './events.js';

/**
 * Motion Accessibility - Respects prefers-reduced-motion and provides controls
 */
export class MotionAccessibility {
  constructor() {
    this.prefersReducedMotion = false;
    this.userPreference = null; // 'reduce' | 'no-preference' | null (use system)
    this.initialized = false;
  }

  /**
   * Initialize motion accessibility
   */
  init() {
    if (this.initialized) return;

    // Check system preference
    this.checkSystemPreference();

    // Check user preference from localStorage
    this.loadUserPreference();

    // Apply motion settings
    this.applySettings();

    // Listen for system preference changes
    this.watchSystemPreference();

    // Add motion control to UI
    this.addMotionControl();

    this.initialized = true;
  }

  /**
   * Check system prefers-reduced-motion
   */
  checkSystemPreference() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.prefersReducedMotion = mediaQuery.matches;
  }

  /**
   * Watch for system preference changes
   */
  watchSystemPreference() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', (e) => {
      this.prefersReducedMotion = e.matches;
      if (this.userPreference === null) {
        this.applySettings();
        events.emit(EVENTS.THEME_CHANGED, { reducedMotion: this.prefersReducedMotion });
      }
    });
  }

  /**
   * Load user preference from localStorage
   */
  loadUserPreference() {
    try {
      const saved = localStorage.getItem('cyberwiki-motion-preference');
      if (saved === 'reduce' || saved === 'no-preference' || saved === 'null') {
        this.userPreference = saved === 'null' ? null : saved;
      }
    } catch (e) {}
  }

  /**
   * Save user preference to localStorage
   */
  saveUserPreference() {
    try {
      localStorage.setItem('cyberwiki-motion-preference', this.userPreference || 'null');
    } catch (e) {}
  }

  /**
   * Get effective motion preference
   * @returns {boolean} True if motion should be reduced
   */
  shouldReduceMotion() {
    if (this.userPreference !== null) {
      return this.userPreference === 'reduce';
    }
    return this.prefersReducedMotion;
  }

  /**
   * Apply motion settings to document
   */
  applySettings() {
    const reduce = this.shouldReduceMotion();

    if (reduce) {
      document.documentElement.classList.add('reduce-motion');
      document.documentElement.classList.remove('allow-motion');
    } else {
      document.documentElement.classList.add('allow-motion');
      document.documentElement.classList.remove('reduce-motion');
    }

    // Pause/resume canvas animations
    const matrixCanvas = document.getElementById('matrix-canvas');
    const particleCanvas = document.getElementById('particle-canvas');

    if (matrixCanvas) {
      matrixCanvas.style.animationPlayState = reduce ? 'paused' : 'running';
    }
    if (particleCanvas) {
      particleCanvas.style.display = reduce ? 'none' : '';
    }

    // Pause CSS animations
    document.querySelectorAll('.glitch, .shimmer, .scanlines').forEach(el => {
      el.style.animationPlayState = reduce ? 'paused' : 'running';
    });
  }

  /**
   * Add motion control toggle to UI
   */
  addMotionControl() {
    // Use existing motion toggle button from HTML
    let motionToggle = document.getElementById('motion-toggle');

    // Fallback: create if not in HTML
    if (!motionToggle) {
      const themeToggle = document.getElementById('theme-toggle');
      if (!themeToggle) return;

      motionToggle = document.createElement('button');
      motionToggle.id = 'motion-toggle';
      motionToggle.className = 'theme-toggle';
      themeToggle.parentNode.insertBefore(motionToggle, themeToggle.nextSibling);
    }

    // Update state
    this.updateMotionButton();

    motionToggle.addEventListener('click', () => {
      this.toggleMotion();
    });
  }

  /**
   * Update motion toggle button appearance
   */
  updateMotionButton() {
    const motionToggle = document.getElementById('motion-toggle');
    if (!motionToggle) return;

    const reduce = this.shouldReduceMotion();
    motionToggle.title = reduce ? 'Activar animaciones' : 'Desactivar animaciones';
    motionToggle.setAttribute('aria-label', motionToggle.title);
    motionToggle.setAttribute('aria-pressed', reduce ? 'true' : 'false');
    motionToggle.textContent = reduce ? '🎬' : '⏸️';
  }

  /**
   * Toggle motion preference
   */
  toggleMotion() {
    const currentReduce = this.shouldReduceMotion();
    this.userPreference = currentReduce ? 'no-preference' : 'reduce';
    this.saveUserPreference();
    this.applySettings();
    this.updateMotionButton();
    events.emit(EVENTS.THEME_CHANGED, { reducedMotion: this.shouldReduceMotion() });
  }

  /**
   * Set motion preference
   * @param {'reduce' | 'no-preference' | null} preference
   */
  setPreference(preference) {
    this.userPreference = preference;
    this.saveUserPreference();
    this.applySettings();
  }

  /**
   * Reset to system preference
   */
  resetToSystem() {
    this.userPreference = null;
    this.saveUserPreference();
    this.applySettings();
  }

  /**
   * Get current preference status
   * @returns {{ effective: string, system: string, user: string }}
   */
  getStatus() {
    return {
      effective: this.shouldReduceMotion() ? 'reduce' : 'no-preference',
      system: this.prefersReducedMotion ? 'reduce' : 'no-preference',
      user: this.userPreference
    };
  }

  /**
   * Destroy motion accessibility
   */
  destroy() {
    document.documentElement.classList.remove('reduce-motion', 'allow-motion');
    const motionToggle = document.getElementById('motion-toggle');
    if (motionToggle) motionToggle.remove();
    this.initialized = false;
  }
}

// Export singleton
export const motionA11y = new MotionAccessibility();
