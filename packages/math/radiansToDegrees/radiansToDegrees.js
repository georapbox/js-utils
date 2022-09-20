'use strict';

/**
 * Converts radians to degrees.
 *
 * @param {Number} radians A number representing the radians to convert.
 * @throws {TypeError} If `radians` is not a number.
 * @returns {Number} The result in degrees, after conversion.
 * @example
 *
 * radiansToDegrees(0);
 * // => 0
 *
 * radiansToDegrees(1.5707963267948966); // π / 2
 * // => 90
 *
 * radiansToDegrees(3.141592653589793); // π
 * // => 180
 *
 * radiansToDegrees(4.71238898038469); // 3π / 2
 * // => 270
 *
 * radiansToDegrees(6.283185307179586); // 2π
 * // => 360
 */
const radiansToDegrees = radians => {
  if (typeof radians !== 'number') {
    throw new TypeError('Expected a number for first argument');
  }

  return radians * 180 / Math.PI;
};

module.exports = radiansToDegrees;
