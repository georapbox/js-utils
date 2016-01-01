/**
 * Checks if a number is even.
 * @param {Number} value The number to check.
 * @returns {Boolean} Returns true if number is even, else false.
 */
function isEvenNum(value) {
    'use strict';
    if (value == null || (Object.prototype.toString.call(value) !== '[object Number]' && typeof value !== 'number')) {
        throw {
            name: 'TypeError',
            message: 'Expected a parameter of type "Number", instead saw ' + typeof value
        };
    }
    return value & 1 ? false : true;
}
