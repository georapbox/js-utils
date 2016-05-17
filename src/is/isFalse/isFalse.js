/**
 * Checks if 'value' is false (strict equality).
 *
 * @category Is
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
function isFalse(value) {
    'use strict';
    return value === false;
}
