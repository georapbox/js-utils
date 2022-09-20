'use strict';

/**
 * Checks if a value is a falsy one.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} Returns `true` if the value is falsy, otherwise `false`.
 * @example
 *
 * isFalsy(true);
 * // => false
 *
 * isFalsy(' ');
 * // => false
 *
 * isFalsy(1);
 * // => false
 *
 * isFalsy(false);
 * // => true
 *
 * isFalsy('');
 * // => true
 *
 * isFalsy();
 * // => true
 *
 * isFalsy(0);
 * // => true
 *
 * isFalsy(NaN);
 * // => true
 */
const isFalsy = value => !value;

module.exports = isFalsy;
