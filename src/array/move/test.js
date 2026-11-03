import { describe, expect, it } from 'vitest';
import { move } from './move.js';

describe('Array/move', () => {
  it('moves an element forward to a higher index', () => {
    expect(move(['A', 'B', 'C', 'D'], 0, 2)).toEqual(['B', 'C', 'A', 'D']);
  });

  it('moves an element backward to a lower index', () => {
    expect(move(['A', 'B', 'C', 'D'], 3, 1)).toEqual(['A', 'D', 'B', 'C']);
  });

  it('supports negative source indices', () => {
    expect(move(['A', 'B', 'C', 'D'], -1, 1)).toEqual(['A', 'D', 'B', 'C']);
  });

  it('supports negative destination indices', () => {
    expect(move(['A', 'B', 'C', 'D'], 0, -1)).toEqual(['B', 'C', 'D', 'A']);
  });

  it('resolves both negative indices relative to the original array length', () => {
    expect(move(['A', 'B', 'C', 'D', 'E'], -1, -3)).toEqual(['A', 'B', 'E', 'C', 'D']);
  });

  it('returns an unchanged array when source and destination are the same', () => {
    expect(move(['A', 'B', 'C'], 1, 1)).toEqual(['A', 'B', 'C']);
    expect(move(['A', 'B', 'C'], -1, 2)).toEqual(['A', 'B', 'C']);
  });

  it('returns an unchanged array when the source index is out of range', () => {
    const array = ['A', 'B', 'C'];

    expect(move(array, 3, 0)).toEqual(array);
    expect(move(array, -4, 0)).toEqual(array);
    expect(move(array, 100, 1)).toEqual(array);
  });

  it('clamps out-of-range destination indices', () => {
    const array = ['A', 'B', 'C'];

    expect(move(array, 0, 100)).toEqual(['B', 'C', 'A']);
    expect(move(array, 2, -100)).toEqual(['C', 'A', 'B']);
  });

  it('returns an empty array for an empty input array', () => {
    expect(move([], 0, 1)).toEqual([]);
  });

  it('handles single-element arrays', () => {
    expect(move(['A'], 0, 0)).toEqual(['A']);
    expect(move(['A'], 0, 10)).toEqual(['A']);
  });

  it('treats sparse array holes as undefined', () => {
    // oxlint-disable-next-line no-sparse-arrays
    const array = ['A', , 'C'];

    const result = move(array, 0, 2);

    expect(result).toEqual([undefined, 'C', 'A']);
    expect(Object.hasOwn(result, 0)).toBe(true);
  });

  it('can move an element corresponding to a sparse array hole', () => {
    // oxlint-disable-next-line no-sparse-arrays
    const array = ['A', , 'C'];

    expect(move(array, 1, 2)).toEqual(['A', 'C', undefined]);
  });

  it('returns a new array without modifying the original', () => {
    const array = ['A', 'B', 'C', 'D'];

    const result = move(array, 0, 2);

    expect(result).toEqual(['B', 'C', 'A', 'D']);
    expect(result).not.toBe(array);
    expect(array).toEqual(['A', 'B', 'C', 'D']);
  });

  it('returns a new array even when no element is moved', () => {
    const array = ['A', 'B', 'C'];

    expect(move(array, 1, 1)).not.toBe(array);
    expect(move(array, 10, 0)).not.toBe(array);
  });

  it('throws a TypeError when the first argument is not an array', () => {
    for (const value of [undefined, null, 42, 'hello', {}]) {
      expect(() => move(value, 0, 1)).toThrow(new TypeError('Expected an array for first argument'));
    }
  });

  it('throws a TypeError when the source index is not an integer', () => {
    for (const value of [undefined, null, '0', NaN, Infinity, -Infinity, 1.5]) {
      expect(() => move(['A', 'B', 'C'], value, 1)).toThrow(
        new TypeError('Expected integer indices for second and third arguments')
      );
    }
  });

  it('throws a TypeError when the destination index is not an integer', () => {
    for (const value of [undefined, null, '1', NaN, Infinity, -Infinity, 1.5]) {
      expect(() => move(['A', 'B', 'C'], 0, value)).toThrow(
        new TypeError('Expected integer indices for second and third arguments')
      );
    }
  });
});
