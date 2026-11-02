import { describe, expect, it } from 'vitest';
import { isIterable } from './isIterable.js';

describe('is/isIterable', () => {
  function* generatorFunc() {
    yield 'foo';
  }

  const noop = () => void 0;

  const customIterable = {
    *[Symbol.iterator]() {
      yield 1;
    }
  };

  it('checks if a value is iterable)', () => {
    expect(isIterable([])).toBe(true);
    expect(isIterable(new Map())).toBe(true);
    expect(isIterable(new Set())).toBe(true);
    expect(isIterable('')).toBe(true);
    expect(isIterable(generatorFunc())).toBe(true);
    expect(isIterable(customIterable)).toBe(true);

    // non iterables
    expect(isIterable(noop)).toBe(false);
    expect(isIterable({})).toBe(false);
    expect(isIterable(null)).toBe(false);
    expect(isIterable(undefined)).toBe(false);
    expect(isIterable(0)).toBe(false);
    expect(isIterable(NaN)).toBe(false);
    expect(isIterable(Infinity)).toBe(false);
    expect(isIterable(true)).toBe(false);
    expect(isIterable(Symbol('foo'))).toBe(false);
  });
});
