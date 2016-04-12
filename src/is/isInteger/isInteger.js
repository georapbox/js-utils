/**
 * Checks if 'value' is an integer number.
 * @param {*} value The value to check.
 * @return {Boolean} true|false If the target value is an integer, returns true, otherwise returns false.
 *         If the value is NaN or infinite, returns false.
 */
function isInteger(value) {
    'use strict';
    return (Object.prototype.toString.call(value) === '[object Number]' ||
        typeof value === 'number') &&
        value !== Infinity && value !== -Infinity &&
        Math.floor(value) === value;
}
