import { describe, expect, it, vi } from 'vitest';
import { randomRange } from './randomRange.js';

describe('Number/randomRange', () => {
  it('returns the minimum bound when Math.random returns 0', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0);

    try {
      expect(randomRange(3, 8)).toBe(3);
    } finally {
      random.mockRestore();
    }
  });

  it('returns a value within the range', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.5);

    try {
      expect(randomRange(3, 8)).toBe(5.5);
    } finally {
      random.mockRestore();
    }
  });

  it('returns a value below the maximum bound under normal conditions', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.9);

    try {
      const result = randomRange(0, 10);

      expect(result).toBe(9);
      expect(result).toBeLessThan(10);
    } finally {
      random.mockRestore();
    }
  });

  it('supports reversed bounds', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.5);

    try {
      expect(randomRange(8, 3)).toBe(5.5);
    } finally {
      random.mockRestore();
    }
  });

  it('supports negative and mixed-sign ranges', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.5);

    try {
      expect(randomRange(-10, -5)).toBe(-7.5);
      expect(randomRange(-5, 5)).toBe(0);
    } finally {
      random.mockRestore();
    }
  });

  it('supports fractional bounds', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.5);

    try {
      expect(randomRange(0.5, 2.5)).toBe(1.5);
      expect(randomRange(-1.5, 1.5)).toBe(0);
    } finally {
      random.mockRestore();
    }
  });

  it('may return the maximum bound due to floating-point rounding', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.9999999999999999);

    try {
      expect(randomRange(1, 2)).toBe(2);
    } finally {
      random.mockRestore();
    }
  });

  it('throws a RangeError when min and max are equal', () => {
    for (const value of [-5, 0, 5, 1.5]) {
      expect(() => randomRange(value, value)).toThrow(new RangeError('min and max cannot be equal'));
    }
  });

  it('throws a TypeError when min is not a finite number', () => {
    for (const value of [undefined, null, '3', true, 3n, {}, NaN, Infinity, -Infinity]) {
      expect(() => randomRange(value, 8)).toThrow(new TypeError('Expected finite numbers for both arguments'));
    }
  });

  it('throws a TypeError when max is not a finite number', () => {
    for (const value of [undefined, null, '8', false, 8n, {}, NaN, Infinity, -Infinity]) {
      expect(() => randomRange(3, value)).toThrow(new TypeError('Expected finite numbers for both arguments'));
    }
  });
});
