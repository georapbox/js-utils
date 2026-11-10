/**
 * Converts an angle from degrees to radians.
 *
 * @param {number} degrees The angle in degrees.
 * @returns {number} The equivalent angle in radians.
 * @throws {TypeError} If the argument is not a number.
 * @example
 *
 * degreesToRadians(0);
 * // => 0
 *
 * degreesToRadians(90);
 * // => Math.PI / 2
 *
 * degreesToRadians(180);
 * // => Math.PI
 *
 * degreesToRadians(270);
 * // => (3 * Math.PI) / 2
 *
 * degreesToRadians(360);
 * // => 2 * Math.PI
 */
export function degreesToRadians(degrees) {
  if (typeof degrees !== 'number') {
    throw new TypeError('Expected a number for first argument');
  }

  return (degrees * Math.PI) / 180;
}
