import { describe, expect, it } from 'vitest';
import { take } from './take.js';

describe('Array/take', () => {
  it('Takes the specified number of items from the beginning', () => {
    expect(take([1, 2, 3, 4, 5])).toEqual([1]);
    expect(take([1, 2, 3, 4, 5], 1)).toEqual([1]);
    expect(take([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
  });

  it('Rounds down fractional values', () => {
    expect(take([1, 2, 3, 4, 5], 2.7)).toEqual([1, 2]);
    expect(take([1, 2, 3, 4, 5], 0.5)).toEqual([]);
  });

  it('Defaults to one item when n is undefined', () => {
    expect(take([1, 2, 3, 4, 5], undefined)).toEqual([1]);
  });

  it('Returns an empty array for zero or negative values', () => {
    expect(take([1, 2, 3, 4, 5], 0)).toEqual([]);
    expect(take([1, 2, 3, 4, 5], -2)).toEqual([]);
    expect(take([1, 2, 3, 4, 5], -Infinity)).toEqual([]);
  });

  it('Handles empty arrays and values larger than the array length', () => {
    expect(take([], 3)).toEqual([]);
    expect(take([1, 2, 3, 4, 5], 10)).toEqual([1, 2, 3, 4, 5]);
    expect(take([1, 2, 3, 4, 5], Number.MAX_VALUE)).toEqual([1, 2, 3, 4, 5]);
    expect(take([1, 2, 3, 4, 5], Infinity)).toEqual([1, 2, 3, 4, 5]);
  });

  it('Throws if the first argument is not an array', () => {
    expect(() => take({}, 2)).toThrow(new TypeError('Expected an array for first argument'));
    expect(() => take(null, 2)).toThrow(new TypeError('Expected an array for first argument'));
  });

  it('Throws if the second argument is not a number', () => {
    expect(() => take([1, 2, 3], '2')).toThrow(new TypeError('Expected a number for second argument'));
    expect(() => take([1, 2, 3], null)).toThrow(new TypeError('Expected a number for second argument'));
  });

  it('Throws if n is NaN', () => {
    expect(() => take([1, 2, 3], NaN)).toThrow(new RangeError('Expected a valid number for second argument'));
  });
});
