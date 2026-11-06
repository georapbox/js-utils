import { describe, expect, it, vi } from 'vitest';
import { partial } from './partial.js';

describe('Function/partial', () => {
  it('prepends a single partial argument', () => {
    const add = (a, b, c) => a + b + c;
    const addOne = partial(add, 1);

    expect(addOne(2, 3)).toBe(6);
  });

  it('prepends multiple partial arguments', () => {
    const add = (a, b, c) => a + b + c;

    expect(partial(add, 10, 20)(30)).toBe(60);
    expect(partial(add, 100, 200, 300)()).toBe(600);
  });

  it('forwards all arguments when no partial arguments are provided', () => {
    const fn = (...args) => args;
    const callback = partial(fn);

    expect(callback(1, 2, 3)).toStrictEqual([1, 2, 3]);
    expect(callback()).toStrictEqual([]);
  });

  it('preserves the order of partial and subsequent arguments', () => {
    const fn = (...args) => args;
    const callback = partial(fn, 'a', 'b');

    expect(callback('c', 'd')).toStrictEqual(['a', 'b', 'c', 'd']);
  });

  it('forwards additional arguments to the original function', () => {
    const fn = (...args) => args;
    const callback = partial(fn, 1);

    expect(callback(2, 3, 4, 5)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it('preserves the this binding', () => {
    const object = {
      multiplier: 10,
      callback: partial(function (a, b) {
        return (a + b) * this.multiplier;
      }, 2)
    };

    expect(object.callback(3)).toBe(50);
    expect(object.callback.call({ multiplier: 5 }, 3)).toBe(25);
  });

  it('returns the result of the original function', () => {
    const callback = partial(
      (a, b) => ({
        sum: a + b,
        product: a * b
      }),
      3
    );

    expect(callback(4)).toStrictEqual({
      sum: 7,
      product: 12
    });
  });

  it('supports independent partially applied functions', () => {
    const add = (a, b) => a + b;

    const addOne = partial(add, 1);
    const addTen = partial(add, 10);

    expect(addOne(2)).toBe(3);
    expect(addTen(2)).toBe(12);
    expect(addOne(5)).toBe(6);
  });

  it('supports nested partial application', () => {
    const fn = (...args) => args;
    const callback = partial(partial(fn, 1), 2);

    expect(callback(3, 4)).toStrictEqual([1, 2, 3, 4]);
  });

  it('invokes the original function exactly once per call', () => {
    const fn = vi.fn((...args) => args);
    const callback = partial(fn, 1, 2);

    expect(callback(3)).toStrictEqual([1, 2, 3]);
    expect(fn).toHaveBeenCalledExactlyOnceWith(1, 2, 3);
  });

  it('supports functions that return undefined', () => {
    const callback = partial(() => undefined, 1, 2);

    expect(callback()).toBeUndefined();
  });

  it('throws a TypeError when the first argument is not a function', () => {
    for (const fn of [undefined, null, 42, 'function', true, {}]) {
      expect(() => partial(fn)).toThrow(new TypeError('Expected a function for first argument'));
    }
  });
});
