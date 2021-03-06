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
 * @return {Number} The clamped number.
 * @example
 *
 * clamp(10, -5, 5);
 * // -> 5
 *
 * clamp(-10, -5, 5);
 * // -> -5
 *
 * clamp(-15, 0, 100);
 * // -> 0
 *
 * clamp(120, 0, 100);
 * // -> 100
 *
 * clamp(10, NaN, NaN);
 * // -> NaN
 *
 * clamp(120, 100, 0); // order of min and max is reversed (100 > 0)
 * // -> 100
 */
function clamp(value, min, max) {
  if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
}

module.exports = clamp;
