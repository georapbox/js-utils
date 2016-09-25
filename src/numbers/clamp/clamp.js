/**
 * Clamps number within the inclusive `lower` and `upper` bounds.
 *
 * @category Number
 * @param {Number} number The number to clamp.
 * @param {Number} [lower] The lower bound.
 * @param {Number} upper The upper bound.
 * @throws {TypeError} If `number` is not number.
 * @throws {TypeError} If `lower` is defined and is not number.
 * @throws {TypeError} If `upper` is defined and is not number.
 * @return {Number} The clamped number.
 * @example
 *
 * clamp(10, -5, 5);
 * // -> 5
 *
 * clamp(-10, -5, 5);
 * // -> -5
 *
 * clamp(10, -5);
 * // -> -5
 *
 * clamp(10, 5);
 * // -> 5
 *
 * clamp(10, NaN, NaN);
 * // -> 0
 *
 * clamp(10, '-5', '5');
 * // -> Throws TypeError
 */
function clamp(number, lower, upper) {
  'use strict';

  if (typeof number !== 'number' ||
      typeof lower !== 'number' && lower !== undefined ||
      typeof upper !== 'number' && upper !== undefined) {
    throw new TypeError('Expected a number');
  }

  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }

  if (upper !== undefined) {
    upper = upper === upper ? upper : 0;
  }

  if (lower !== undefined) {
    lower = lower === lower ? lower : 0;
  }

  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }

    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }

  return number;
}
