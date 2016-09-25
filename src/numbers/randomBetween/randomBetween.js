/**
 * Returns a pseudo-random number (integer or floating-point)
 * between a min (inclusive) and a max (exclusive) value.
 *
 * @category Number
 * @param {Number} min The minimum value of the range.
 * @param {Number} max The maximum value of the range.
 * @param {Boolean} [floatPoint=false] If true the returned number will be floating-point.
 * @return {Number} The pseudo-random number.
 * @example
 *
 * randomBetween(3, 8);
 * // -> Any integer between 3 (inclusive) and 8 (exclusive). eg 3, 4, 5, 6, 7
 *
 * randomBetween(3, 8, true);
 * // -> Any floating-point number between 3 (inclusive) and 8 (exclusive). eg 6.362311312365572
 *
 * randomBetween(3);
 * // -> NaN
 *
 * randomBetween(3, null);
 * // -> NaN
 *
 * randomBetween(3, Infinity);
 * // -> NaN
 */
function randomBetween(min, max, floatPoint) {
  'use strict';

  var isFloatPoint = floatPoint === true,
    rInt;

  min = isFloatPoint ? parseFloat(min) : parseInt(min, 10);
  max = isFloatPoint ? parseFloat(max) : parseInt(max, 10);
  rInt = Math.random() * (max - min);
  return isFloatPoint ? rInt + min : Math.floor(rInt) + min;
}
