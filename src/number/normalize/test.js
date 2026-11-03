import { describe, expect, it } from 'vitest';
import { normalize } from './normalize.js';

describe('Number/normalize', () => {
  it('normalizes values within a range', () => {
    expect(normalize(25, 0, 100)).toBe(0.25);
    expect(normalize(50, 0, 100)).toBe(0.5);
    expect(normalize(23, 5, 33)).toBeCloseTo(0.6428571428571429);
  });

  it('returns 0 when the value equals start', () => {
    expect(normalize(0, 0, 100)).toBe(0);
    expect(normalize(-5, -5, 33)).toBe(0);
  });

  it('returns 1 when the value equals end', () => {
    expect(normalize(100, 0, 100)).toBe(1);
    expect(normalize(33, -5, 33)).toBe(1);
  });

  it('extrapolates values outside the range', () => {
    expect(normalize(150, 0, 100)).toBe(1.5);
    expect(normalize(-50, 0, 100)).toBe(-0.5);
    expect(normalize(35, 0, 33)).toBeCloseTo(1.0606060606060606);
  });

  it('supports reversed ranges', () => {
    expect(normalize(75, 100, 0)).toBe(0.25);
    expect(normalize(25, 100, 0)).toBe(0.75);
    expect(normalize(150, 100, 0)).toBe(-0.5);
  });

  it('supports negative start and end values', () => {
    expect(normalize(-75, -100, -50)).toBe(0.5);
    expect(normalize(0, -100, 100)).toBe(0.5);
  });

  it('supports fractional values', () => {
    expect(normalize(0.2, 0.1, 0.3)).toBeCloseTo(0.5);
    expect(normalize(1.75, 1.5, 2.5)).toBeCloseTo(0.25);
  });

  it('returns NaN when any argument is NaN', () => {
    expect(normalize(NaN, 0, 100)).toBeNaN();
    expect(normalize(50, NaN, 100)).toBeNaN();
    expect(normalize(50, 0, NaN)).toBeNaN();
  });

  it('handles infinite values according to JavaScript arithmetic', () => {
    expect(normalize(Infinity, 0, 100)).toBe(Infinity);
    expect(normalize(-Infinity, 0, 100)).toBe(-Infinity);
    expect(normalize(50, 0, Infinity)).toBe(0);
    expect(normalize(Infinity, 0, Infinity)).toBeNaN();
  });

  it('throws a RangeError when start and end are equal', () => {
    expect(() => normalize(5, 5, 5)).toThrow(new RangeError('start and end cannot be equal'));
    expect(() => normalize(10, 5, 5)).toThrow(new RangeError('start and end cannot be equal'));
    expect(() => normalize(5, Infinity, Infinity)).toThrow(new RangeError('start and end cannot be equal'));
  });

  it('throws a TypeError when value is not a number', () => {
    for (const value of [undefined, null, '50', true, 50n, {}]) {
      expect(() => normalize(value, 0, 100)).toThrow(new TypeError('Expected all arguments to be numbers'));
    }
  });

  it('throws a TypeError when start is not a number', () => {
    for (const value of [undefined, null, '0', false, 0n, {}]) {
      expect(() => normalize(50, value, 100)).toThrow(new TypeError('Expected all arguments to be numbers'));
    }
  });

  it('throws a TypeError when end is not a number', () => {
    for (const value of [undefined, null, '100', true, 100n, {}]) {
      expect(() => normalize(50, 0, value)).toThrow(new TypeError('Expected all arguments to be numbers'));
    }
  });
});
