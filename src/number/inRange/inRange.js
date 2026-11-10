/**
 * Checks whether a number is within an inclusive range.
 *
 * If `min` is greater than `max`, the bounds are treated in reverse order.
 * Returns `false` if any argument is `NaN`. Infinite bounds are supported.
 *
 * @param {number} value The number to check.
 * @param {number} min The lower bound of the range.
 * @param {number} max The upper bound of the range.
 * @returns {boolean} `true` if the number is within the range; otherwise `false`.
 * @throws {TypeError} If any argument is not a number.
 * @example
 *
 * inRange(3, 2, 4);
 * // => true
 *
 * inRange(3, 4, 2);
 * // => true
 *
 * inRange(2, 2, 4);
 * // => true
 *
 * inRange(5, 2, 4);
 * // => false
 *
 * inRange(-3, -2, -6);
 * // => true
 *
 * inRange(4.5, 8.2, 2.1);
 * // => true
 *
 * inRange(NaN, 0, 10);
 * // => false
 */
export function inRange(value, min, max) {
  if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  return value >= Math.min(min, max) && value <= Math.max(min, max);
}
