'use strict';

/**
 * Checks if a value matches a hexadecimal color regular expression.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if value is a hexadecimal color regexp, else false.
 * @example
 *
 * isHexColor('#f5f5f5');
 * // => true
 *
 * isHexColor('#9c0');
 * // => true
 *
 * isHexColor('333');
 * // => true
 *
 * isHexColor(333);
 * // => true
 *
 * isHexColor(6.6);
 * // => false
 *
 * isHexColor('foo');
 * // => false
 *
 * isHexColor(null);
 * // => false
 *
 * isHexColor();
 * // => false
 */
const isHexColor = value => /^#?([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);

module.exports = isHexColor;
