'use strict';

/**
 * Rounds a number to a number of desired places.
 * Feed with negative place values to round to powers of 10.
 *
 * @param {Number} value The number to be rounded.
 * @param {Number} places The places that the `value` is rounded to.
 * @throws {TypeError} If one or more of the arguments passed is not a number.
 * @returns {Number} The rounded number.
 * @example
 *
 * const PI = Math.PI
 * // => 3.141592653589793
 *
 * roundToPlaces(PI, 0);
 * // => 3
 *
 * roundToPlaces(PI, 1);
 * // => 3.1
 *
 * roundToPlaces(PI, 2);
 * // => 3.14
 *
 * roundToPlaces(PI, 3);
 * // => 3.142
 *
 * roundToPlaces(PI, 4);
 * // => 3.1416
 *
 * roundToPlaces(PI, 4.7);
 * // => 3.1416 (places is converted to 4)
 *
 * roundToPlaces(123456789, -1);
 * // => 123456790
 *
 * roundToPlaces(123456789, -2);
 * // => 123456800
 *
 * roundToPlaces(123456789, -3);
 * // => 123457000
 */
const roundToPlaces = (value, places) => {
  if (typeof value !== 'number' || typeof places !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  const mult = Math.pow(10, parseInt(places, 10));

  return Math.round(value * mult) / mult;
};

module.exports = roundToPlaces;
