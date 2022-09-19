'use strict';

/**
 * Rounds a number to the nearest multiple of a value provided.
 *
 * @param {Number} value The number to be rounded.
 * @param {Number} nearest The value to be used in order to find the nearest multiple of.
 * @throws {TypeError} If one or more of the arguments passed is not a number.
 * @returns {Number} The rounded number.
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
 * roundToNearest(100, 0);
 * // => NaN
 *
 * roundToNearest(100, NaN);
 * // => NaN
 *
 * roundToNearest(100);
 * // => NaN
 */
const roundToNearest = (value, nearest) => {
  if (typeof value !== 'number' || typeof nearest !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  return Math.round(value / nearest) * nearest;
};

module.exports = roundToNearest;
