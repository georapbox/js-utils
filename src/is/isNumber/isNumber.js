/**
 * Checks if 'value' is a number.
 * Note: NaN is considered a number.
 * @param {*} value The value to check.
 * @return {Boolean} Returns true if 'value' is a number, else false.
 */
function isNumber(value) {
    'use strict';
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}
