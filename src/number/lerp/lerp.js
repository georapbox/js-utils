/**
 * Performs linear interpolation between two numbers.
 *
 * The interpolation factor determines the position between `start` and `end`:
 * `0` returns `start`, `1` returns `end`, and `0.5` returns the midpoint.
 * Values outside the range [0, 1] are allowed for extrapolation.
 *
 * @param {number} t The interpolation factor.
 * @param {number} start The starting value.
 * @param {number} end The ending value.
 * @returns {number} The interpolated value.
 * @throws {TypeError} If any argument is not a number.
 * @example
 *
 * lerp(0.75, 0, 365);
 * // => 273.75
 *
 * lerp(0.33, 100, 500);
 * // => 232
 *
 * lerp(0, 100, 500);
 * // => 100
 *
 * lerp(1, 100, 500);
 * // => 500
 *
 * lerp(-0.5, 0, 500);
 * // => -250
 *
 * lerp(1.5, 0, 100);
 * // => 150
 *
 * lerp(0.25, 100, 0);
 * // => 75
 */
export function lerp(t, start, end) {
  if (typeof t !== 'number' || typeof start !== 'number' || typeof end !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  return start + (end - start) * t;
}
