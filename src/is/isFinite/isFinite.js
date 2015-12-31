/**
 * Checks if 'value' is a finite number.
 * @param {*} value The 'value' to check.
 * @returns {Boolean} Returns true if value is a finite number, else false.
 */
function isFinite(value) {
    'use strict';
    var toString = Object.prototype.toString,
        NUMBER = '[object Number]';
    return (typeof value === 'number' || toString.call(value) === NUMBER) && // Check if number
        value !== Infinity && value !== -Infinity &&                         // check against infinity
        value === value;                                                     // check if not NaN
}
