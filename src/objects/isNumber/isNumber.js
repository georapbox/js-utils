/**
 * Checks if 'value' is a number.
 * Note: NaN is considered a number.
 * @param {*} value The value to check.
 * @return {Boolean} Returns true if 'value' is a number, else false.
 */
function isNumber(value) {
    'use strict';

    return value != null && // NOTE: Using non strict equality to check against null and undefined.
        Object.prototype.toString.call(value) === '[object Number]' &&
        typeof value === 'number' ||
        false;
}
