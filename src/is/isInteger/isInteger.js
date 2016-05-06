/**
 * Checks if 'value' is an integer number.
 * @param {*} value The value to check.
 * @return {Boolean} Returns true if value is integer, else false.
 */
function isInteger(value) {
    'use strict';

    if (Number.isInteger) {
        return Number.isInteger(value);
    }

    return (Object.prototype.toString.call(value) === '[object Number]' ||
        typeof value === 'number') &&
        value !== Infinity && value !== -Infinity &&
        Math.floor(value) === value;
}
