import { describe, expect, it } from 'vitest';
import { diff } from './diff.js';

describe('Array/diff', () => {
  it('returns values from the first array that are not in the second', () => {
    expect(diff([1, 2, 3, 4, 5], [2, 4])).toEqual([1, 3, 5]);
  });

  it('preserves duplicate values and their original order', () => {
    expect(diff([3, 1, 3, 2, 1, 4], [2, 4])).toEqual([3, 1, 3, 1]);
  });

  it('returns an empty array when all values are excluded', () => {
    expect(diff([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  it('returns all values when the exclusion array is empty', () => {
    expect(diff([1, 2, 2, 3], [])).toEqual([1, 2, 2, 3]);
  });

  it('returns an empty array when the first array is empty', () => {
    expect(diff([], [1, 2, 3])).toEqual([]);
    expect(diff([], [])).toEqual([]);
  });

  it('uses SameValueZero equality for NaN', () => {
    expect(diff([1, NaN, 2, NaN], [NaN])).toEqual([1, 2]);
    expect(diff([1, NaN, 2], [])).toEqual([1, NaN, 2]);
  });

  it('treats positive and negative zero as equal', () => {
    expect(diff([0, -0, 1], [0])).toEqual([1]);
    expect(diff([0, -0, 1], [-0])).toEqual([1]);
  });

  it('compares objects by reference', () => {
    const shared = { id: 1 };
    const other = { id: 1 };
    const array = [shared, other, shared];

    const result = diff(array, [shared]);

    expect(result).toEqual([other]);
    expect(result[0]).toBe(other);
  });

  it('treats sparse array holes as undefined', () => {
    // oxlint-disable-next-line no-sparse-arrays
    const array = [1, , 3];

    expect(diff(array, [])).toEqual([1, undefined, 3]);
    expect(diff(array, [undefined])).toEqual([1, 3]);
  });

  it('returns a new array without modifying the inputs', () => {
    const arrayA = [1, 2, 3, 4];
    const arrayB = [2, 4];

    const result = diff(arrayA, arrayB);

    expect(result).toEqual([1, 3]);
    expect(result).not.toBe(arrayA);
    expect(arrayA).toEqual([1, 2, 3, 4]);
    expect(arrayB).toEqual([2, 4]);
  });

  it('throws a TypeError when the first argument is not an array', () => {
    for (const value of [undefined, null, 42, 'hello', {}]) {
      expect(() => diff(value, [])).toThrow(new TypeError('Expected both arguments to be arrays'));
    }
  });

  it('throws a TypeError when the second argument is not an array', () => {
    for (const value of [undefined, null, 42, 'hello', {}]) {
      expect(() => diff([], value)).toThrow(new TypeError('Expected both arguments to be arrays'));
    }
  });
});
