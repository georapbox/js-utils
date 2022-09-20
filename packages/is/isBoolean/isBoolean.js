'use strict';

/**
 * Checks if a value is boolean.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if the 'value' is a boolean value, else false.
 * @example
 *
 * isBoolean(true);
 * // => true
 *
 * isBoolean(false);
 * // => true
 *
 * isBoolean({a: 'a'});
 * // => false
 *
 * isBoolean(null);
 * // => false
 */
const isBoolean = value => {
  return value === true
    || value === false
    || Object.prototype.toString.call(value) === '[object Boolean]';
};

module.exports = isBoolean;
