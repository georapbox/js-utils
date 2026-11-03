import { describe, expect, it } from 'vitest';
import { drop } from './drop.js';

describe('Array/drop', () => {
  it('Drops the specified number of elements from the beginning', () => {
    expect(drop([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
    expect(drop([1, 2, 3, 4, 5], 1)).toEqual([2, 3, 4, 5]);
    expect(drop([1, 2, 3, 4, 5], 3)).toEqual([4, 5]);
  });

  it('Rounds down fractional values', () => {
    expect(drop([1, 2, 3, 4, 5], 2.7)).toEqual([3, 4, 5]);
    expect(drop([1, 2, 3, 4, 5], 0.5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('Defaults to one element when n is undefined', () => {
    expect(drop([1, 2, 3, 4, 5], undefined)).toEqual([2, 3, 4, 5]);
  });

  it('Returns a copy of the array for zero or negative values', () => {
    const array = [1, 2, 3, 4, 5];

    expect(drop(array, 0)).toEqual(array);
    expect(drop(array, -2)).toEqual(array);
    expect(drop(array, -Infinity)).toEqual(array);
    expect(drop(array, 0)).not.toBe(array);
  });

  it('Handles empty arrays and values larger than the array length', () => {
    expect(drop([], 3)).toEqual([]);
    expect(drop([1, 2, 3, 4, 5], 10)).toEqual([]);
    expect(drop([1, 2, 3, 4, 5], Number.MAX_VALUE)).toEqual([]);
    expect(drop([1, 2, 3, 4, 5], Infinity)).toEqual([]);
  });

  it('Throws if the first argument is not an array', () => {
    expect(() => drop({}, 2)).toThrow(new TypeError('Expected an array for first argument'));
    expect(() => drop(null, 2)).toThrow(new TypeError('Expected an array for first argument'));
  });

  it('Throws if the second argument is not a number', () => {
    expect(() => drop([1, 2, 3], '2')).toThrow(new TypeError('Expected a number for second argument'));
    expect(() => drop([1, 2, 3], null)).toThrow(new TypeError('Expected a number for second argument'));
  });

  it('Throws if n is NaN', () => {
    expect(() => drop([1, 2, 3], NaN)).toThrow(new RangeError('Expected a valid number for second argument'));
  });
});
