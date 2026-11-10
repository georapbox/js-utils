import { describe, expect, it } from 'vitest';
import { average } from './average.js';

describe('Number/average', () => {
  it('calculates the average of multiple numbers', () => {
    expect(average(5, 10, 50, -45, 6, 7)).toBe(5.5);
    expect(average(2, 4, 6, 8)).toBe(5);
  });

  it('handles positive and negative numbers', () => {
    expect(average(-10, 10, 20)).toBe(20 / 3);
    expect(average(-5, -10, -15)).toBe(-10);
  });

  it('includes zero and negative zero in the calculation', () => {
    expect(average(2, 4, 0, -0)).toBe(1.5);
    expect(average(0, -0)).toBe(0);
  });

  it('returns the number itself when only one valid number is provided', () => {
    expect(average(7)).toBe(7);
    expect(average(7, null, NaN)).toBe(7);
  });

  it('ignores non-finite numbers', () => {
    expect(average(5, 10, NaN, Infinity, -Infinity)).toBe(7.5);
  });

  it('ignores non-number values', () => {
    expect(average(5, 4, null, undefined, true, false, '12', {})).toBe(4.5);
    expect(average('4', '2')).toBe(0);
  });

  it('returns zero when no arguments are provided', () => {
    expect(average()).toBe(0);
  });

  it('returns zero when no valid numbers are provided', () => {
    expect(average(NaN, Infinity, -Infinity, null, undefined)).toBe(0);
    expect(average([], {}, 'hello', true)).toBe(0);
  });

  it('handles floating-point numbers', () => {
    expect(average(1.5, 2.5, 3.5)).toBe(2.5);
  });
});
