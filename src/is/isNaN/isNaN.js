/**
 * Determines whether a value is NaN or not.
 * NOTE: NaN is number and it is also the only primitive value which does not equal to itself.
 * @param {*} value The value to check if NaN.
 * @return {Boolean} true|false True if NaN, else false.
 */
function isNaN(value) {
    'use strict';

    if (Number.isNaN) {
        return Number.isNaN(value);
    }

    // NaN is of type "number" and it is also the only
    // primitive value which does not equal itself.
    return value !== value;
}
