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

    expect(() => {
      return intersect(arrA, {});
    }).toThrow(new TypeError('Expected all arguments to be arrays'));

    expect(() => {
      return intersect({}, arrB);
    }).toThrow(new TypeError('Expected all arguments to be arrays'));

    expect(() => {
      return intersect();
    }).toThrow(new TypeError('Expected all arguments to be arrays'));
  });

  it('removes duplicate values while preserving their original order', () => {
    expect(intersect([3, 1, 3, 2, 1], [1, 2, 3])).toEqual([3, 1, 2]);
    expect(intersect([NaN, NaN, 1, 2], [NaN, 2])).toEqual([NaN, 2]);
  });

  it('removes duplicate values when only one array is provided', () => {
    expect(intersect([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  it('returns an empty array when any input array is empty', () => {
    expect(intersect([], [1, 2])).toEqual([]);
    expect(intersect([1, 2], [])).toEqual([]);
    expect(intersect([])).toEqual([]);
  });
});
