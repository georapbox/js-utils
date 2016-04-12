/**
 * Checks if 'value' is a number.
 * NOTE: NaN is considered to be a number, as so will return true.
 * @param {*} value The value to check.
 * @return {Boolean} true|false Returns true if 'value' is a number, else false.
 */
function isNumber(value) {
    'use strict';
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}
