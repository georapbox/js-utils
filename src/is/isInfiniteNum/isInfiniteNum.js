/**
 * Checks if 'value' is an infinite number.
 * @param {Number} value The number to check.
 * @returns {Boolean} Returns true if value is an infinite number, else false.
 */
function isInfiniteNum(value) {
    'use strict';
    if (value == null || (Object.prototype.toString.call(value) !== '[object Number]' && typeof value !== 'number')) {
        throw {
            name: 'TypeError',
            message: 'Expected a parameter of type "Number", instead saw ' + typeof value
        };
    }
    return (value === Infinity || value === -Infinity) && // check against infinity
        value === value;                                  // check if not NaN
}
