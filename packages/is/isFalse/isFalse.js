'use strict';

/**
 * Checks if a value is `false` (strict equality).
 *
 * @param {*} value The value to check.
 * @return {Boolean} True if the 'value' is false, else false.
 * @example
 *
 * isFalse(false);
 * // -> true
 *
 * isFalse(true);
 * // -> false
 *
 * isFalse();
 * // -> false
 */
const isFalse = value => value === false;

module.exports = isFalse;
