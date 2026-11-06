import { describe, expect, it, vi } from 'vitest';
import { before } from './before.js';

describe('Function/before', () => {
  it('invokes the function only before the nth call', () => {
    const fn = vi.fn();
    const callback = before(3, fn);

    callback();
    callback();

    expect(fn).toHaveBeenCalledTimes(2);

    callback();
    callback();

    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('invokes the function only once when n is two', () => {
    const fn = vi.fn();
    const callback = before(2, fn);

    callback();
    callback();
    callback();

    expect(fn).toHaveBeenCalledOnce();
  });

  it('never invokes the function when n is one', () => {
    const fn = vi.fn();
    const callback = before(1, fn);

    expect(callback()).toBeUndefined();
    expect(callback()).toBeUndefined();
    expect(fn).not.toHaveBeenCalled();
  });

  it('never invokes the function when n is zero or negative', () => {
    for (const n of [0, -0, -1, -5]) {
      const fn = vi.fn();
      const callback = before(n, fn);

      expect(callback()).toBeUndefined();
      expect(callback()).toBeUndefined();
      expect(fn).not.toHaveBeenCalled();
    }
  });

  it('returns the last result after the threshold is reached', () => {
    let count = 0;
    const callback = before(4, () => ++count);

    expect(callback()).toBe(1);
    expect(callback()).toBe(2);
    expect(callback()).toBe(3);
    expect(callback()).toBe(3);
    expect(callback()).toBe(3);

    expect(count).toBe(3);
  });

  it('forwards arguments to the original function', () => {
    const fn = vi.fn();
    const callback = before(3, fn);

    callback('hello', 42);
    callback('world', 100);
    callback('ignored');

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, 'hello', 42);
    expect(fn).toHaveBeenNthCalledWith(2, 'world', 100);
  });

  it('preserves the this binding', () => {
    const object = {
      value: 10,
      callback: before(3, function (amount) {
        this.value += amount;
        return this.value;
      })
    };

    expect(object.callback(5)).toBe(15);
    expect(object.callback(7)).toBe(22);
    expect(object.callback(3)).toBe(22);
    expect(object.value).toBe(22);
  });

  it('maintains independent counters for different instances', () => {
    const fn = vi.fn();
    const first = before(3, fn);
    const second = before(3, fn);

    first();
    first();
    first();

    expect(fn).toHaveBeenCalledTimes(2);

    second();
    second();
    second();

    expect(fn).toHaveBeenCalledTimes(4);
  });

  it('throws a TypeError when n is not an integer', () => {
    for (const n of [undefined, null, '5', 2.5, -2.5, NaN, Infinity, -Infinity]) {
      expect(() => before(n, () => {})).toThrow(new TypeError('Expected an integer for first argument'));
    }
  });

  it('throws a TypeError when fn is not a function', () => {
    for (const fn of [undefined, null, 42, 'callback', true, {}]) {
      expect(() => before(3, fn)).toThrow(new TypeError('Expected a function for second argument'));
    }
  });
});
