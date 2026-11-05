import { describe, expect, it, vi } from 'vitest';
import { partialRight } from './partialRight.js';

describe('Function/partialRight', () => {
  it('appends a single partial argument', () => {
    const greet = (greeting, name) => `${greeting}, ${name}!`;
    const greetJohn = partialRight(greet, 'John');

    expect(greetJohn('Hello')).toBe('Hello, John!');
  });

  it('appends multiple partial arguments', () => {
    const greet = (greeting, firstName, lastName) => `${greeting}, ${firstName} ${lastName}!`;

    const greetJohnDoe = partialRight(greet, 'John', 'Doe');

    expect(greetJohnDoe('Hello')).toBe('Hello, John Doe!');
  });

  it('forwards all arguments when no partial arguments are provided', () => {
    const fn = (...args) => args;
    const callback = partialRight(fn);

    expect(callback(1, 2, 3)).toStrictEqual([1, 2, 3]);
    expect(callback()).toStrictEqual([]);
  });

  it('preserves the order of subsequent and partial arguments', () => {
    const fn = (...args) => args;
    const callback = partialRight(fn, 'c', 'd');

    expect(callback('a', 'b')).toStrictEqual(['a', 'b', 'c', 'd']);
  });

  it('forwards additional arguments to the original function', () => {
    const fn = (...args) => args;
    const callback = partialRight(fn, 4, 5);

    expect(callback(1, 2, 3)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it('preserves the this binding', () => {
    const object = {
      multiplier: 10,
      callback: partialRight(function (a, b) {
        return (a + b) * this.multiplier;
      }, 3)
    };

    expect(object.callback(2)).toBe(50);
    expect(object.callback.call({ multiplier: 5 }, 2)).toBe(25);
  });

  it('returns the result of the original function', () => {
    const callback = partialRight(
      (a, b) => ({
        sum: a + b,
        product: a * b
      }),
      4
    );

    expect(callback(3)).toStrictEqual({
      sum: 7,
      product: 12
    });
  });

  it('supports independent partially applied functions', () => {
    const greet = (greeting, name) => `${greeting}, ${name}!`;

    const greetJohn = partialRight(greet, 'John');
    const greetJane = partialRight(greet, 'Jane');

    expect(greetJohn('Hello')).toBe('Hello, John!');
    expect(greetJane('Hello')).toBe('Hello, Jane!');
    expect(greetJohn('Hi')).toBe('Hi, John!');
  });

  it('supports nested partial application', () => {
    const fn = (...args) => args;
    const callback = partialRight(partialRight(fn, 3), 4);

    expect(callback(1, 2)).toStrictEqual([1, 2, 4, 3]);
  });

  it('invokes the original function exactly once per call', () => {
    const fn = vi.fn((...args) => args);
    const callback = partialRight(fn, 3, 4);

    expect(callback(1, 2)).toStrictEqual([1, 2, 3, 4]);
    expect(fn).toHaveBeenCalledExactlyOnceWith(1, 2, 3, 4);
  });

  it('supports functions that return undefined', () => {
    const callback = partialRight(() => undefined, 1, 2);

    expect(callback()).toBeUndefined();
  });

  it('throws a TypeError when the first argument is not a function', () => {
    for (const fn of [undefined, null, 42, 'function', true, {}]) {
      expect(() => partialRight(fn)).toThrow(new TypeError('Expected a function for first argument'));
    }
  });
});
