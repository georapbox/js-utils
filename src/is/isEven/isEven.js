/**
 * Checks if a value is even.
 *
 * @category Is
 * @param {Number} value The value to check.
 * @return {Boolean} True if number is even, else false.
 * @example
 *
 * isEven(0);
 * // -> true
 *
 * isEven(2);
 * // -> true
 *
 * isEven(3);
 * // -> false
 *
 * isEven(5);
 * // -> false
 *
 * isEven('2');
 * // -> true
 *
 * isEven(null);
 * // -> false
 *
 * isEven();
 * // -> false
 */
function isEven(value) {
    'use strict';

    if (typeof value === 'object') {
        return false;
    }

    return value % 2 === 0 ? true : false;
}
