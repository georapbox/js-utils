import { describe, expect, it, vi } from 'vitest';
import { shuffle } from './shuffle.js';

describe('Array/shuffle', () => {
  it('returns an array containing the same elements', () => {
    const array = [1, 2, 2, 3, 4];

    const result = shuffle(array);

    expect(result).toHaveLength(array.length);
    expect(result.toSorted()).toEqual(array.toSorted());
  });

  it('shuffles elements using Fisher-Yates', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValueOnce(0).mockReturnValueOnce(0.5).mockReturnValueOnce(0);

    try {
      expect(shuffle(['A', 'B', 'C', 'D'])).toEqual(['C', 'D', 'B', 'A']);
      expect(random).toHaveBeenCalledTimes(3);
    } finally {
      random.mockRestore();
    }
  });

  it('can return the original order', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.999);

    try {
      expect(shuffle([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    } finally {
      random.mockRestore();
    }
  });

  it('returns an empty array for an empty input array', () => {
    const random = vi.spyOn(Math, 'random');

    try {
      expect(shuffle([])).toEqual([]);
      expect(random).not.toHaveBeenCalled();
    } finally {
      random.mockRestore();
    }
  });

  it('returns a single-element array unchanged', () => {
    const random = vi.spyOn(Math, 'random');

    try {
      expect(shuffle(['A'])).toEqual(['A']);
      expect(random).not.toHaveBeenCalled();
    } finally {
      random.mockRestore();
    }
  });

  it('preserves object references', () => {
    const first = { id: 1 };
    const second = { id: 2 };
    const third = { id: 3 };

    const array = [first, second, third];
    const result = shuffle(array);

    expect(result).toHaveLength(3);
    expect(result).toContain(first);
    expect(result).toContain(second);
    expect(result).toContain(third);
  });

  it('treats sparse array holes as undefined', () => {
    // oxlint-disable-next-line no-sparse-arrays
    const array = [1, , 3];
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.999);

    try {
      const result = shuffle(array);

      expect(result).toEqual([1, undefined, 3]);
      expect(Object.hasOwn(result, 1)).toBe(true);
    } finally {
      random.mockRestore();
    }
  });

  it('returns a new array without modifying the original', () => {
    const array = [1, 2, 3, 4];
    const random = vi.spyOn(Math, 'random').mockReturnValue(0);

    try {
      const result = shuffle(array);

      expect(result).toEqual([2, 3, 4, 1]);
      expect(result).not.toBe(array);
      expect(array).toEqual([1, 2, 3, 4]);
    } finally {
      random.mockRestore();
    }
  });

  it('throws a TypeError when the argument is not an array', () => {
    for (const value of [undefined, null, 42, 'hello', {}]) {
      expect(() => shuffle(value)).toThrow(new TypeError('Expected an array for first argument'));
    }
  });
});
