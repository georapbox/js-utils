/**
 * Rounds a number to the specified number of decimal places.
 *
 * Positive places round to decimal digits, while negative places
 * round to powers of 10. The number of places must be an integer.
 *
 * Rounding follows JavaScript's `Math.round()` behavior and is
 * subject to floating-point precision limitations.
 *
 * @param {number} value The number to round.
 * @param {number} places The number of decimal places.
 * @returns {number} The rounded number.
 * @throws {TypeError} If `value` is not a number or `places` is not an integer.
 * @example
 *
 * roundToPlaces(Math.PI, 0);
 * // => 3
 *
 * roundToPlaces(Math.PI, 2);
 * // => 3.14
 *
 * roundToPlaces(Math.PI, 4);
 * // => 3.1416
 *
 * roundToPlaces(123456789, -1);
 * // => 123456790
 *
 * roundToPlaces(123456789, -2);
 * // => 123456800
 *
 * roundToPlaces(123456789, -3);
 * // => 123457000
 *
 * roundToPlaces(-1.25, 1);
 * // => -1.2
 */
export function roundToPlaces(value, places) {
  if (typeof value !== 'number') {
    throw new TypeError('Expected a number for first argument');
  }

  if (!Number.isInteger(places)) {
    throw new TypeError('Expected an integer for second argument');
  }

  const multiplier = 10 ** places;

  return Math.round(value * multiplier) / multiplier;
}
