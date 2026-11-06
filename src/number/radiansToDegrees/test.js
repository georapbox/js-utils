import { describe, expect, it } from 'vitest';
import { radiansToDegrees } from './radiansToDegrees.js';

describe('Number/radiansToDegrees', () => {
  it('converts common angles to degrees', () => {
    expect(radiansToDegrees(Math.PI / 2)).toBe(90);
    expect(radiansToDegrees(Math.PI)).toBe(180);
    expect(radiansToDegrees((3 * Math.PI) / 2)).toBe(270);
    expect(radiansToDegrees(2 * Math.PI)).toBe(360);
  });

  it('converts negative angles to degrees', () => {
    expect(radiansToDegrees(-Math.PI / 2)).toBe(-90);
    expect(radiansToDegrees(-Math.PI)).toBe(-180);
    expect(radiansToDegrees(-2 * Math.PI)).toBe(-360);
  });

  it('converts fractional angles to degrees', () => {
    expect(radiansToDegrees(Math.PI / 8)).toBeCloseTo(22.5);
    expect(radiansToDegrees(Math.PI / 6)).toBeCloseTo(30);
  });

  it('preserves signed zero', () => {
    expect(radiansToDegrees(0)).toBe(0);
    expect(radiansToDegrees(-0)).toBe(-0);
  });

  it('handles non-finite numbers', () => {
    expect(radiansToDegrees(NaN)).toBeNaN();
    expect(radiansToDegrees(Infinity)).toBe(Infinity);
    expect(radiansToDegrees(-Infinity)).toBe(-Infinity);
  });

  it('throws a TypeError when the argument is not a number', () => {
    for (const value of [undefined, null, '3.14', true, 3n, {}]) {
      expect(() => radiansToDegrees(value)).toThrow(new TypeError('Expected a number for first argument'));
    }
  });
});
