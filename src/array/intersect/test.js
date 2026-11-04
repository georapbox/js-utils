import { describe, expect, it } from 'vitest';
import { intersect } from './intersect.js';

describe('Array/intersect', () => {
  it('creates an array of unique values that are included in all given arrays', () => {
    const arrA = [NaN, 3, 8, 'foo', 'bar'];
    const arrB = [2, 7, 'foo', NaN, 3];
    const arrC = [1, 2, 3, NaN];
    const arrD = [4, 5, 6];
    const arrE = [1, null, 2, NaN, 3, void 0];
    const arrF = ['1', void 0, '2', null, '3', NaN];

    expect(intersect(arrA, arrB)).toEqual([NaN, 3, 'foo']);
    expect(intersect(arrC, arrD)).toEqual([]);
    expect(intersect(arrA, arrB, arrC)).toEqual([NaN, 3]);
    expect(intersect(arrE, arrF)).toEqual([null, NaN, void 0]);
    expect(() => intersect(arrA, {})).toThrow(new TypeError('Expected all arguments to be arrays'));
    expect(() => intersect({}, arrB)).toThrow(new TypeError('Expected all arguments to be arrays'));
    expect(() => intersect()).toThrow(new TypeError('Expected all arguments to be arrays'));
  });

  it('removes duplicate values while preserving their original order', () => {
    expect(intersect([3, 1, 3, 2, 1], [1, 2, 3])).toEqual([3, 1, 2]);
    expect(intersect([NaN, NaN, 1, 2], [NaN, 2])).toEqual([NaN, 2]);
  });

  it('removes duplicate values from one array and returns a new array', () => {
    const input = [1, 1, 2, 2, 3];
    const result = intersect(input);

    expect(result).toEqual([1, 2, 3]);
    expect(result).not.toBe(input);
  });

  it('returns an empty array when any input array is empty', () => {
    expect(intersect([], [1, 1], [1])).toEqual([]);
    expect(intersect([1, 2], [])).toEqual([]);
    expect(intersect([])).toEqual([]);
  });

  it('preserves object identity and the first array order', () => {
    const sharedObject = {};
    const otherObject = {};
    const result = intersect([sharedObject, otherObject, sharedObject], [otherObject, sharedObject]);

    expect(result).toHaveLength(2);
    expect(result[0]).toBe(sharedObject);
    expect(result[1]).toBe(otherObject);
    expect(intersect([otherObject], [sharedObject])).toEqual([]);
  });

  it('deduplicates signed zero using Set semantics', () => {
    const result = intersect([-0, 0], [-0, 0]);

    expect(result).toHaveLength(1);
    expect(Object.is(result[0], 0)).toBe(true);
    expect(Object.is(result[0], -0)).toBe(false);
  });

  it('handles duplicate values in a sparse first array', () => {
    const sparseFirstArray = Array(3);
    sparseFirstArray[1] = 1;
    sparseFirstArray[2] = 1;
    const result = intersect(sparseFirstArray, [undefined, 1], [1, undefined]);

    expect(result).toEqual([1]);
    expect(0 in result).toBe(true);
  });
});
