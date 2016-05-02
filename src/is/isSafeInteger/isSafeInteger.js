/**
 * Checks if an integer number is in the safe range, i.e., it is correctly represented by JavaScript
 * (where all numbers, including integer numbers, are technically floating point number).
 * @param {*} value The value to check.
 * @return {Boolean} Returns true if safe integer, else false.
 */
function isSafeInteger(value) {
    'use strict';

    if (Number.isSafeInteger) {
        return Number.isSafeInteger(value);
    }

    return typeof value === 'number' &&
        Math.round(value) === value &&
        -(Math.pow(2, 53) - 1) <= value &&
        value <= Math.pow(2, 53) - 1;
}
