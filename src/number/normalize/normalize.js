/**
 * Normalizes a number relative to a range, returning its position
 * as an interpolation factor.
 *
 * `0` represents `start`, `1` represents `end`, and `0.5` represents
 * the midpoint. Values outside the range are allowed and may produce
 * results outside [0, 1]. Reversed ranges are supported.
 *
 * @param {number} value The number to normalize.
 * @param {number} start The starting value of the range.
 * @param {number} end The ending value of the range.
 * @returns {number} The normalized value.
 * @throws {TypeError} If any argument is not a number.
 * @throws {RangeError} If `start` and `end` are equal.
 * @example
 *
 * normalize(25, 0, 100);
 * // => 0.25
 *
 * normalize(50, 0, 100);
 * // => 0.5
 *
 * normalize(100, 0, 100);
 * // => 1
 *
 * normalize(150, 0, 100);
 * // => 1.5
 *
 * normalize(-50, 0, 100);
 * // => -0.5
 *
 * normalize(75, 100, 0);
 * // => 0.25
 */
export function normalize(value, start, end) {
  if (typeof value !== 'number' || typeof start !== 'number' || typeof end !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  if (start === end) {
    throw new RangeError('start and end cannot be equal');
  }

  return (value - start) / (end - start);
}
