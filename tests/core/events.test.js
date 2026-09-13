import { describe, it, expect, vi } from 'vitest';
import { EventBus, EVENTS } from '../../src/core/events.js';

describe('EventBus', () => {
  it('calls listener when event is emitted', () => {
    const bus = new EventBus();
    const fn = vi.fn();
    bus.on('test', fn);
    bus.emit('test', { data: 1 });
    expect(fn).toHaveBeenCalledWith({ data: 1 });
  });

  it('supports multiple listeners', () => {
    const bus = new EventBus();
    const fn1 = vi.fn();
    const fn2 = vi.fn();
    bus.on('test', fn1);
    bus.on('test', fn2);
    bus.emit('test');
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(1);
  });

  it('supports once listener', () => {
    const bus = new EventBus();
    const fn = vi.fn();
    bus.once('test', fn);
    bus.emit('test');
    bus.emit('test');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('supports off to remove listener', () => {
    const bus = new EventBus();
    const fn = vi.fn();
    bus.on('test', fn);
    bus.off('test', fn);
    bus.emit('test');
    expect(fn).not.toHaveBeenCalled();
  });

  it('supports wildcard listeners', () => {
    const bus = new EventBus();
    const fn = vi.fn();
    bus.on('*', fn);
    bus.emit('anything');
    expect(fn).toHaveBeenCalled();
  });

  it('does not crash if listener throws', () => {
    const bus = new EventBus();
    bus.on('test', () => { throw new Error('boom'); });
    expect(() => bus.emit('test')).not.toThrow();
  });

  it('exports EVENTS constants', () => {
    expect(EVENTS).toBeDefined();
    expect(EVENTS.TAB_CHANGED).toBeDefined();
    expect(EVENTS.ARTICLE_OPENED).toBeDefined();
    expect(EVENTS.APP_ERROR).toBeDefined();
  });
});
