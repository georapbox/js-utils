import { describe, expect, it, vi } from 'vitest';
import { partition } from './partition.js';

describe('Array/partition', () => {
  it('splits elements into truthy and falsy groups based on the predicate', () => {
    const result = partition([1, 3, 5, -4, 6, -2], (value) => value > 0);

    expect(result).toEqual([
      [1, 3, 5, 6],
      [-4, -2]
    ]);
  });

  it('preserves the original order of elements within each group', () => {
    const result = partition([3, 2, 5, 4, 1, 6], (value) => value % 2 === 0);

    expect(result).toEqual([
      [2, 4, 6],
      [3, 5, 1]
    ]);
  });

  it('supports arrays containing objects', () => {
    const users = [
      { name: 'John', isAdmin: true },
      { name: 'George', isAdmin: false },
      { name: 'Alice', isAdmin: true }
    ];

    expect(partition(users, (user) => user.isAdmin)).toEqual([[users[0], users[2]], [users[1]]]);
  });

  it('uses an identity predicate when none is provided', () => {
    const array = [0, 1, false, 2, null, 3, undefined, '', NaN];

    expect(partition(array)).toEqual([
      [1, 2, 3],
      [0, false, null, undefined, '', NaN]
    ]);
  });

  it('uses the default predicate when explicitly passed undefined', () => {
    expect(partition([0, 1, 2], undefined)).toEqual([[1, 2], [0]]);
  });

  it('returns an empty group when all elements satisfy the predicate', () => {
    expect(partition([1, 2, 3], (value) => value > 0)).toEqual([[1, 2, 3], []]);
  });

  it('returns an empty group when no elements satisfy the predicate', () => {
    expect(partition([1, 2, 3], (value) => value > 5)).toEqual([[], [1, 2, 3]]);
  });

  it('returns two empty groups for an empty input array', () => {
    const predicate = vi.fn(() => true);

    expect(partition([], predicate)).toEqual([[], []]);
    expect(predicate).not.toHaveBeenCalled();
  });

  it('invokes the predicate with the value, index, and original array', () => {
    const array = [10, 20, 30];
    const predicate = vi.fn(() => true);

    partition(array, predicate);

    expect(predicate).toHaveBeenNthCalledWith(1, 10, 0, array);
    expect(predicate).toHaveBeenNthCalledWith(2, 20, 1, array);
    expect(predicate).toHaveBeenNthCalledWith(3, 30, 2, array);
    expect(predicate).toHaveBeenCalledTimes(3);
  });

  it('treats sparse array holes as undefined', () => {
    // oxlint-disable-next-line no-sparse-arrays
    const array = [1, , 0, 2];

    const result = partition(array);

    expect(result).toEqual([
      [1, 2],
      [undefined, 0]
    ]);
    expect(Object.hasOwn(result[1], 0)).toBe(true);
  });

  it('does not process elements appended during iteration', () => {
    const array = [1, 2, 3];
    const predicate = vi.fn((value) => {
      array.push(value + 3);
      return value % 2 === 0;
    });

    const result = partition(array, predicate);

    expect(result).toEqual([[2], [1, 3]]);
    expect(predicate).toHaveBeenCalledTimes(3);
    expect(array).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('returns new arrays without modifying the original', () => {
    const array = [1, 2, 3, 4];

    const result = partition(array, (value) => value % 2 === 0);

    expect(result).toEqual([
      [2, 4],
      [1, 3]
    ]);
    expect(result).not.toBe(array);
    expect(result[0]).not.toBe(array);
    expect(result[1]).not.toBe(array);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('throws a TypeError when the first argument is not an array', () => {
    for (const value of [undefined, null, 42, 'hello', {}]) {
      expect(() => partition(value, () => true)).toThrow(new TypeError('Expected an array for first argument'));
    }
  });

  it('throws a TypeError when the predicate is not a function', () => {
    for (const predicate of [null, false, 0, 'hello', {}]) {
      expect(() => partition([1, 2, 3], predicate)).toThrow(new TypeError('Expected a function for second argument'));
    }
  });
});
