/**
 * Checks if 'value' is a truthy one.
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if the 'value' is truthy, else false.
 * @example
 *
 * isTruthy(true);
 * // -> true
 *
 * isTruthy(' ');
 * // -> true
 *
 * isTruthy(1);
 * // -> true
 *
 * isTruthy(false);
 * // -> false
 *
 * isTruthy('');
 * // -> false
 *
 * isTruthy();
 * // -> false
 *
 * isTruthy(0);
 * // -> false
 *
 * isTruthy(NaN);
 * // -> false
 */
function isTruthy(value) {
  'use strict';

  return value != null && // value is existy
    value !== false &&  // obviously :)
    value === value &&  // check if is not NaN (NaN is falsy)
    value !== '' &&     // empty string is falsy
    value !== 0;        // 0 is the only falsy number
}
