/**
 * Determines whether a value is NaN or not.
 * NOTE: NaN is number and it is also the only primitive value which does not equal to itself.
 * @param {*} value The value to check if NaN.
 * @return {boolean} True if NaN, else false.
 */
function isNaN(value) {
    'use strict';
    return value !== value;
}
