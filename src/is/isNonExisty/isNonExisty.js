/**
 * Checks if 'value' is non existy (null or undefined).
 * @param {*} value The value to check.
 * @return {Boolean} true|false Returns true if the 'value' is non existy, else false.
 */
function isNonExisty(value) {
    'use strict';
    // NOTE: Using non strict equality to check for null or undefined.
    return value == null;
}
