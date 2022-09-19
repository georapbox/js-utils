'use strict';

/**
 * Clamps number within the inclusive `min` and `max` bounds,
 * making sure it does not go beyond them on either side.
 * If `min` is greater than `max` the parameters are swapped to support inverted ranges.
 *
 * @param {Number} value The number to clamp.
 * @param {Number} min The lower bound.
 * @param {Number} max The upper bound.
 * @throws {TypeError} If one or more of the arguments passed is not a number.
 * @returns {Number} The clamped number.
 * @example
 *
 * clamp(10, -5, 5);
 * // => 5
 *
 * clamp(-10, -5, 5);
 * // => -5
 *
 * clamp(-15, 0, 100);
 * // => 0
 *
 * clamp(120, 0, 100);
 * // => 100
 *
 * clamp(-5, NaN, 5); // If any of lower or upper bound are `NaN`, they will be converted to `0`.
 * // => 0
 *
 * clamp(120, 100, 0); // The order of lower and upper bounds is reversed (100 > 0)
 * // => 100
 */
const clamp = (value, lower, upper) => {
  if (typeof value !== 'number' || typeof lower !== 'number' || typeof upper !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  if (lower !== lower) { // lower bound is not `NaN`
    lower = 0;
  }

  if (upper !== upper) { // upper bound is not `NaN`
    upper = 0;
  }

  return Math.min(Math.max(value, Math.min(lower, upper)), Math.max(lower, upper));
};

module.exports = clamp;
