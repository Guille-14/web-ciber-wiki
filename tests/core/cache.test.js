import { describe, it, expect, beforeEach } from 'vitest';
import { LRUCache } from '../../src/core/cache.js';

describe('LRUCache', () => {
  let cache;

  beforeEach(() => {
    cache = new LRUCache({ maxSize: 3, defaultTTL: 1000 });
  });

  it('starts empty', () => {
    expect(cache.size).toBe(0);
    expect(cache.has('a')).toBe(false);
  });

  it('set and get basic values', () => {
    cache.set('a', 1);
    expect(cache.get('a')).toBe(1);
  });

  it('returns undefined for missing keys', () => {
    expect(cache.get('missing')).toBeUndefined();
  });

  it('evicts LRU when full', () => {
    cache.set('a', 1);
    cache.set('b', 2);
    cache.set('c', 3);
    cache.set('d', 4); // should evict 'a'
    expect(cache.has('a')).toBe(false);
    expect(cache.size).toBe(3);
  });

  it('get moves item to front (MRU)', () => {
    cache.set('a', 1);
    cache.set('b', 2);
    cache.set('c', 3);
    cache.get('a'); // 'a' is now MRU
    cache.set('d', 4); // should evict 'b' (LRU)
    expect(cache.has('a')).toBe(true);
    expect(cache.has('b')).toBe(false);
  });

  it('set overwrites existing key', () => {
    cache.set('a', 1);
    cache.set('a', 2);
    expect(cache.get('a')).toBe(2);
    expect(cache.size).toBe(1);
  });

  it('has returns true for existing keys', () => {
    cache.set('a', 1);
    expect(cache.has('a')).toBe(true);
  });

  it('delete removes a key', () => {
    cache.set('a', 1);
    cache.delete('a');
    expect(cache.has('a')).toBe(false);
    expect(cache.size).toBe(0);
  });

  it('clear removes all entries', () => {
    cache.set('a', 1);
    cache.set('b', 2);
    cache.clear();
    expect(cache.size).toBe(0);
  });

  it('keys returns keys in MRU order', () => {
    cache.set('a', 1);
    cache.set('b', 2);
    cache.set('c', 3);
    cache.get('a'); // move a to front
    const keys = cache.keys();
    expect(keys[0]).toBe('a');
  });

  it('respects custom TTL', async () => {
    cache.set('a', 1, 50); // 50ms TTL
    expect(cache.get('a')).toBe(1);
    await new Promise(r => setTimeout(r, 60));
    expect(cache.get('a')).toBeUndefined();
  });

  it('getStats returns correct stats', () => {
    cache.set('a', 1);
    cache.get('a'); // hit
    cache.get('b'); // miss
    const stats = cache.getStats();
    expect(stats.hits).toBe(1);
    expect(stats.misses).toBe(1);
    expect(stats.size).toBe(1);
  });

  it('handles maxSize=1', () => {
    const small = new LRUCache({ maxSize: 1 });
    small.set('a', 1);
    small.set('b', 2);
    expect(small.has('a')).toBe(false);
    expect(small.get('b')).toBe(2);
  });
});
