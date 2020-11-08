'use strict';

/**
 * Checks if `value` is string.
 *
 * @param {*} value The value to check if is string.
 * @return {Boolean} True if string, else false.
 * @example
 *
 * isString(['a', 'b', 'c', 'd']);
 * // -> false
 *
 * isString(100);
 * // -> false
 *
 * isString('Lorem ipsum dolor sit amet');
 * // -> true
 *
 * isString({ a: 'a', b: 'b' });
 * // -> false
 */
function isString(value) {
  return value != null
    && (typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]');
}

module.exports = isString;
