import { describe, expect, it } from 'vitest';
import { takeRight } from './takeRight.js';

describe('Array/takeRight', () => {
  it('Takes the specified number of items from the end', () => {
    expect(takeRight([1, 2, 3, 4, 5])).toEqual([5]);
    expect(takeRight([1, 2, 3, 4, 5], 1)).toEqual([5]);
    expect(takeRight([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
  });

  it('Rounds down fractional values', () => {
    expect(takeRight([1, 2, 3, 4, 5], 2.7)).toEqual([4, 5]);
    expect(takeRight([1, 2, 3, 4, 5], 0.5)).toEqual([]);
  });

  it('Defaults to one item when n is undefined', () => {
    expect(takeRight([1, 2, 3, 4, 5], undefined)).toEqual([5]);
  });

  it('Returns an empty array for zero or negative values', () => {
    expect(takeRight([1, 2, 3, 4, 5], 0)).toEqual([]);
    expect(takeRight([1, 2, 3, 4, 5], -2)).toEqual([]);
    expect(takeRight([1, 2, 3, 4, 5], -Infinity)).toEqual([]);
  });

  it('Handles empty arrays and values larger than the array length', () => {
    expect(takeRight([], 3)).toEqual([]);
    expect(takeRight([1, 2, 3, 4, 5], 10)).toEqual([1, 2, 3, 4, 5]);
    expect(takeRight([1, 2, 3, 4, 5], Number.MAX_VALUE)).toEqual([1, 2, 3, 4, 5]);
    expect(takeRight([1, 2, 3, 4, 5], Infinity)).toEqual([1, 2, 3, 4, 5]);
  });

  it('Throws if the first argument is not an array', () => {
    expect(() => takeRight({}, 2)).toThrow(new TypeError('Expected an array for first argument'));
    expect(() => takeRight(null, 2)).toThrow(new TypeError('Expected an array for first argument'));
  });

  it('Throws if the second argument is not a number', () => {
    expect(() => takeRight([1, 2, 3], '2')).toThrow(new TypeError('Expected a number for second argument'));
    expect(() => takeRight([1, 2, 3], null)).toThrow(new TypeError('Expected a number for second argument'));
  });

  it('Throws if n is NaN', () => {
    expect(() => takeRight([1, 2, 3], NaN)).toThrow(new RangeError('Expected a valid number for second argument'));
  });
});
