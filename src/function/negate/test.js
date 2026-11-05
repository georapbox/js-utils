import { describe, expect, it, vi } from 'vitest';
import { negate } from './negate.js';

describe('Function/negate', () => {
  it('negates boolean results', () => {
    const isEven = (number) => number % 2 === 0;
    const isNotEven = negate(isEven);

    expect(isNotEven(2)).toBe(false);
    expect(isNotEven(3)).toBe(true);
  });

  it('negates the truthiness of non-boolean results', () => {
    const callback = negate((value) => value);

    for (const value of [0, '', null, undefined, NaN, false]) {
      expect(callback(value)).toBe(true);
    }

    for (const value of [1, 'hello', [], {}, true]) {
      expect(callback(value)).toBe(false);
    }
  });

  it('always returns a boolean', () => {
    const callback = negate((value) => value);

    expect(callback(0)).toBeTypeOf('boolean');
    expect(callback('hello')).toBeTypeOf('boolean');
  });

  it('forwards all arguments to the original function', () => {
    const fn = vi.fn((a, b) => a > b);
    const callback = negate(fn);

    expect(callback(10, 5)).toBe(false);
    expect(fn).toHaveBeenCalledExactlyOnceWith(10, 5);
  });

  it('preserves the this binding', () => {
    const object = {
      threshold: 10,
      callback: negate(function (value) {
        return value > this.threshold;
      })
    };

    expect(object.callback(15)).toBe(false);
    expect(object.callback(5)).toBe(true);
    expect(object.callback.call({ threshold: 20 }, 15)).toBe(true);
  });

  it('works with array filtering', () => {
    const isEven = (number) => number % 2 === 0;
    const numbers = [1, 2, 3, 4, 5, 6];

    expect(numbers.filter(isEven)).toStrictEqual([2, 4, 6]);
    expect(numbers.filter(negate(isEven))).toStrictEqual([1, 3, 5]);
  });

  it('supports negating an already negated function', () => {
    const isPositive = (number) => number > 0;
    const doubleNegated = negate(negate(isPositive));

    expect(doubleNegated(5)).toBe(true);
    expect(doubleNegated(-5)).toBe(false);
  });

  it('invokes the original function exactly once per call', () => {
    const fn = vi.fn(() => true);
    const callback = negate(fn);

    expect(callback()).toBe(false);
    expect(fn).toHaveBeenCalledOnce();
  });

  it('throws a TypeError when the argument is not a function', () => {
    for (const fn of [undefined, null, 42, 'function', true, {}]) {
      expect(() => negate(fn)).toThrow(new TypeError('Expected a function for first argument'));
    }
  });
});
