import { describe, it, expect } from 'vitest';
import { formatRelativeTime, formatReadTime, getDifficultyClass } from '../../src/utils/format.js';

describe('formatRelativeTime', () => {
  it('returns "hace un momento" for recent timestamps', () => {
    const now = Date.now();
    expect(formatRelativeTime(now)).toBe('hace un momento');
    expect(formatRelativeTime(now - 30000)).toBe('hace un momento');
  });

  it('returns minutes for timestamps < 1 hour', () => {
    const min5 = Date.now() - 5 * 60 * 1000;
    const result = formatRelativeTime(min5);
    expect(result).toContain('min');
  });

  it('returns hours for timestamps < 1 day', () => {
    const h2 = Date.now() - 2 * 60 * 60 * 1000;
    const result = formatRelativeTime(h2);
    expect(result).toContain('h');
  });

  it('returns days for timestamps < 30 days', () => {
    const d3 = Date.now() - 3 * 24 * 60 * 60 * 1000;
    const result = formatRelativeTime(d3);
    expect(result).toContain('d');
  });
});

describe('formatReadTime', () => {
  it('returns a string with "min"', () => {
    const result = formatReadTime(500);
    expect(result).toContain('min');
  });

  it('returns at least 1 min for short content', () => {
    const result = formatReadTime(10);
    expect(result).toContain('1');
  });
});

describe('getDifficultyClass', () => {
  it('returns difficulty-beginner for Principiante', () => {
    expect(getDifficultyClass('Principiante')).toBe('difficulty-beginner');
  });

  it('returns difficulty-intermediate for Intermedio', () => {
    expect(getDifficultyClass('Intermedio')).toBe('difficulty-intermediate');
  });

  it('returns difficulty-advanced for Avanzado', () => {
    expect(getDifficultyClass('Avanzado')).toBe('difficulty-advanced');
  });

  it('returns difficulty-beginner for unknown', () => {
    expect(getDifficultyClass('Unknown')).toBe('difficulty-beginner');
  });
});
