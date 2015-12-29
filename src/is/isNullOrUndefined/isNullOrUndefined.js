/**
 * Checks if 'value' is null or undefined.
 * @param {*} value The value to check.
 * @returns {boolean} Returns true if the 'value' is null or undefined, else false.
 */
function isNullOrUndefined(value) {
    'use strict';
    // NOTE: Using non strict equality to check for null or undefined.
    return value == null;
}
