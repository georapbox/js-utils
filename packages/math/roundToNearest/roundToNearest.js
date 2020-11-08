'use strict';

/**
 * Rounds a number to the nearest multiple of a value provided.
 *
 * @param {Number} value The number to be rounded.
 * @param {Number} nearest=1 The value to be used in order to find the nearest multiple of.
 * @throws {TypeError} If one or more of the arguments passed is not a number.
 * @return {Number} The rounded number.
 * @example
 *
 * roundToNearest(100, 40);
 * // -> 120
 *
 * roundToNearest(140, 40);
 * // -> 160
 *
 * roundToNearest(180, 40);
 * // -> 200
 *
 * roundToNearest(113, 0);
 * // -> 113 (0 is converted to 1)
 *
 * roundToNearest(113, NaN);
 * // -> 113 (NaN is converted to 1)
 */
function roundToNearest(value, nearest) {
  if (typeof value !== 'number' || typeof nearest !== 'number') {
    throw new TypeError('all arguments of "roundToNearest" must be numbers');
  }

  nearest = nearest || 1;

  return Math.round(value / nearest) * nearest;
}

module.exports = roundToNearest;