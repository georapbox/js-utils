/**
 * Checks if 'value' matches a hexadecimal color regular expression.
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if 'value' is a hexadecimal color regexp, else false.
 * @example
 *
 * isHexColor('#f5f5f5');
 * // -> true
 *
 * isHexColor('#9c0');
 * // -> true
 *
 * isHexColor('333');
 * // -> true
 *
 * isHexColor(333);
 * // -> true
 *
 * isHexColor(6.6);
 * // -> false
 *
 * isHexColor('foo');
 * // -> false
 *
 * isHexColor(null);
 * // -> false
 *
 * isHexColor();
 * // -> false
 */
function isHexColor(value) {
  'use strict';

  return /^#?([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
}
