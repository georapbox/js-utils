'use strict';

/**
 * Checks if a value is a truthy one.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} Returns `true` if the value is truthy, otherwise `false`.
 * @example
 *
 * isTruthy(true);
 * // => true
 *
 * isTruthy(' ');
 * // => true
 *
 * isTruthy(1);
 * // => true
 *
 * isTruthy(false);
 * // => false
 *
 * isTruthy('');
 * // => false
 *
 * isTruthy();
 * // => false
 *
 * isTruthy(0);
 * // => false
 *
 * isTruthy(NaN);
 * // => false
 */
const isTruthy = value => !!value;

module.exports = isTruthy;
