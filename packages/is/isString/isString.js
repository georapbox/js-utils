'use strict';

/**
 * Checks if a value is string.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if value is string, else false.
 * @example
 *
 * isString(['a', 'b', 'c', 'd']);
 * // => false
 *
 * isString(100);
 * // => false
 *
 * isString('Lorem ipsum dolor sit amet');
 * // => true
 *
 * isString({ a: 'a', b: 'b' });
 * // => false
 */
const isString = value => {
  return typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]';
};

module.exports = isString;
