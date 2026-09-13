/* ═══════════════════════════════════════════
   CiberQuiz v5.0 — Module Entry Point (ES Module)
   ═══════════════════════════════════════════ */
import { Quiz } from './quiz-engine.js';
import { injectQuizHTML } from './quiz-html.js';

export { Quiz };

let inited = false;

/**
 * Initialize the quiz system.
 * Injects the boot HTML into #quiz-section (once) and boots the engine.
 */
export function initQuiz() {
  injectQuizHTML();
  if (Quiz && typeof Quiz.init === 'function' && !inited) {
    inited = true;
    try {
      Quiz.init();
    } catch (err) {
      console.error('[quiz] init error:', err);
      inited = false;
    }
  }
}

export default Quiz;
