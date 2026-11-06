import { describe, expect, it } from 'vitest';
import { lerp } from './lerp.js';

describe('Number/lerp', () => {
  it('interpolates between two values', () => {
    expect(lerp(0.75, 0, 365)).toBe(273.75);
    expect(lerp(0.33, 100, 500)).toBe(232);
    expect(lerp(0.5, 0, 100)).toBe(50);
  });

  it('returns the start value when t is 0', () => {
    expect(lerp(0, 100, 500)).toBe(100);
  });

  it('returns the end value when t is 1', () => {
    expect(lerp(1, 100, 500)).toBe(500);
  });

  it('extrapolates when t is outside the range [0, 1]', () => {
    expect(lerp(-0.5, 0, 500)).toBe(-250);
    expect(lerp(1.5, 0, 100)).toBe(150);
  });

  it('supports descending interpolation', () => {
    expect(lerp(0.25, 100, 0)).toBe(75);
    expect(lerp(0.75, 100, 0)).toBe(25);
  });

  it('supports negative start and end values', () => {
    expect(lerp(0.5, -100, -50)).toBe(-75);
    expect(lerp(0.5, -100, 100)).toBe(0);
  });

  it('returns the same value when start and end are equal', () => {
    expect(lerp(0.5, 100, 100)).toBe(100);
    expect(lerp(1.5, 100, 100)).toBe(100);
  });

  it('supports fractional values', () => {
    expect(lerp(0.5, 0.1, 0.3)).toBeCloseTo(0.2);
    expect(lerp(0.25, 1.5, 2.5)).toBeCloseTo(1.75);
  });

  it('returns NaN when any argument is NaN', () => {
    expect(lerp(NaN, 0, 100)).toBeNaN();
    expect(lerp(0.5, NaN, 100)).toBeNaN();
    expect(lerp(0.5, 0, NaN)).toBeNaN();
  });

  it('handles infinite values according to JavaScript arithmetic', () => {
    expect(lerp(0.5, 0, Infinity)).toBe(Infinity);
    expect(lerp(0.5, -Infinity, 100)).toBeNaN();
    expect(lerp(0, 0, Infinity)).toBeNaN();
    expect(lerp(Infinity, 0, 100)).toBe(Infinity);
  });

  it('throws a TypeError when t is not a number', () => {
    for (const value of [undefined, null, '0.5', true, 1n, {}]) {
      expect(() => lerp(value, 0, 100)).toThrow(new TypeError('Expected all arguments to be numbers'));
    }
  });

  it('throws a TypeError when start is not a number', () => {
    for (const value of [undefined, null, '0', false, 0n, {}]) {
      expect(() => lerp(0.5, value, 100)).toThrow(new TypeError('Expected all arguments to be numbers'));
    }
  });

  it('throws a TypeError when end is not a number', () => {
    for (const value of [undefined, null, '100', true, 100n, {}]) {
      expect(() => lerp(0.5, 0, value)).toThrow(new TypeError('Expected all arguments to be numbers'));
    }
  });
});
