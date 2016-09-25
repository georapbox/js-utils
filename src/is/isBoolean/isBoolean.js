/**
 * Checks if 'value' is a boolean value.
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if the 'value' is a boolean value, else false.
 * @example
 *
 * isBoolean(true);
 * // -> true
 *
 * isBoolean(false);
 * // -> true
 *
 * isBoolean({a: 'a'});
 * // -> false
 *
 * isBoolean(null);
 * // -> false
 */
function isBoolean(value) {
  'use strict';

  return value === true || value === false ||
      Object.prototype.toString.call(value) === '[object Boolean]';
}
