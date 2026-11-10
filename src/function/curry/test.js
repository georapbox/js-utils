import { describe, expect, it } from 'vitest';
import { curry } from './curry.js';

describe('Function/curry', () => {
  it('curries a function using its declared arity', () => {
    const add = curry((a, b, c) => a + b + c);

    expect(add(1)(2)(3)).toBe(6);
  });

  it('supports providing arguments in groups', () => {
    const add = curry((a, b, c) => a + b + c);

    expect(add(1, 2)(3)).toBe(6);
    expect(add(1)(2, 3)).toBe(6);
    expect(add(1, 2, 3)).toBe(6);
  });

  it('returns a function until the required arity is reached', () => {
    const add = curry((a, b, c) => a + b + c);

    const addOne = add(1);
    const addTwo = addOne(2);

    expect(addOne).toBeTypeOf('function');
    expect(addTwo).toBeTypeOf('function');
    expect(addTwo(3)).toBe(6);
  });

  it('supports an explicit arity for functions with default or rest parameters', () => {
    const fn = (a = 0, ...args) => a + args[0] + args[1];
    const add = curry(fn, 3);

    expect(fn.length).toBe(0);
    expect(add(1)(2)(3)).toBe(6);
    expect(add(1, 2)(3)).toBe(6);
  });

  it('uses the explicit arity instead of the function declared arity', () => {
    const fn = (...args) => args;
    const callback = curry(fn, 2);

    expect(fn.length).toBe(0);
    expect(callback(1)).toBeTypeOf('function');
    expect(callback(1)(2)).toStrictEqual([1, 2]);
  });

  it('forwards additional arguments to the original function', () => {
    const callback = curry((...args) => args, 2);

    expect(callback(1, 2, 3)).toStrictEqual([1, 2, 3]);
    expect(callback(1)(2, 3, 4)).toStrictEqual([1, 2, 3, 4]);
  });

  it('invokes the function on the first call when arity is zero', () => {
    const callback = curry((...args) => args, 0);

    expect(callback()).toStrictEqual([]);
    expect(callback(1, 2)).toStrictEqual([1, 2]);
  });

  it('preserves the this binding from the final invocation', () => {
    const fn = curry(function (a, b) {
      return this.multiplier * (a + b);
    });

    const partial = fn(2);

    expect(partial.call({ multiplier: 3 }, 4)).toBe(18);
    expect(partial.call({ multiplier: 5 }, 4)).toBe(30);
  });

  it('maintains independent partial applications', () => {
    const add = curry((a, b, c) => a + b + c);

    const addOne = add(1);
    const addTen = add(10);

    expect(addOne(2)(3)).toBe(6);
    expect(addTen(2)(3)).toBe(15);
    expect(addOne(4)(5)).toBe(10);
  });

  it('returns the result of the original function', () => {
    const callback = curry((a, b) => ({
      sum: a + b,
      product: a * b
    }));

    expect(callback(3)(4)).toStrictEqual({
      sum: 7,
      product: 12
    });
  });

  it('supports calls with no arguments before reaching the arity', () => {
    const add = curry((a, b) => a + b);

    expect(add()(1)()(2)).toBe(3);
  });

  it('throws a TypeError when the first argument is not a function', () => {
    for (const fn of [undefined, null, 42, 'function', true, {}]) {
      expect(() => curry(fn)).toThrow(new TypeError('Expected a function for first argument'));
    }
  });

  it('throws a TypeError when arity is not an integer', () => {
    for (const arity of [null, '2', true, 2.5, -2.5, NaN, Infinity, -Infinity]) {
      expect(() => curry(() => {}, arity)).toThrow(new TypeError('Expected an integer for second argument'));
    }
  });

  it('throws a RangeError when arity is negative', () => {
    expect(() => curry(() => {}, -1)).toThrow(new RangeError('Expected a non-negative integer for second argument'));
  });
});
