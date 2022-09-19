'use strict';

/**
 * Converts degrees to radians.
 *
 * @param {Number} degrees A number representing the degrees to convert.
 * @throws {TypeError} If `degrees` is not a number.
 * @returns {Number} The result in radiands, after conversion.
 * @example
 *
 * degreesToRadians(0);
 * // => 0
 *
 * degreesToRadians(90);
 * // => 1.5707963267948966 (π / 2)
 *
 * degreesToRadians(180);
 * // => 3.141592653589793 (π)
 *
 * degreesToRadians(270);
 * // => 4.71238898038469 (3π / 2)
 *
 * degreesToRadians(360);
 * // => 6.283185307179586 (2π)
 */
const degreesToRadians = degrees => {
  if (typeof degrees !== 'number') {
    throw new TypeError('Expected a number for first argument');
  }

  return degrees * Math.PI / 180;
};

module.exports = degreesToRadians;
