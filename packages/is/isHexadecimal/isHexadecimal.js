'use strict';

/**
 * Checks if a value matches a hexadecimal regular expression.
 *
 * @param {*} value The value to check.
 * @return {Boolean} True if value is a hexadecimal, else false.
 * @example
 *
 * isHexadecimal('f5f5f5');
 * // -> true
 *
 * isHexadecimal('9c0');
 * // -> true
 *
 * isHexadecimal(333);
 * // -> true
 *
 * isHexadecimal('foo');
 * // -> false
 *
 * isHexadecimal(6.6);
 * // -> false
 */
function isHexadecimal(value) {
  return /^[0-9a-fA-F]+$/.test(value);
}

module.exports = isHexadecimal;
