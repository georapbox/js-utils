'use strict';

/**
 * Checks if 'value' is a falsy one.
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if the 'value' is falsy, else false.
 * @example
 *
 * isFalsy(true);
 * // -> false
 *
 * isFalsy(' ');
 * // -> false
 *
 * isFalsy(1);
 * // -> false
 *
 * isFalsy(false);
 * // -> true
 *
 * isFalsy('');
 * // -> true
 *
 * isFalsy();
 * // -> true
 *
 * isFalsy(0);
 * // -> true
 *
 * isFalsy(NaN);
 * // -> true
 */
function isFalsy(value) {
  return value == null // value is non existy
    || value === false // obviously :)
    || value !== value // check if is NaN (NaN is falsy)
    || value === '' // empty string is falsy
    || value === 0; // 0 is the only falsy number
}

module.exports = isFalsy;