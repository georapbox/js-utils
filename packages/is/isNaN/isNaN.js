'use strict';

/**
 * Determines whether a value is NaN or not.
 *
 * @NOTE: `NaN` is number and it is also the only primitive value which does not equal to itself.
 * @param {*} value The value to check if NaN.
 * @return {Boolean} True if NaN, else false.
 * @example
 *
 * isNaN(5);
 * // -> false
 *
 * isNaN('hello world');
 * // -> false
 *
 * isNaN(undefined);
 * // -> false
 *
 * isNaN(null);
 * // -> false
 *
 * isNaN({});
 * // -> false
 *
 * isNaN(NaN);
 * // -> true
 *
 * var a, b = a + 5;
 * isNaN(b);
 * // -> true (undefined + 5 = NaN)
 *
 * var a = null, b = a + 5;
 * isNaN(b);
 */
function isNaN(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  }

  // NaN is of type "number" and it is also the only primitive value which does not equal itself.
  return typeof value === 'number' && value !== value;
}

module.exports = isNaN;