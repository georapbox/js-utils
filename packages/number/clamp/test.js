import { describe, expect, it } from 'vitest';
import { clamp } from './clamp.js';

describe('Number/clamp', () => {
  it('throws TypeError when value is not a number', () => {
    expect(() => clamp('5', 1, 10)).toThrow(TypeError);
    expect(() => clamp(null, 1, 10)).toThrow(TypeError);
    expect(() => clamp(undefined, 1, 10)).toThrow(TypeError);
  });

  it('throws TypeError when min is not a number', () => {
    expect(() => clamp(5, '1', 10)).toThrow(TypeError);
  });

  it('throws TypeError when max is not a number', () => {
    expect(() => clamp(5, 1, '10')).toThrow(TypeError);
  });

  it('returns NaN when min is NaN', () => {
    expect(clamp(5, NaN, 10)).toBeNaN();
  });

  it('returns NaN when max is NaN', () => {
    expect(clamp(5, 1, NaN)).toBeNaN();
  });

  it('returns NaN when value is NaN', () => {
    expect(clamp(NaN, 1, 10)).toBeNaN();
  });

  it('throws RangeError when min > max', () => {
    expect(() => clamp(5, 10, 1)).toThrow(RangeError);
  });

  it('returns min when min === max', () => {
    expect(clamp(42, 7, 7)).toBe(7);
    expect(clamp(-0, +0, +0)).toBe(+0);
    expect(clamp(+0, -0, -0)).toBe(-0);
  });

  it('value -0 and min +0 -> +0', () => {
    const result = clamp(-0, +0, 10);
    expect(Object.is(result, +0)).toBe(true);
  });

  it('value +0 and min -0 -> +0', () => {
    const result = clamp(+0, -0, 10);
    expect(Object.is(result, +0)).toBe(true);
  });

  it('value < min -> min', () => {
    expect(clamp(-3, 1, 10)).toBe(1);
  });

  it('value -0 and max +0 -> -0', () => {
    const result = clamp(-0, -1, +0);
    expect(Object.is(result, -0)).toBe(true);
  });

  it('value +0 and max -0 -> -0', () => {
    const result = clamp(+0, -1, -0);
    expect(Object.is(result, -0)).toBe(true);
  });

  it('value > max -> max', () => {
    expect(clamp(99, 1, 10)).toBe(10);
  });

  it('returns value when within [min, max]', () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(1, 1, 10)).toBe(1);
    expect(clamp(10, 1, 10)).toBe(10);
  });
});
