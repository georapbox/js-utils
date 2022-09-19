'use strict';

/**
 * Checks if a number is between `min` and 'max' values including.
 * If `min` is greater than `max` the parameters are swapped to support inverted ranges.
 *
 * @param {Number} value The number to check.
 * @param {Number} min The minimum value of the range.
 * @param {Number} max The maximum value of the range.
 * @throws {TypeError} If one or more of the arguments passed is not a number.
 * @returns {Boolean} True if number is in the range; otherwise false.
 * @example
 *
 * inRange(3, 2, 4);
 * // => true
 *
 * inRange(3, 4, 2);
 * // => true (`min` and `max` parameters are swapped)
 *
 * inRange(-3, -2, -6);
 * // => true
 *
 * inRange(4, 8, 2);
 * // => true
 *
 * inRange(4.5, 8.2, 2.1);
 * // => true
 */
const inRange = (value, min, max) => {
  if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  return value >= Math.min(min, max) && value <= Math.max(min, max);
};

module.exports = inRange;
