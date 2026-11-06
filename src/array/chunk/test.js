import { describe, expect, it } from 'vitest';
import { chunk } from './chunk.js';

describe('Array/chunk', () => {
  it('Splits an array into chunks of the specified size', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4]
    ]);

    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);

    expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);

    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  it('Rounds down fractional chunk sizes', () => {
    expect(chunk([1, 2, 3, 4], 2.7)).toEqual([
      [1, 2],
      [3, 4]
    ]);
  });

  it('Handles empty arrays and chunk sizes larger than the array length', () => {
    expect(chunk([], 2)).toEqual([]);
    expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]]);
    expect(chunk([1, 2, 3], Number.MAX_SAFE_INTEGER + 1)).toEqual([[1, 2, 3]]);
    expect(chunk([1, 2, 3], Number.MAX_VALUE)).toEqual([[1, 2, 3]]);
  });

  it('Throws if the first argument is not an array', () => {
    expect(() => chunk({}, 2)).toThrow(new TypeError('Expected an array for first argument'));
    expect(() => chunk(null, 2)).toThrow(new TypeError('Expected an array for first argument'));
  });

  it('Throws if the second argument is not a number', () => {
    expect(() => chunk([1, 2, 3], '2')).toThrow(new TypeError('Expected a number for second argument'));
    expect(() => chunk([1, 2, 3], undefined)).toThrow(new TypeError('Expected a number for second argument'));
  });

  it.each([0, 0.5, -1, NaN, Infinity, -Infinity])('Throws for invalid chunk size %s', (size) => {
    expect(() => chunk([1, 2, 3], size)).toThrow(
      new RangeError('Expected a positive finite number for second argument')
    );
  });
});
