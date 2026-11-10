import { describe, expect, it, vi } from 'vitest';
import { flip } from './flip.js';

describe('Function/flip', () => {
  it('reverses the order of arguments', () => {
    const fn = (...args) => args;
    const flipped = flip(fn);

    expect(flipped(1, 2, 3, 4)).toStrictEqual([4, 3, 2, 1]);
    expect(flipped('a', 'b', 'c')).toStrictEqual(['c', 'b', 'a']);
  });

  it('handles zero or one argument', () => {
    const flipped = flip((...args) => args);

    expect(flipped()).toStrictEqual([]);
    expect(flipped(1)).toStrictEqual([1]);
  });

  it('reverses all arguments regardless of the original function arity', () => {
    const fn = (a, b) => [a, b];
    const flipped = flip(fn);

    expect(flipped(1, 2, 3)).toStrictEqual([3, 2]);
    expect(flipped(1, 2, 3, 4)).toStrictEqual([4, 3]);
  });

  it('preserves the this binding', () => {
    const object = {
      prefix: 'Result',
      callback: flip(function (a, b) {
        return `${this.prefix}: ${a}, ${b}`;
      })
    };

    expect(object.callback('first', 'second')).toBe('Result: second, first');
    expect(object.callback.call({ prefix: 'Value' }, 1, 2)).toBe('Value: 2, 1');
  });

  it('returns the result of the original function', () => {
    const subtract = (a, b) => a - b;
    const flipped = flip(subtract);

    expect(flipped(10, 3)).toBe(-7);
    expect(flipped(3, 10)).toBe(7);
  });

  it('does not modify the original function or subsequent calls', () => {
    const fn = (...args) => args;
    const flipped = flip(fn);

    expect(flipped(1, 2, 3)).toStrictEqual([3, 2, 1]);
    expect(flipped(4, 5, 6)).toStrictEqual([6, 5, 4]);
    expect(fn(1, 2, 3)).toStrictEqual([1, 2, 3]);
  });

  it('invokes the original function exactly once per call', () => {
    const fn = vi.fn((...args) => args);
    const flipped = flip(fn);

    expect(flipped(1, 2, 3)).toStrictEqual([3, 2, 1]);
    expect(fn).toHaveBeenCalledExactlyOnceWith(3, 2, 1);
  });

  it('throws a TypeError when the argument is not a function', () => {
    for (const fn of [undefined, null, 42, 'function', true, {}]) {
      expect(() => flip(fn)).toThrow(new TypeError('Expected a function for first argument'));
    }
  });
});
