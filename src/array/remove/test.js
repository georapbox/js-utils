import { describe, expect, it } from 'vitest';
import { remove } from './remove.js';

describe('Array/remove', () => {
  it('removes an element at the specified index', () => {
    expect(remove([1, 2, 3, 4, 5], 0)).toEqual([2, 3, 4, 5]);
    expect(remove([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 4, 5]);
    expect(remove([1, 2, 3, 4, 5], 4)).toEqual([1, 2, 3, 4]);
  });

  it('removes multiple elements using their original indices', () => {
    expect(remove([1, 2, 3, 4, 5], 0, 2, 4)).toEqual([2, 4]);
    expect(remove([1, 2, 3, 4, 5], 4, 2, 0)).toEqual([2, 4]);
  });

  it('ignores duplicate indices', () => {
    expect(remove([1, 2, 3, 4], 1, 1, 1)).toEqual([1, 3, 4]);
  });

  it('returns all elements when no indices are provided', () => {
    expect(remove([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('returns an empty array when all indices are removed', () => {
    expect(remove([1, 2, 3], 0, 1, 2)).toEqual([]);
  });

  it('returns an empty array for an empty input array', () => {
    expect(remove([], 0, 1)).toEqual([]);
    expect(remove([])).toEqual([]);
  });

  it('ignores negative, fractional, and out-of-range indices', () => {
    const array = [1, 2, 3];

    expect(remove(array, -1, 1.5, 3, 100)).toEqual([1, 2, 3]);
  });

  it('ignores non-number indices', () => {
    const array = [1, 2, 3];

    expect(remove(array, undefined, null, NaN, '0', '1', {})).toEqual([1, 2, 3]);
  });

  it('treats sparse array holes as undefined', () => {
    // oxlint-disable-next-line no-sparse-arrays
    const array = [1, , 3, 4];

    const result = remove(array, 0);

    expect(result).toEqual([undefined, 3, 4]);
    expect(Object.hasOwn(result, 0)).toBe(true);
  });

  it('can remove an index corresponding to a sparse array hole', () => {
    // oxlint-disable-next-line no-sparse-arrays
    const array = [1, , 3];

    expect(remove(array, 1)).toEqual([1, 3]);
  });

  it('returns a new array without modifying the original', () => {
    const array = [1, 2, 3, 4];

    const result = remove(array, 1, 3);

    expect(result).toEqual([1, 3]);
    expect(result).not.toBe(array);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('throws a TypeError when the first argument is not an array', () => {
    for (const value of [undefined, null, 42, 'hello', {}]) {
      expect(() => remove(value, 0)).toThrow(new TypeError('Expected an array for first argument'));
    }
  });
});
