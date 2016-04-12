/**
 * Checks if a number is odd.
 * @param {Number} value The number to check.
 * @return {Boolean} true|false Returns true if number is odd, else false.
 */
function isOddNum(value) {
    'use strict';
    if (value == null || (Object.prototype.toString.call(value) !== '[object Number]' && typeof value !== 'number')) {
        throw {
            name: 'TypeError',
            message: 'Expected a parameter of type "Number", instead saw ' + typeof value
        };
    }
    return value & 1 ? true : false;
}
