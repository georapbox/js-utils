'use strict';

/**
 * Takes a value within a range of values and converts that value
 * to a number from 0 to 1 that indicates where it lies in that range.
 *
 * @param {Number} value The numerical value to normalize.
 * @param {Number} min The minimum value of the range of values.
 * @param {Number} max The maximum value of the range of values.
 * @throws {TypeError} If any of the arguments passed is not a number.
 * @returns {Number} The normalized value.
 * @example
 *
 * normalize(23, 0, 33);
 * // => 0.696969696969697
 *
 * normalize(23, 5, 33);
 * // => 0.6428571428571429
 *
 * normalize(35, 0, 33);
 * // => 1.0606060606060606
 *
 * normalize(-1, 0, 33);
 * // => -0.030303030303030304
 *
 * normalize(33, -5, 33);
 * // => 1
 *
 * normalize(-5, -5, 33);
 * // => 0
 */
const normalize = (value, min, max) => {
  if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  return (value - min) / (max - min);
};

module.exports = normalize;
