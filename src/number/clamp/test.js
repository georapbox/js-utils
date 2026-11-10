import { describe, expect, it } from 'vitest';
import { clamp } from './clamp.js';

describe('Number/clamp', () => {
  it('returns the value when it is within the bounds', () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(1, 1, 10)).toBe(1);
    expect(clamp(10, 1, 10)).toBe(10);
  });

  it('clamps values below the minimum bound', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(-15, 0, 100)).toBe(0);
  });

  it('clamps values above the maximum bound', () => {
    expect(clamp(10, -5, 5)).toBe(5);
    expect(clamp(120, 0, 100)).toBe(100);
  });

  it('returns the bound when min and max are equal', () => {
    expect(clamp(42, 7, 7)).toBe(7);
    expect(clamp(-10, 7, 7)).toBe(7);
    expect(clamp(10, 7, 7)).toBe(7);
  });

  it('supports infinite bounds', () => {
    expect(clamp(5, -Infinity, Infinity)).toBe(5);
    expect(clamp(5, -Infinity, 0)).toBe(0);
    expect(clamp(-5, 0, Infinity)).toBe(0);
  });

  it('clamps infinite values to finite bounds', () => {
    expect(clamp(Infinity, 0, 10)).toBe(10);
    expect(clamp(-Infinity, 0, 10)).toBe(0);
  });

  it('preserves infinite values when within the bounds', () => {
    expect(clamp(Infinity, 0, Infinity)).toBe(Infinity);
    expect(clamp(-Infinity, -Infinity, 0)).toBe(-Infinity);
  });

  it('returns NaN when any argument is NaN', () => {
    expect(clamp(NaN, 0, 10)).toBeNaN();
    expect(clamp(5, NaN, 10)).toBeNaN();
    expect(clamp(5, 0, NaN)).toBeNaN();
  });

  it('returns NaN before checking reversed bounds', () => {
    expect(clamp(NaN, 10, 0)).toBeNaN();
    expect(clamp(5, NaN, 0)).toBeNaN();
    expect(clamp(5, 10, NaN)).toBeNaN();
  });

  it('preserves the sign when min and max are the same zero', () => {
    expect(clamp(-0, +0, +0)).toBe(+0);
    expect(clamp(+0, -0, -0)).toBe(-0);
  });

  it('returns positive zero when clamping against a zero minimum', () => {
    expect(clamp(-0, +0, 10)).toBe(+0);
    expect(clamp(+0, -0, 10)).toBe(+0);
  });

  it('returns negative zero when clamping against a zero maximum', () => {
    expect(clamp(-0, -10, +0)).toBe(-0);
    expect(clamp(+0, -10, -0)).toBe(-0);
  });

  it('preserves signed zero when it is within nonzero bounds', () => {
    expect(clamp(+0, -10, 10)).toBe(+0);
    expect(clamp(-0, -10, 10)).toBe(-0);
  });

  it('throws a RangeError when min is greater than max', () => {
    expect(() => clamp(5, 10, 0)).toThrow(new RangeError('min cannot be greater than max'));
    expect(() => clamp(5, Infinity, -Infinity)).toThrow(new RangeError('min cannot be greater than max'));
  });

  it('throws a TypeError when value is not a number', () => {
    for (const value of [undefined, null, '5', true, 5n, {}]) {
      expect(() => clamp(value, 0, 10)).toThrow(new TypeError('value must be a number'));
    }
  });

  it('throws a TypeError when min is not a number', () => {
    for (const value of [undefined, null, '0', false, 0n, {}]) {
      expect(() => clamp(5, value, 10)).toThrow(new TypeError('min must be a number'));
    }
  });

  it('throws a TypeError when max is not a number', () => {
    for (const value of [undefined, null, '10', true, 10n, {}]) {
      expect(() => clamp(5, 0, value)).toThrow(new TypeError('max must be a number'));
    }
  });
});
