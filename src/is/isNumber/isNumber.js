/**
 * Checks if 'value' is a number.
 *
 * @category Is
 * @NOTE: `NaN` is considered to be a number, as so will return true.
 * @param {*} value The value to check.
 * @return {Boolean} True if 'value' is a number, else false.
 * @example
 *
 * isNumber(10);
 * // -> true
 *
 * isNumber('10');
 * // -> false
 *
 * isNumber(new Date());
 * // -> false
 *
 * isNumber(new Date().getTime());
 * // -> true
 *
 * isNumber(true);;
 * // -> false
 *
 * isNumber(null);;
 * // -> false
 *
 * isNumber(undefined);;
 * // -> false
 *
 * isNumber('');
 * // -> false
 *
 * isNumber(NaN);
 * // -> true
 */
function isNumber(value) {
    'use strict';

    return typeof value === 'number' ||
        Object.prototype.toString.call(value) === '[object Number]';
}
