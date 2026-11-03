import { describe, expect, it } from 'vitest';
import { zip } from './zip.js';

describe('Array/zip', () => {
  it('groups elements at corresponding indices', () => {
    const result = zip([1, 2, 3], [11, 22, 33], [111, 222, 333]);

    expect(result).toEqual([
      [1, 11, 111],
      [2, 22, 222],
      [3, 33, 333]
    ]);
  });

  it('fills missing elements with undefined when arrays have different lengths', () => {
    const result = zip([1, 2, 3], [11, 22], [111]);

    expect(result).toEqual([
      [1, 11, 111],
      [2, 22, undefined],
      [3, undefined, undefined]
    ]);
  });

  it('handles an empty array alongside a non-empty array', () => {
    expect(zip([], [1, 2])).toEqual([
      [undefined, 1],
      [undefined, 2]
    ]);
  });

  it('wraps each element in an array when only one array is provided', () => {
    expect(zip([1, 2, 3])).toEqual([[1], [2], [3]]);
  });

  it('returns an empty array when no arrays are provided', () => {
    expect(zip()).toEqual([]);
  });

  it('returns an empty array when all input arrays are empty', () => {
    expect(zip([], [], [])).toEqual([]);
    expect(zip([])).toEqual([]);
  });

  it('treats sparse array holes as undefined', () => {
    // oxlint-disable-next-line no-sparse-arrays
    const array = [1, , 3];

    const result = zip(array, [10, 20, 30]);

    expect(result).toEqual([
      [1, 10],
      [undefined, 20],
      [3, 30]
    ]);
    expect(Object.hasOwn(result[1], 0)).toBe(true);
  });

  it('preserves object references', () => {
    const first = { id: 1 };
    const second = { id: 2 };

    const result = zip([first], [second]);

    expect(result).toEqual([[first, second]]);
    expect(result[0][0]).toBe(first);
    expect(result[0][1]).toBe(second);
  });

  it('returns new arrays without modifying the inputs', () => {
    const arrayA = [1, 2, 3];
    const arrayB = [10, 20];

    const result = zip(arrayA, arrayB);

    expect(result).toEqual([
      [1, 10],
      [2, 20],
      [3, undefined]
    ]);
    expect(result).not.toBe(arrayA);
    expect(result).not.toBe(arrayB);
    expect(arrayA).toEqual([1, 2, 3]);
    expect(arrayB).toEqual([10, 20]);
  });

  it('throws a TypeError when any argument is not an array', () => {
    for (const value of [undefined, null, 42, 'hello', {}]) {
      expect(() => zip(value, [1, 2])).toThrow(new TypeError('Expected all arguments to be arrays'));
      expect(() => zip([1, 2], value)).toThrow(new TypeError('Expected all arguments to be arrays'));
    }
  });
});
