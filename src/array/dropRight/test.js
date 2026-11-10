import { describe, expect, it } from 'vitest';
import { dropRight } from './dropRight.js';

describe('Array/dropRight', () => {
  it('Drops the specified number of elements from the end', () => {
    expect(dropRight([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4]);
    expect(dropRight([1, 2, 3, 4, 5], 1)).toEqual([1, 2, 3, 4]);
    expect(dropRight([1, 2, 3, 4, 5], 3)).toEqual([1, 2]);
  });

  it('Rounds down fractional values', () => {
    expect(dropRight([1, 2, 3, 4, 5], 2.7)).toEqual([1, 2, 3]);
    expect(dropRight([1, 2, 3, 4, 5], 0.5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('Defaults to one element when n is undefined', () => {
    expect(dropRight([1, 2, 3, 4, 5], undefined)).toEqual([1, 2, 3, 4]);
  });

  it('Returns a copy of the array for zero or negative values', () => {
    const array = [1, 2, 3, 4, 5];

    expect(dropRight(array, 0)).toEqual(array);
    expect(dropRight(array, -2)).toEqual(array);
    expect(dropRight(array, -Infinity)).toEqual(array);
    expect(dropRight(array, 0)).not.toBe(array);
  });

  it('Handles empty arrays and values larger than the array length', () => {
    expect(dropRight([], 3)).toEqual([]);
    expect(dropRight([1, 2, 3, 4, 5], 10)).toEqual([]);
    expect(dropRight([1, 2, 3, 4, 5], Number.MAX_VALUE)).toEqual([]);
    expect(dropRight([1, 2, 3, 4, 5], Infinity)).toEqual([]);
  });

  it('Throws if the first argument is not an array', () => {
    expect(() => dropRight({}, 2)).toThrow(new TypeError('Expected an array for first argument'));
    expect(() => dropRight(null, 2)).toThrow(new TypeError('Expected an array for first argument'));
  });

  it('Throws if the second argument is not a number', () => {
    expect(() => dropRight([1, 2, 3], '2')).toThrow(new TypeError('Expected a number for second argument'));
    expect(() => dropRight([1, 2, 3], null)).toThrow(new TypeError('Expected a number for second argument'));
  });

  it('Throws if n is NaN', () => {
    expect(() => dropRight([1, 2, 3], NaN)).toThrow(new RangeError('Expected a valid number for second argument'));
  });
});
