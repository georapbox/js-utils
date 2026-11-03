/**
 * Converts an angle from radians to degrees.
 *
 * @param {number} radians The angle in radians.
 * @returns {number} The equivalent angle in degrees.
 * @throws {TypeError} If the argument is not a number.
 * @example
 *
 * radiansToDegrees(0);
 * // => 0
 *
 * radiansToDegrees(Math.PI / 2);
 * // => 90
 *
 * radiansToDegrees(Math.PI);
 * // => 180
 *
 * radiansToDegrees((3 * Math.PI) / 2);
 * // => 270
 *
 * radiansToDegrees(2 * Math.PI);
 * // => 360
 */
export function radiansToDegrees(radians) {
  if (typeof radians !== 'number') {
    throw new TypeError('Expected a number for first argument');
  }

  return (radians * 180) / Math.PI;
}
