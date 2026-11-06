/**
 * Rounds a number to the nearest multiple of a given value.
 *
 * Negative multiples are treated as positive. Halfway values are rounded
 * toward positive infinity, following JavaScript's Math.round() behavior.
 * The multiple must be finite and nonzero.
 *
 * @param {number} value The number to round.
 * @param {number} nearest The multiple to round to.
 * @returns {number} The rounded number.
 * @throws {TypeError} If either argument is not a number.
 * @throws {RangeError} If `nearest` is zero or not finite.
 * @example
 *
 * roundToNearest(100, 40);
 * // => 120
 *
 * roundToNearest(140, 40);
 * // => 160
 *
 * roundToNearest(180, 40);
 * // => 200
 *
 * roundToNearest(15, -10);
 * // => 20
 *
 * roundToNearest(-15, 10);
 * // => -10
 *
 * roundToNearest(12.5, 5);
 * // => 15
 *
 * roundToNearest(NaN, 10);
 * // => NaN
 */
export function roundToNearest(value, nearest) {
  if (typeof value !== 'number' || typeof nearest !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  if (!Number.isFinite(nearest) || nearest === 0) {
    throw new RangeError('nearest must be a finite, nonzero number');
  }

  const step = Math.abs(nearest);

  return Math.round(value / step) * step;
}
