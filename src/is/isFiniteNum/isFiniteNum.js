/**
 * Checks if 'value' is a finite number.
 * @param {Number} value The 'value' to check.
 * @return {Boolean} true|false Returns true if value is a finite number, else false.
 */
function isFiniteNum(value) {
    'use strict';
    if (value == null || typeof value !== 'number') {
        return false;
    }
    return value !== Infinity && value !== -Infinity && value === value;
}
