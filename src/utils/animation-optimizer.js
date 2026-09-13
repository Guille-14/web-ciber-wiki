/**
 * Animation Optimizer - Manages and optimizes all animations
 */
export class AnimationOptimizer {
  constructor() {
    this.animations = new Map();
    this.isPaused = false;
    this.preferReducedMotion = false;
    this.devicePixelRatio = window.devicePixelRatio || 1;
    this.isLowEndDevice = this.detectLowEndDevice();
    
    // Listen for reduced motion preference
    this.mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.mediaQuery.addEventListener('change', (e) => {
      this.preferReducedMotion = e.matches;
      this.handleReducedMotionChange();
    });
    this.preferReducedMotion = this.mediaQuery.matches;
    
    // Listen for visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pauseAll();
      } else if (!this.preferReducedMotion) {
        this.resumeAll();
      }
    });
  }

  /**
   * Detect if device is low-end
   * @returns {boolean}
   */
  detectLowEndDevice() {
    // Check for low-end indicators
    const nav = navigator;
    const memory = nav.deviceMemory || 4;
    const cores = nav.hardwareConcurrency || 4;
    
    // Low memory or few cores
    if (memory < 4 || cores < 4) return true;
    
    // Check for mobile
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(nav.userAgent)) {
      return true;
    }
    
    return false;
  }

  /**
   * Register an animation
   * @param {string} name
   * @param {Object} animation - { update: Function, fps: number }
   */
  register(name, animation) {
    this.animations.set(name, {
      ...animation,
      active: true,
      lastFrame: 0,
      frameInterval: 1000 / (animation.fps || 60)
    });
  }

  /**
   * Unregister an animation
   * @param {string} name
   */
  unregister(name) {
    this.animations.delete(name);
  }

  /**
   * Pause a specific animation
   * @param {string} name
   */
  pause(name) {
    const anim = this.animations.get(name);
    if (anim) anim.active = false;
  }

  /**
   * Resume a specific animation
   * @param {string} name
   */
  resume(name) {
    const anim = this.animations.get(name);
    if (anim && !this.preferReducedMotion) anim.active = true;
  }

  /**
   * Pause all animations
   */
  pauseAll() {
    this.isPaused = true;
    this.animations.forEach((anim) => {
      anim.active = false;
    });
  }

  /**
   * Resume all animations
   */
  resumeAll() {
    this.isPaused = false;
    this.animations.forEach((anim) => {
      if (!this.preferReducedMotion) {
        anim.active = true;
      }
    });
  }

  /**
   * Get optimized FPS based on device capabilities
   * @param {number} requestedFPS
   * @returns {number}
   */
  getOptimizedFPS(requestedFPS) {
    if (this.preferReducedMotion) return 0;
    if (this.isLowEndDevice) return Math.min(requestedFPS, 30);
    return requestedFPS;
  }

  /**
   * Get optimized particle count
   * @param {number} requestedCount
   * @returns {number}
   */
  getOptimizedParticleCount(requestedCount) {
    if (this.preferReducedMotion) return 0;
    if (this.isLowEndDevice) return Math.floor(requestedCount * 0.5);
    return requestedCount;
  }

  /**
   * Get canvas dimensions optimized for device
   * @param {number} width
   * @param {number} height
   * @returns {{ width: number, height: number, scale: number }}
   */
  getOptimizedCanvasSize(width, height) {
    // On low-end devices, use lower resolution
    const scale = this.isLowEndDevice ? 0.5 : this.devicePixelRatio;
    
    return {
      width: Math.floor(width * scale),
      height: Math.floor(height * scale),
      scale
    };
  }

  /**
   * Handle reduced motion preference change
   */
  handleReducedMotionChange() {
    if (this.preferReducedMotion) {
      this.pauseAll();
      this.emitReducedMotionEvent(true);
    } else {
      this.resumeAll();
      this.emitReducedMotionEvent(false);
    }
  }

  /**
   * Emit reduced motion event
   * @param {boolean} reduced
   */
  emitReducedMotionEvent(reduced) {
    window.dispatchEvent(new CustomEvent('reducedMotionChange', {
      detail: { reduced }
    }));
  }

  /**
   * Check if animations should run
   * @returns {boolean}
   */
  shouldAnimate() {
    return !this.isPaused && !this.preferReducedMotion;
  }

  /**
   * Get performance-friendly CSS transition duration
   * @param {number} baseDuration - Base duration in ms
   * @returns {string}
   */
  getTransitionDuration(baseDuration) {
    if (this.preferReducedMotion) return '0.01ms';
    if (this.isLowEndDevice) return `${Math.min(baseDuration, 150)}ms`;
    return `${baseDuration}ms`;
  }

  /**
   * Create throttled update function
   * @param {Function} fn
   * @param {number} fps
   * @returns {Function}
   */
  createThrottledUpdate(fn, fps) {
    const interval = 1000 / fps;
    let lastTime = 0;
    
    return (timestamp) => {
      if (!this.shouldAnimate()) return false;
      
      const elapsed = timestamp - lastTime;
      if (elapsed >= interval) {
        lastTime = timestamp - (elapsed % interval);
        fn(timestamp);
        return true;
      }
      return false;
    };
  }

  /**
   * Destroy optimizer
   */
  destroy() {
    this.pauseAll();
    this.animations.clear();
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener('change', this.handleReducedMotionChange);
    }
  }
}

// Export singleton
export const animationOptimizer = new AnimationOptimizer();
