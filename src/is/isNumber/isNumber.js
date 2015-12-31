/**
 * Checks if 'value' is a number.
 * @param {*} value The value to check.
 * @return {Boolean} Returns true if 'value' is a number, else false.
 */
function isNumber(value) {
    'use strict';
    return value === value && // Check if value is not NaN, although typeof NaN === 'number'
        (typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]');
}
