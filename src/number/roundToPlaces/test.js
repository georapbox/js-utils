import { describe, expect, it } from 'vitest';
import { roundToPlaces } from './roundToPlaces.js';

describe('Number/roundToPlaces', () => {
  it('rounds to the specified number of decimal places', () => {
    expect(roundToPlaces(Math.PI, 1)).toBe(3.1);
    expect(roundToPlaces(Math.PI, 2)).toBe(3.14);
    expect(roundToPlaces(Math.PI, 3)).toBe(3.142);
    expect(roundToPlaces(Math.PI, 4)).toBe(3.1416);
  });

  it('rounds to the nearest integer when places is zero', () => {
    expect(roundToPlaces(Math.PI, 0)).toBe(3);
    expect(roundToPlaces(3.7, 0)).toBe(4);
    expect(roundToPlaces(-3.7, 0)).toBe(-4);
  });

  it('rounds to powers of ten when places is negative', () => {
    expect(roundToPlaces(123456789, -1)).toBe(123456790);
    expect(roundToPlaces(123456789, -2)).toBe(123456800);
    expect(roundToPlaces(123456789, -3)).toBe(123457000);
  });

  it('rounds negative numbers correctly', () => {
    expect(roundToPlaces(-3.14159, 2)).toBe(-3.14);
    expect(roundToPlaces(-3.14159, 3)).toBe(-3.142);
    expect(roundToPlaces(-1234, -2)).toBe(-1200);
  });

  it('rounds halfway values toward positive infinity', () => {
    expect(roundToPlaces(1.25, 1)).toBe(1.3);
    expect(roundToPlaces(-1.25, 1)).toBe(-1.2);
    expect(roundToPlaces(125, -1)).toBe(130);
    expect(roundToPlaces(-125, -1)).toBe(-120);
  });

  it('preserves values that do not need rounding', () => {
    expect(roundToPlaces(3.14, 2)).toBe(3.14);
    expect(roundToPlaces(100, -2)).toBe(100);
    expect(roundToPlaces(42, 0)).toBe(42);
  });

  it('preserves signed zero', () => {
    expect(roundToPlaces(0, 2)).toBe(0);
    expect(roundToPlaces(-0, 2)).toBe(-0);
    expect(roundToPlaces(-0.01, 0)).toBe(-0);
  });

  it('handles non-finite numbers', () => {
    expect(roundToPlaces(NaN, 2)).toBeNaN();
    expect(roundToPlaces(Infinity, 2)).toBe(Infinity);
    expect(roundToPlaces(-Infinity, 2)).toBe(-Infinity);
  });

  it('throws a TypeError when value is not a number', () => {
    for (const value of [undefined, null, '3.14', true, 3n, {}]) {
      expect(() => roundToPlaces(value, 2)).toThrow(new TypeError('Expected a number for first argument'));
    }
  });

  it('throws a TypeError when places is not an integer', () => {
    for (const value of [undefined, null, '2', true, 2n, {}, 4.7, -2.5, NaN, Infinity, -Infinity]) {
      expect(() => roundToPlaces(Math.PI, value)).toThrow(new TypeError('Expected an integer for second argument'));
    }
  });
});
