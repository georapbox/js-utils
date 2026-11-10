import { describe, expect, it } from 'vitest';
import { roundToNearest } from './roundToNearest.js';

describe('Number/roundToNearest', () => {
  it('rounds to the nearest multiple', () => {
    expect(roundToNearest(100, 40)).toBe(120);
    expect(roundToNearest(140, 40)).toBe(160);
    expect(roundToNearest(180, 40)).toBe(200);
  });

  it('returns the value when it is already a multiple', () => {
    expect(roundToNearest(100, 25)).toBe(100);
    expect(roundToNearest(0, 10)).toBe(0);
  });

  it('rounds values below and above the nearest multiple', () => {
    expect(roundToNearest(12, 10)).toBe(10);
    expect(roundToNearest(18, 10)).toBe(20);
  });

  it('rounds halfway values toward positive infinity', () => {
    expect(roundToNearest(15, 10)).toBe(20);
    expect(roundToNearest(25, 10)).toBe(30);
    expect(roundToNearest(-15, 10)).toBe(-10);
    expect(roundToNearest(-25, 10)).toBe(-20);
  });

  it('rounds negative values correctly', () => {
    expect(roundToNearest(-12, 10)).toBe(-10);
    expect(roundToNearest(-18, 10)).toBe(-20);
  });

  it('treats negative multiples as positive', () => {
    expect(roundToNearest(15, -10)).toBe(20);
    expect(roundToNearest(-15, -10)).toBe(-10);
    expect(roundToNearest(18, -10)).toBe(20);
  });

  it('supports fractional multiples', () => {
    expect(roundToNearest(1.3, 0.5)).toBe(1.5);
    expect(roundToNearest(1.2, 0.5)).toBe(1);
    expect(roundToNearest(2.75, 0.25)).toBe(2.75);
  });

  it('preserves negative zero when rounding a negative zero value', () => {
    expect(roundToNearest(-0, 10)).toBe(-0);
  });

  it('returns NaN when the value is NaN', () => {
    expect(roundToNearest(NaN, 10)).toBeNaN();
  });

  it('preserves infinite values', () => {
    expect(roundToNearest(Infinity, 10)).toBe(Infinity);
    expect(roundToNearest(-Infinity, 10)).toBe(-Infinity);
  });

  it('throws a RangeError when the multiple is zero', () => {
    expect(() => roundToNearest(100, 0)).toThrow(new RangeError('nearest must be a finite, nonzero number'));
    expect(() => roundToNearest(100, -0)).toThrow(new RangeError('nearest must be a finite, nonzero number'));
  });

  it('throws a RangeError when the multiple is not finite', () => {
    for (const value of [NaN, Infinity, -Infinity]) {
      expect(() => roundToNearest(100, value)).toThrow(new RangeError('nearest must be a finite, nonzero number'));
    }
  });

  it('throws a TypeError when the value is not a number', () => {
    for (const value of [undefined, null, '100', true, 100n, {}]) {
      expect(() => roundToNearest(value, 10)).toThrow(new TypeError('Expected all arguments to be numbers'));
    }
  });

  it('throws a TypeError when the multiple is not a number', () => {
    for (const value of [undefined, null, '10', false, 10n, {}]) {
      expect(() => roundToNearest(100, value)).toThrow(new TypeError('Expected all arguments to be numbers'));
    }
  });
});
