import { describe, it, expect, beforeEach } from 'vitest';
import { Storage } from '../../src/core/storage.js';

describe('Storage', () => {
  let storage;

  beforeEach(() => {
    localStorage.clear();
    storage = new Storage();
  });

  it('get returns defaultValue for missing key', () => {
    expect(storage.get('cyberwiki-missing', 'default')).toBe('default');
  });

  it('set persists and get retrieves', () => {
    storage.set('cyberwiki-key', { value: 42 });
    expect(storage.get('cyberwiki-key')).toEqual({ value: 42 });
  });

  it('set returns true on success', () => {
    expect(storage.set('cyberwiki-key', 'value')).toBe(true);
  });

  it('get parses JSON correctly', () => {
    localStorage.setItem('cyberwiki-test-key', JSON.stringify({ a: 1 }));
    expect(storage.get('cyberwiki-test-key')).toEqual({ a: 1 });
  });

  it('get returns defaultValue on corrupted JSON', () => {
    localStorage.setItem('cyberwiki-test-key', 'invalid json{{{');
    expect(storage.get('cyberwiki-test-key', 'fallback')).toBe('fallback');
  });

  it('remove deletes key', () => {
    storage.set('cyberwiki-key', 'value');
    storage.remove('cyberwiki-key');
    expect(storage.get('cyberwiki-key')).toBeNull();
  });

  it('has returns true for existing key', () => {
    storage.set('cyberwiki-key', 'value');
    expect(storage.has('cyberwiki-key')).toBe(true);
  });

  it('has returns false for missing key', () => {
    expect(storage.has('cyberwiki-missing')).toBe(false);
  });

  it('keys returns namespaced keys', () => {
    storage.set('cyberwiki-a', 1);
    storage.set('cyberwiki-b', 2);
    const keys = storage.keys();
    expect(keys).toContain('cyberwiki-a');
    expect(keys).toContain('cyberwiki-b');
  });

  it('clear removes only app keys', () => {
    storage.set('cyberwiki-a', 1);
    localStorage.setItem('external-key', 'external');
    storage.clear();
    expect(storage.has('cyberwiki-a')).toBe(false);
    expect(localStorage.getItem('external-key')).toBe('external');
  });

  it('onWrite fires callback', () => {
    const fn = () => {};
    const unsub = storage.onWrite('cyberwiki-key', fn);
    expect(typeof unsub).toBe('function');
    unsub();
  });
});
