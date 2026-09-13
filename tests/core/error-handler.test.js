import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CircuitBreaker, retryWithBackoff } from '../../src/core/error-handler.js';

describe('CircuitBreaker', () => {
  it('starts in closed state', () => {
    const cb = new CircuitBreaker();
    expect(cb.getState().state).toBe('closed');
  });

  it('opens after failure threshold', async () => {
    const cb = new CircuitBreaker({ failureThreshold: 2 });
    const failingFn = () => Promise.reject(new Error('fail'));

    try { await cb.execute(failingFn); } catch {}
    try { await cb.execute(failingFn); } catch {}

    expect(cb.getState().state).toBe('open');
  });

  it('rejects calls when open', async () => {
    const cb = new CircuitBreaker({ failureThreshold: 1 });
    const failingFn = () => Promise.reject(new Error('fail'));

    try { await cb.execute(failingFn); } catch {}
    await expect(cb.execute(failingFn)).rejects.toThrow('Circuit breaker is OPEN');
  });

  it('transitions to half-open after reset timeout', async () => {
    const cb = new CircuitBreaker({ failureThreshold: 1, resetTimeout: 10 });
    const failingFn = () => Promise.reject(new Error('fail'));

    try { await cb.execute(failingFn); } catch {}
    await new Promise(r => setTimeout(r, 15));

    const successFn = () => Promise.resolve('ok');
    const result = await cb.execute(successFn);
    expect(result).toBe('ok');
  });

  it('resets on success in closed state', async () => {
    const cb = new CircuitBreaker({ failureThreshold: 3 });
    const failingFn = () => Promise.reject(new Error('fail'));
    const successFn = () => Promise.resolve('ok');

    try { await cb.execute(failingFn); } catch {}
    try { await cb.execute(failingFn); } catch {}
    await cb.execute(successFn);

    expect(cb.getState().failureCount).toBe(0);
  });

  it('reset() clears all state', () => {
    const cb = new CircuitBreaker({ failureThreshold: 1 });
    cb.onFailure();
    cb.reset();
    expect(cb.getState().state).toBe('closed');
    expect(cb.getState().failureCount).toBe(0);
  });
});

describe('retryWithBackoff', () => {
  it('returns result on first success', async () => {
    const fn = vi.fn().mockResolvedValue('ok');
    const result = await retryWithBackoff(fn, { maxRetries: 2, baseDelay: 10 });
    expect(result).toBe('ok');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('retries on failure and succeeds', async () => {
    const fn = vi.fn()
      .mockRejectedValueOnce(new Error('fail'))
      .mockResolvedValue('ok');
    const result = await retryWithBackoff(fn, { maxRetries: 2, baseDelay: 10 });
    expect(result).toBe('ok');
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('throws after max retries exhausted', async () => {
    const fn = vi.fn().mockRejectedValue(new Error('always fail'));
    await expect(
      retryWithBackoff(fn, { maxRetries: 2, baseDelay: 10 })
    ).rejects.toThrow('always fail');
    expect(fn).toHaveBeenCalledTimes(3);
  });
});
