import { afterEach, describe, expect, it, vi } from 'vitest';
import { randomDist } from './randomDist.js';

describe('Number/randomDist', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('Returns the average of uniformly distributed random samples', () => {
    const randomSpy = vi
      .spyOn(Math, 'random')
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.4)
      .mockReturnValueOnce(0.7);

    expect(randomDist(0, 100, 3)).toBeCloseTo(40);
    expect(randomSpy).toHaveBeenCalledTimes(3);
  });

  it('Returns a number within the specified range', () => {
    const result = randomDist(0, 100, 100);

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(100);
  });

  it('Supports inverted ranges', () => {
    const result = randomDist(100, 0, 100);

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(100);
  });

  it('Returns the same value when min and max are equal', () => {
    expect(randomDist(50, 50, 10)).toBe(50);
  });

  it('Rounds down fractional iterations', () => {
    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0.5);

    expect(randomDist(0, 100, 2.9)).toBe(50);
    expect(randomSpy).toHaveBeenCalledTimes(2);
  });

  it.each([
    ['0', 100, 10],
    [0, '100', 10],
    [0, 100, '10']
  ])('Throws if any argument is not a number', (min, max, iterations) => {
    expect(() => randomDist(min, max, iterations)).toThrow(new TypeError('Expected all arguments to be numbers'));
  });

  it.each([
    [NaN, 100],
    [0, NaN],
    [Infinity, 100],
    [0, Infinity],
    [-Infinity, 100],
    [0, -Infinity]
  ])('Throws if min or max is not finite', (min, max) => {
    expect(() => randomDist(min, max, 10)).toThrow(
      new RangeError('Expected finite numbers for first and second arguments')
    );
  });

  it.each([0, 0.5, -1, NaN, Infinity, -Infinity, 1_000_001, Number.MAX_VALUE])(
    'Throws for invalid iterations %s',
    (iterations) => {
      expect(() => randomDist(0, 100, iterations)).toThrow(
        new RangeError('Expected iterations to be between 1 and 1000000')
      );
    }
  );
});
