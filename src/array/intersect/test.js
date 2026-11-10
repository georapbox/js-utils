import { describe, expect, it } from 'vitest';
import { intersect } from './intersect.js';

describe('Array/intersect', () => {
  it('returns values present in all given arrays', () => {
    expect(intersect([1, 2, 3, 4], [2, 3, 5])).toEqual([2, 3]);
    expect(intersect([1, 2, 3, 4], [2, 3], [3, 4])).toEqual([3]);
  });

  it('returns an empty array when no values are shared', () => {
    expect(intersect([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  it('removes duplicate values while preserving their original order', () => {
    expect(intersect([3, 1, 3, 2, 1], [1, 2, 3])).toEqual([3, 1, 2]);
  });

  it('returns unique values when only one array is provided', () => {
    expect(intersect([3, 1, 3, 2, 1])).toEqual([3, 1, 2]);
  });

  it('returns an empty array when any input array is empty', () => {
    expect(intersect([], [1, 2])).toEqual([]);
    expect(intersect([1, 2], [])).toEqual([]);
    expect(intersect([])).toEqual([]);
  });

  it('uses SameValueZero equality for NaN', () => {
    expect(intersect([NaN, 1, NaN, 2], [2, NaN])).toEqual([NaN, 2]);
  });

  it('treats positive and negative zero as equal', () => {
    expect(intersect([0, -0, 1], [-0, 1])).toEqual([0, 1]);
  });

  it('distinguishes values of different types', () => {
    expect(intersect([1, '2', null, undefined], ['1', 2, null, undefined])).toEqual([null, undefined]);
  });

  it('compares objects by reference', () => {
    const shared = { id: 1 };
    const other = { id: 1 };

    const result = intersect([other, shared, shared], [shared]);

    expect(result).toEqual([shared]);
    expect(result[0]).toBe(shared);
  });

  it('treats sparse array holes as undefined', () => {
    // oxlint-disable-next-line no-sparse-arrays
    const result = intersect([1, , 3], [undefined, 3]);

    expect(result).toEqual([undefined, 3]);
    expect(Object.hasOwn(result, 0)).toBe(true);
    // oxlint-disable-next-line no-sparse-arrays
    expect(intersect([undefined, 3], [, 3])).toEqual([undefined, 3]);
  });

  it('returns a new array without modifying the inputs', () => {
    const arrayA = [3, 1, 2, 3];
    const arrayB = [2, 3];

    const result = intersect(arrayA, arrayB);

    expect(result).toEqual([3, 2]);
    expect(result).not.toBe(arrayA);
    expect(arrayA).toEqual([3, 1, 2, 3]);
    expect(arrayB).toEqual([2, 3]);
  });

  it('throws a TypeError when no arrays are provided', () => {
    expect(() => intersect()).toThrow(new TypeError('Expected all arguments to be arrays'));
  });

  it('throws a TypeError when any argument is not an array', () => {
    for (const value of [undefined, null, 42, 'hello', {}]) {
      expect(() => intersect(value, [1, 2])).toThrow(new TypeError('Expected all arguments to be arrays'));

      expect(() => intersect([1, 2], value)).toThrow(new TypeError('Expected all arguments to be arrays'));
    }
  });
});
