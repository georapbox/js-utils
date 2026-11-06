import { describe, expect, it } from 'vitest';
import { degreesToRadians } from './degreesToRadians.js';

describe('Number/degreesToRadians', () => {
  it('converts common angles to radians', () => {
    expect(degreesToRadians(90)).toBe(Math.PI / 2);
    expect(degreesToRadians(180)).toBe(Math.PI);
    expect(degreesToRadians(270)).toBe((3 * Math.PI) / 2);
    expect(degreesToRadians(360)).toBe(2 * Math.PI);
  });

  it('converts negative angles to radians', () => {
    expect(degreesToRadians(-90)).toBe(-Math.PI / 2);
    expect(degreesToRadians(-180)).toBe(-Math.PI);
    expect(degreesToRadians(-360)).toBe(-2 * Math.PI);
  });

  it('converts fractional angles to radians', () => {
    expect(degreesToRadians(22.5)).toBeCloseTo(Math.PI / 8);
    expect(degreesToRadians(45.5)).toBeCloseTo((45.5 * Math.PI) / 180);
  });

  it('preserves signed zero', () => {
    expect(degreesToRadians(0)).toBe(0);
    expect(degreesToRadians(-0)).toBe(-0);
  });

  it('handles non-finite numbers', () => {
    expect(degreesToRadians(NaN)).toBeNaN();
    expect(degreesToRadians(Infinity)).toBe(Infinity);
    expect(degreesToRadians(-Infinity)).toBe(-Infinity);
  });

  it('throws a TypeError when the argument is not a number', () => {
    for (const value of [undefined, null, '180', true, 180n, {}]) {
      expect(() => degreesToRadians(value)).toThrow(new TypeError('Expected a number for first argument'));
    }
  });
});
