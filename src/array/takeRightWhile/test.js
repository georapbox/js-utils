import { describe, expect, it, vi } from 'vitest';
import { takeRightWhile } from './takeRightWhile.js';

describe('Array/takeRightWhile', () => {
  it('returns trailing elements until the predicate first returns falsy', () => {
    const result = takeRightWhile([1, 2, 3, 4, 5], (value) => value > 3);

    expect(result).toEqual([4, 5]);
  });

  it('returns an empty array when the last element fails the predicate', () => {
    const result = takeRightWhile([1, 2, 3], (value) => value > 5);

    expect(result).toEqual([]);
  });

  it('returns all elements when every element satisfies the predicate', () => {
    const result = takeRightWhile([1, 2, 3], (value) => value > 0);

    expect(result).toEqual([1, 2, 3]);
  });

  it('returns an empty array for an empty input array', () => {
    const predicate = vi.fn(() => true);

    expect(takeRightWhile([], predicate)).toEqual([]);
    expect(predicate).not.toHaveBeenCalled();
  });

  it('stops invoking the predicate after the first falsy result', () => {
    const predicate = vi.fn((value) => value > 2);

    expect(takeRightWhile([1, 2, 3, 4], predicate)).toEqual([3, 4]);
    expect(predicate).toHaveBeenCalledTimes(3);
  });

  it('invokes the predicate from right to left with the value, index, and original array', () => {
    const array = [10, 20, 30];
    const predicate = vi.fn(() => true);

    takeRightWhile(array, predicate);

    expect(predicate).toHaveBeenNthCalledWith(1, 30, 2, array);
    expect(predicate).toHaveBeenNthCalledWith(2, 20, 1, array);
    expect(predicate).toHaveBeenNthCalledWith(3, 10, 0, array);
  });

  it('supports arrays containing objects', () => {
    const books = [
      { title: 'Book A', read: false },
      { title: 'Book B', read: true },
      { title: 'Book C', read: false },
      { title: 'Book D', read: false }
    ];

    expect(takeRightWhile(books, (book) => !book.read)).toEqual([books[2], books[3]]);
  });

  it('returns a new array without modifying the original', () => {
    const array = [1, 2, 3, 4];

    const result = takeRightWhile(array, (value) => value > 2);

    expect(result).toEqual([3, 4]);
    expect(result).not.toBe(array);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('does not visit or return elements appended during iteration', () => {
    const array = [1, 2, 3];
    const predicate = vi.fn((value) => {
      array.push(value + 3);
      return true;
    });

    const result = takeRightWhile(array, predicate);

    expect(result).toEqual([1, 2, 3]);
    expect(predicate).toHaveBeenCalledTimes(3);
    expect(array).toEqual([1, 2, 3, 6, 5, 4]);
  });

  it('throws a TypeError when the first argument is not an array', () => {
    for (const value of [undefined, null, 42, 'hello', {}]) {
      expect(() => takeRightWhile(value, () => true)).toThrow(new TypeError('Expected an array for first argument'));
    }
  });

  it('throws a TypeError when the predicate is not a function', () => {
    for (const predicate of [undefined, null, 42, 'hello', {}]) {
      expect(() => takeRightWhile([1, 2, 3], predicate)).toThrow(
        new TypeError('Expected a function for second argument')
      );
    }
  });
});
