import { describe, expect, it, vi } from 'vitest';
import { ary } from './ary.js';

describe('Function/ary', () => {
  it('limits the number of arguments forwarded to the function', () => {
    const fn = (...args) => args;

    const capOne = ary(fn, 1);
    const capTwo = ary(fn, 2);

    expect(capOne('a', 'b', 'c')).toStrictEqual(['a']);
    expect(capTwo('a', 'b', 'c')).toStrictEqual(['a', 'b']);
  });

  it('forwards all arguments when fewer than the cap are provided', () => {
    const fn = (...args) => args;
    const callback = ary(fn, 3);

    expect(callback()).toStrictEqual([]);
    expect(callback('a')).toStrictEqual(['a']);
    expect(callback('a', 'b')).toStrictEqual(['a', 'b']);
  });

  it('forwards no arguments when the cap is zero', () => {
    const fn = (...args) => args;

    expect(ary(fn, 0)('a', 'b')).toStrictEqual([]);
    expect(ary(fn, -0)('a', 'b')).toStrictEqual([]);
  });

  it('forwards no arguments when the cap is negative', () => {
    const fn = (...args) => args;

    expect(ary(fn, -1)('a', 'b')).toStrictEqual([]);
    expect(ary(fn, -5)('a', 'b')).toStrictEqual([]);
  });

  it('supports caps larger than the number of arguments', () => {
    const fn = (...args) => args;
    const callback = ary(fn, 10);

    expect(callback(1, 2, 3)).toStrictEqual([1, 2, 3]);
  });

  it('does not rely on the original function length', () => {
    const fn = (...args) => args;

    expect(fn.length).toBe(0);
    expect(ary(fn, 2)(1, 2, 3)).toStrictEqual([1, 2]);
  });

  it('preserves the this binding', () => {
    const object = {
      value: 10,
      callback: ary(function (amount) {
        return this.value + amount;
      }, 1)
    };

    expect(object.callback(5, 100)).toBe(15);
  });

  it('forwards the return value of the original function', () => {
    const callback = ary((a, b) => a + b, 2);

    expect(callback(10, 20, 30)).toBe(30);
  });

  it('invokes the original function exactly once per call', () => {
    const fn = vi.fn((...args) => args);
    const callback = ary(fn, 2);

    expect(callback(1, 2, 3)).toStrictEqual([1, 2]);
    expect(fn).toHaveBeenCalledExactlyOnceWith(1, 2);
  });

  it('works with parseInt as an array callback', () => {
    const array = ['1', '2', '3'];

    expect(array.map(ary(parseInt, 1))).toStrictEqual([1, 2, 3]);
  });

  it('throws a TypeError when the first argument is not a function', () => {
    for (const fn of [undefined, null, 42, 'function', true, {}]) {
      expect(() => ary(fn, 2)).toThrow(new TypeError('Expected a function for first argument'));
    }
  });

  it('throws a TypeError when the cap is not an integer', () => {
    for (const cap of [undefined, null, '2', true, 2.5, -2.5, NaN, Infinity, -Infinity]) {
      expect(() => ary(() => {}, cap)).toThrow(new TypeError('Expected an integer for second argument'));
    }
  });
});
