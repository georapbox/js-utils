/**
 * Checks if 'value' is a finite number.
 * @param {Number} value The 'value' to check.
 * @returns {Boolean} Returns true if value is a finite number, else false.
 */
function isFiniteNum(value) {
    'use strict';
    if (value == null || (Object.prototype.toString.call(value) !== '[object Number]' && typeof value !== 'number')) {
        throw {
            name: 'TypeError',
            message: 'Expected a parameter of type "Number", instead saw ' + typeof value
        };
    }
    return value !== Infinity && value !== -Infinity && // check against infinity
        value === value;                                // check if not NaN
}
