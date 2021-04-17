'use strict';

/**
 * Checks if a value is a date object.
 *
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
  return Object.prototype.toString.call(value) === '[object Date]';
}

module.exports = isDate;
