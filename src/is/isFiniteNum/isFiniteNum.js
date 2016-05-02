/**
 * Checks if 'value' is a finite number.
 * @param {Number} value The 'value' to check.
 * @return {Boolean} true|false Returns true if value is a finite number, else false.
 */
function isFiniteNum(value) {
    'use strict';

    if (Number.isFinite) {
        return Number.isFinite(value);
    }

    return value != null && typeof value === 'number' &&
        value !== Infinity && value !== -Infinity &&
        value === value;
}
