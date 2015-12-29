/**
 * Checks if 'value' is existy (Not null or undefined).
 * @param {*} value The value to check.
 * @returns {boolean} Returns true if the 'value' is existy, else false.
 */
function isExisty(value) {
    'use strict';
    // NOTE: Using non strict equality to check for both null and undefined.
    return value != null;
}
