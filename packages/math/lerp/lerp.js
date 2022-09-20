'use strict';

/**
 * Takes a normalized value within a range of values and converts
 * it to a numerical value that the normalized value points to.
 *
 * @param {Number} norm The normalized value to convert.
 * @param {Number} min The minimum value of the range of values.
 * @param {Number} max The maximum value of the range of values.
 * @throws {TypeError} If any of the arguments passed is not a number.
 * @returns {Number} The value that the normalized value points to.
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
 */
const lerp = (norm, min, max) => {
  if (typeof norm !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  return (max - min) * norm + min;
};

module.exports = lerp;
