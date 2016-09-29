/**
 * Returns a pseudo-random number between a min (inclusive) and a max (exclusive) value.
 * If `min` is greater than `max` the parameters are swapped to support inverted ranges.
 *
 * @category Math
 * @param {Number} min The minimum value of the range.
 * @param {Number} max The maximum value of the range.
 * @throws {TypeError} If one or more of the arguments passed is not a number.
 * @return {Number} The pseudo-random number.
 * @example
 *
 * randomRange(3, 8);
 * // -> Any number between 3 (inclusive) and 8 (exclusive). eg 5.3304674779064953
 */
function randomRange(min, max) {
  'use strict';

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('all arguments of "randomRange" must be numbers');
  }

  return Math.min(min, max) + Math.random() * (Math.max(min, max) - Math.min(min, max));
}
