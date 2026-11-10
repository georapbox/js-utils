import { describe, expect, it, vi } from 'vitest';
import { randomInt } from './randomInt.js';

describe('Number/randomInt', () => {
  it('returns the minimum bound when Math.random returns 0', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0);

    try {
      expect(randomInt(3, 8)).toBe(3);
    } finally {
      random.mockRestore();
    }
  });

  it('returns the maximum bound when Math.random approaches 1', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.999999);

    try {
      expect(randomInt(3, 8)).toBe(8);
    } finally {
      random.mockRestore();
    }
  });

  it('returns an integer within the inclusive range', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.5);

    try {
      const result = randomInt(3, 8);

      expect(result).toBe(6);
      expect(Number.isInteger(result)).toBe(true);
    } finally {
      random.mockRestore();
    }
  });

  it('supports reversed bounds', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0);

    try {
      expect(randomInt(8, 3)).toBe(3);
    } finally {
      random.mockRestore();
    }
  });

  it('supports negative and mixed-sign ranges', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.5);

    try {
      expect(randomInt(-10, -5)).toBe(-7);
      expect(randomInt(-5, 5)).toBe(0);
    } finally {
      random.mockRestore();
    }
  });

  it('returns the bound when min and max are equal', () => {
    expect(randomInt(5, 5)).toBe(5);
    expect(randomInt(-5, -5)).toBe(-5);
    expect(randomInt(0, 0)).toBe(0);
  });

  it('handles the maximum permitted range size', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0);

    try {
      expect(randomInt(0, Number.MAX_SAFE_INTEGER - 1)).toBe(0);
    } finally {
      random.mockRestore();
    }
  });

  it('clamps the result when floating-point rounding exceeds the maximum bound', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.9999999999999999);

    try {
      expect(randomInt(0, Number.MAX_SAFE_INTEGER - 1)).toBe(Number.MAX_SAFE_INTEGER - 1);
    } finally {
      random.mockRestore();
    }
  });

  it('throws a TypeError when min is not a safe integer', () => {
    for (const value of [
      undefined,
      null,
      '3',
      true,
      3n,
      {},
      NaN,
      Infinity,
      -Infinity,
      1.5,
      Number.MAX_SAFE_INTEGER + 1
    ]) {
      expect(() => randomInt(value, 8)).toThrow(new TypeError('Expected safe integers for both arguments'));
    }
  });

  it('throws a TypeError when max is not a safe integer', () => {
    for (const value of [
      undefined,
      null,
      '8',
      false,
      8n,
      {},
      NaN,
      Infinity,
      -Infinity,
      1.5,
      Number.MAX_SAFE_INTEGER + 1
    ]) {
      expect(() => randomInt(3, value)).toThrow(new TypeError('Expected safe integers for both arguments'));
    }
  });

  it('throws a RangeError when the range size exceeds the maximum safe integer', () => {
    expect(() => randomInt(0, Number.MAX_SAFE_INTEGER)).toThrow(
      new RangeError('Range size exceeds the maximum safe integer')
    );

    expect(() => randomInt(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toThrow(
      new RangeError('Range size exceeds the maximum safe integer')
    );
  });
});
