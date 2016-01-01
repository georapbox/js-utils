/**
 * Checks if 'value' is an infinite number.
 * @param {*} value The 'value' to check.
 * @returns {Boolean} Returns true if value is an infinite number, else false.
 */
function isInfiniteNum(value) {
    'use strict';
    var toString = Object.prototype.toString,
        NUMBER = '[object Number]';
    return (typeof value === 'number' || toString.call(value) === NUMBER) && // check if number
        (value === Infinity || value === -Infinity) &&                       // check against infinity
        value === value;                                                     // check if not NaN
}
