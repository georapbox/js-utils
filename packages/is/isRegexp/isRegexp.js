'use strict';

/**
 * Checks if 'value' is a regular expression.
 *
 * @param {*} value The value to check.
 * @return {Boolean} True if the 'value' is a regular expression, else false.
 * @example
 *
 * isRegexp(/^[0-9a-fA-F]+$/);
 * // -> true
 *
 * isRegexp('/^[0-9a-fA-F]+$/');
 * // -> false
 */
function isRegexp(value) {
  return Object.prototype.toString.call(value) === '[object RegExp]';
}

module.exports = isRegexp;
