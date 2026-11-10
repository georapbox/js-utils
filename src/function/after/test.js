import { describe, expect, it, vi } from 'vitest';
import { after } from './after.js';

describe('Function/after', () => {
  it('invokes the function on the nth call', () => {
    const fn = vi.fn();
    const callback = after(3, fn);

    callback();
    callback();

    expect(fn).not.toHaveBeenCalled();

    callback();

    expect(fn).toHaveBeenCalledOnce();
  });

  it('invokes the function on every call after the threshold', () => {
    const fn = vi.fn();
    const callback = after(2, fn);

    callback();
    callback();
    callback();
    callback();

    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('invokes the function on the first call when n is one', () => {
    const fn = vi.fn();
    const callback = after(1, fn);

    callback();

    expect(fn).toHaveBeenCalledOnce();
  });

  it('invokes the function immediately when n is zero or negative', () => {
    for (const n of [0, -1, -5]) {
      const fn = vi.fn();
      const callback = after(n, fn);

      callback();
      callback();

      expect(fn).toHaveBeenCalledTimes(2);
    }
  });

  it('forwards arguments to the original function', () => {
    const fn = vi.fn();
    const callback = after(2, fn);

    callback('ignored');

    callback('hello', 42);

    expect(fn).toHaveBeenCalledExactlyOnceWith('hello', 42);
  });

  it('preserves the this binding', () => {
    const object = {
      value: 10,
      callback: after(2, function (amount) {
        this.value += amount;
        return this.value;
      })
    };

    object.callback(5);

    expect(object.value).toBe(10);

    expect(object.callback(7)).toBe(17);
    expect(object.callback(3)).toBe(20);
  });

  it('returns the result of the original function after the threshold', () => {
    const callback = after(3, (a, b) => a + b);

    expect(callback(1, 2)).toBeUndefined();
    expect(callback(3, 4)).toBeUndefined();
    expect(callback(5, 6)).toBe(11);
    expect(callback(7, 8)).toBe(15);
  });

  it('maintains independent counters for different instances', () => {
    const fn = vi.fn();
    const first = after(2, fn);
    const second = after(2, fn);

    first();
    first();

    expect(fn).toHaveBeenCalledOnce();

    second();

    expect(fn).toHaveBeenCalledOnce();

    second();

    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('throws a TypeError when n is not an integer', () => {
    for (const n of [undefined, null, '5', 2.5, -2.5, NaN, Infinity, -Infinity]) {
      expect(() => after(n, () => {})).toThrow(new TypeError('Expected an integer for first argument'));
    }
  });

  it('throws a TypeError when fn is not a function', () => {
    for (const fn of [undefined, null, 42, 'callback', true, {}]) {
      expect(() => after(3, fn)).toThrow(new TypeError('Expected a function for second argument'));
    }
  });
});
