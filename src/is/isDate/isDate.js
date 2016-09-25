/**
 * Checks if 'value' is a date.
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if 'value' is a date, else returns false.
 * @example
 *
 * isDate(new Date());
 * // -> true
 *
 * isDate(new Date().getTime());
 * // -> false
 */
function isDate(value) {
  'use strict';

  return Object.prototype.toString.call(value) === '[object Date]';
}
