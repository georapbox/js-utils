import { describe, expect, it, vi } from 'vitest';
import { once } from './once.js';

describe('Function/once', () => {
  it('invokes the original function only once', () => {
    const fn = vi.fn();
    const callback = once(fn);

    callback();
    callback();
    callback();

    expect(fn).toHaveBeenCalledOnce();
  });

  it('forwards arguments from the first invocation', () => {
    const fn = vi.fn();
    const callback = once(fn);

    callback('foo', 42);
    callback('bar', 100);

    expect(fn).toHaveBeenCalledExactlyOnceWith('foo', 42);
  });

  it('returns the result of the first invocation on subsequent calls', () => {
    let count = 0;
    const callback = once(() => ++count);

    expect(callback()).toBe(1);
    expect(callback()).toBe(1);
    expect(callback()).toBe(1);
    expect(count).toBe(1);
  });

  it('preserves the this binding from the first invocation', () => {
    const object = {
      multiplier: 10,
      callback: once(function (value) {
        return value * this.multiplier;
      })
    };

    expect(object.callback(5)).toBe(50);
    expect(object.callback.call({ multiplier: 2 }, 5)).toBe(50);
  });

  it('prevents recursive invocation of the original function', () => {
    const fn = vi.fn(recursive);
    const callback = once(fn);

    function recursive() {
      return callback();
    }

    expect(callback()).toBeUndefined();
    expect(fn).toHaveBeenCalledOnce();
  });

  it('does not retry when the first invocation throws', () => {
    const error = new Error('Failed');
    const fn = vi.fn(() => {
      throw error;
    });

    const callback = once(fn);

    expect(() => callback()).toThrow(error);
    expect(callback()).toBeUndefined();
    expect(fn).toHaveBeenCalledOnce();
  });

  it('maintains independent state for different instances', () => {
    const fn = vi.fn(() => 42);
    const first = once(fn);
    const second = once(fn);

    expect(first()).toBe(42);
    expect(first()).toBe(42);

    expect(second()).toBe(42);
    expect(second()).toBe(42);

    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('preserves an undefined return value', () => {
    const fn = vi.fn(() => undefined);
    const callback = once(fn);

    expect(callback()).toBeUndefined();
    expect(callback()).toBeUndefined();
    expect(fn).toHaveBeenCalledOnce();
  });

  it('throws a TypeError when the argument is not a function', () => {
    for (const fn of [undefined, null, 42, 'function', true, {}]) {
      expect(() => once(fn)).toThrow(new TypeError('Expected a function for first argument'));
    }
  });
});
