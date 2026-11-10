import { describe, expect, it, vi } from 'vitest';
import { dropWhile } from './dropWhile.js';

describe('Array/dropWhile', () => {
  it('drops leading elements until the predicate first returns falsy', () => {
    const result = dropWhile([1, 2, 3, 4, 5], (value) => value < 4);

    expect(result).toEqual([4, 5]);
  });

  it('returns all elements when the first element fails the predicate', () => {
    const result = dropWhile([1, 2, 3], (value) => value > 5);

    expect(result).toEqual([1, 2, 3]);
  });

  it('returns an empty array when every element satisfies the predicate', () => {
    const result = dropWhile([1, 2, 3], (value) => value > 0);

    expect(result).toEqual([]);
  });

  it('returns an empty array for an empty input array', () => {
    const predicate = vi.fn(() => true);

    expect(dropWhile([], predicate)).toEqual([]);
    expect(predicate).not.toHaveBeenCalled();
  });

  it('stops invoking the predicate after the first falsy result', () => {
    const predicate = vi.fn((value) => value < 3);

    expect(dropWhile([1, 2, 3, 4], predicate)).toEqual([3, 4]);
    expect(predicate).toHaveBeenCalledTimes(3);
  });

  it('invokes the predicate from left to right with the value, index, and original array', () => {
    const array = [10, 20, 30];
    const predicate = vi.fn(() => true);

    dropWhile(array, predicate);

    expect(predicate).toHaveBeenNthCalledWith(1, 10, 0, array);
    expect(predicate).toHaveBeenNthCalledWith(2, 20, 1, array);
    expect(predicate).toHaveBeenNthCalledWith(3, 30, 2, array);
  });

  it('supports arrays containing objects', () => {
    const books = [
      { title: 'Book A', read: false },
      { title: 'Book B', read: false },
      { title: 'Book C', read: true },
      { title: 'Book D', read: false }
    ];

    expect(dropWhile(books, (book) => !book.read)).toEqual([books[2], books[3]]);
  });

  it('returns a new array without modifying the original', () => {
    const array = [1, 2, 3, 4];

    const result = dropWhile(array, (value) => value < 3);

    expect(result).toEqual([3, 4]);
    expect(result).not.toBe(array);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('does not visit or return elements appended during iteration', () => {
    const array = [1, 2, 3];
    const predicate = vi.fn((value) => {
      array.push(value + 3);
      return value < 2;
    });

    const result = dropWhile(array, predicate);

    expect(result).toEqual([2, 3]);
    expect(predicate).toHaveBeenCalledTimes(2);
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });

  it('throws a TypeError when the first argument is not an array', () => {
    for (const value of [undefined, null, 42, 'hello', {}]) {
      expect(() => dropWhile(value, () => true)).toThrow(new TypeError('Expected an array for first argument'));
    }
  });

  it('throws a TypeError when the predicate is not a function', () => {
    for (const predicate of [undefined, null, 42, 'hello', {}]) {
      expect(() => dropWhile([1, 2, 3], predicate)).toThrow(new TypeError('Expected a function for second argument'));
    }
  });
});
