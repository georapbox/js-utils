/**
 * Returns a random number that tends toward the center of a range.
 * The result is the average of uniformly distributed random samples.
 * Higher iteration counts make values closer to the center more likely.
 *
 * @param {number} min The minimum value of the range.
 * @param {number} max The maximum value of the range.
 * @param {number} iterations The number of random samples. Fractional values are rounded down using `Math.floor()`.
 * @throws {TypeError} If any argument is not a number.
 * @throws {RangeError} If `min` or `max` is not finite, or `iterations` is not a positive finite number after rounding down or exceeds the maximum allowed iterations.
 * @returns {number} Returns a random number within the specified range.
 * @example
 *
 * // Uniformly distributed random number.
 * randomDist(0, 100, 1);
 * // => A random number between 0 and 100
 *
 * // Random number more likely to be close to the center.
 * randomDist(0, 100, 200);
 * // => A random number typically close to 50
 */
export function randomDist(min, max, iterations) {
  if (typeof min !== 'number' || typeof max !== 'number' || typeof iterations !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    throw new RangeError('Expected finite numbers for first and second arguments');
  }

  const count = Math.floor(iterations);
  const MAX_ITERATIONS = 1_000_000;

  if (!Number.isFinite(count) || count < 1 || count > MAX_ITERATIONS) {
    throw new RangeError('Expected iterations to be between 1 and 1000000');
  }

  const lower = Math.min(min, max);
  const range = Math.max(min, max) - lower;

  let total = 0;

  for (let i = 0; i < count; i += 1) {
    total += lower + Math.random() * range;
  }

  return total / count;
}
