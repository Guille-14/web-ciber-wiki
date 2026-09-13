import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createState } from '../../src/core/state.js';

describe('createState', () => {
  let state;

  beforeEach(() => {
    state = createState();
  });

  it('returns default state', () => {
    const s = state.getAll();
    expect(s).toBeDefined();
    expect(typeof s).toBe('object');
  });

  it('get returns value by path', () => {
    const s = createState({ test: { nested: { value: 42 } } });
    expect(s.get('test.nested.value')).toBe(42);
  });

  it('get returns undefined for missing path', () => {
    expect(state.get('nonexistent.path')).toBeUndefined();
  });

  it('set updates value by path', () => {
    state.set('test.value', 100);
    expect(state.get('test.value')).toBe(100);
  });

  it('set creates intermediate objects', () => {
    state.set('a.b.c', 'deep');
    expect(state.get('a.b.c')).toBe('deep');
  });

  it('set triggers subscribers', () => {
    const fn = vi.fn();
    state.subscribe(fn);
    state.set('test', 1);
    expect(fn).toHaveBeenCalled();
  });

  it('subscribe returns unsubscribe function', () => {
    const fn = vi.fn();
    const unsub = state.subscribe(fn);
    unsub();
    state.set('test', 1);
    expect(fn).not.toHaveBeenCalled();
  });

  it('update triggers single emit', () => {
    const fn = vi.fn();
    state.subscribe(fn);
    state.update({ a: 1, b: 2 });
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('batch collects changes', () => {
    const fn = vi.fn();
    state.subscribe(fn);
    state.batch(() => {
      state.set('a', 1);
      state.set('b', 2);
    });
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('batch resets even if fn throws', () => {
    const fn = vi.fn();
    state.subscribe(fn);
    try {
      state.batch(() => {
        state.set('a', 1);
        throw new Error('boom');
      });
    } catch {}
    state.set('c', 3);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('reset restores defaults', () => {
    state.set('theme', 'light');
    state.reset();
  });

  it('watch fires for specific path', () => {
    const fn = vi.fn();
    state.watch('theme', fn);
    state.set('theme', 'light');
    expect(fn).toHaveBeenCalled();
  });

  it('watch does not fire for other paths', () => {
    const fn = vi.fn();
    state.watch('theme', fn);
    state.set('other', 1);
    expect(fn).not.toHaveBeenCalled();
  });

  it('getAll returns deep clone', () => {
    const a = state.getAll();
    const b = state.getAll();
    expect(a).toEqual(b);
    expect(a).not.toBe(b);
  });

  it('get returns value by path (reference, not clone)', () => {
    state.set('obj', { nested: true });
    const a = state.get('obj');
    const b = state.get('obj');
    expect(a).toEqual(b);
    expect(a).toBe(b);
  });
});
