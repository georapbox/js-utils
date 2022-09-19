'use strict';

/**
 * Checks if a value is a regular expression.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if the value is a regular expression, else false.
 * @example
 *
 * isRegexp(/^[0-9a-fA-F]+$/);
 * // => true
 *
 * isRegexp('/^[0-9a-fA-F]+$/');
 * // => false
 */
const isRegexp = value => Object.prototype.toString.call(value) === '[object RegExp]';

module.exports = isRegexp;
