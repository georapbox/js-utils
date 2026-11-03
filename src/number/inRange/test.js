import { describe, expect, it } from 'vitest';
import { inRange } from './inRange.js';

describe('Number/inRange', () => {
  it('returns true when the value is within the range', () => {
    expect(inRange(3, 2, 4)).toBe(true);
    expect(inRange(5, 0, 10)).toBe(true);
  });

  it('returns false when the value is outside the range', () => {
    expect(inRange(1, 2, 4)).toBe(false);
    expect(inRange(5, 2, 4)).toBe(false);
  });

  it('includes the minimum and maximum bounds', () => {
    expect(inRange(2, 2, 4)).toBe(true);
    expect(inRange(4, 2, 4)).toBe(true);
  });

  it('supports reversed bounds', () => {
    expect(inRange(3, 4, 2)).toBe(true);
    expect(inRange(4, 8, 2)).toBe(true);
    expect(inRange(1, 4, 2)).toBe(false);
    expect(inRange(5, 4, 2)).toBe(false);
  });

  it('supports equal bounds', () => {
    expect(inRange(5, 5, 5)).toBe(true);
    expect(inRange(4, 5, 5)).toBe(false);
    expect(inRange(6, 5, 5)).toBe(false);
  });

  it('supports negative numbers', () => {
    expect(inRange(-3, -6, -2)).toBe(true);
    expect(inRange(-3, -2, -6)).toBe(true);
    expect(inRange(-7, -6, -2)).toBe(false);
  });

  it('supports fractional numbers', () => {
    expect(inRange(4.5, 2.1, 8.2)).toBe(true);
    expect(inRange(4.5, 8.2, 2.1)).toBe(true);
    expect(inRange(2.0, 2.1, 8.2)).toBe(false);
  });

  it('treats positive and negative zero as equal', () => {
    expect(inRange(-0, +0, 10)).toBe(true);
    expect(inRange(+0, -10, -0)).toBe(true);
    expect(inRange(-0, +0, +0)).toBe(true);
  });

  it('returns false when any argument is NaN', () => {
    expect(inRange(NaN, 0, 10)).toBe(false);
    expect(inRange(5, NaN, 10)).toBe(false);
    expect(inRange(5, 0, NaN)).toBe(false);
  });

  it('supports infinite bounds', () => {
    expect(inRange(5, -Infinity, Infinity)).toBe(true);
    expect(inRange(5, -Infinity, 10)).toBe(true);
    expect(inRange(5, 0, Infinity)).toBe(true);
  });

  it('handles infinite values', () => {
    expect(inRange(Infinity, 0, Infinity)).toBe(true);
    expect(inRange(-Infinity, -Infinity, 0)).toBe(true);
    expect(inRange(Infinity, 0, 10)).toBe(false);
    expect(inRange(-Infinity, 0, 10)).toBe(false);
  });

  it('throws a TypeError when the value is not a number', () => {
    for (const value of [undefined, null, '5', true, 5n, {}]) {
      expect(() => inRange(value, 0, 10)).toThrow(new TypeError('Expected all arguments to be numbers'));
    }
  });

  it('throws a TypeError when min is not a number', () => {
    for (const value of [undefined, null, '0', false, 0n, {}]) {
      expect(() => inRange(5, value, 10)).toThrow(new TypeError('Expected all arguments to be numbers'));
    }
  });

  it('throws a TypeError when max is not a number', () => {
    for (const value of [undefined, null, '10', true, 10n, {}]) {
      expect(() => inRange(5, 0, value)).toThrow(new TypeError('Expected all arguments to be numbers'));
    }
  });
});
