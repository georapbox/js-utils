'use strict';

/**
 * Checks if a value is `true` (strict equality).
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if the value is true, else false.
 * @example
 *
 * isTrue(true);
 * // => true
 *
 * isTrue(false);
 * // => false
 *
 * isTrue();
 * // => false
 */
const isTrue = value => value === true;

module.exports = isTrue;
