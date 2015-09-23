/**
 * Checks if a number is odd.
 * @param {number} value The number to check.
 * @returns {boolean} Returns true if number is odd, else false.
 */
function isOdd(value) {
    'use strict';

    if (value == null || (Object.prototype.toString.call(value) !== '[object Number]' && typeof value !== 'number')) { // jshint ignore:line
        throw new TypeError('isEven expects a parameter of type "Number", instead saw "' + typeof value + '"');
    }

    return value & 1 ? true : false;
}
