/**
 * Checks if 'value' is an infinite number.
 * @param {Number} value The number to check.
 * @return {Boolean} true|false Returns true if value is an infinite number, else false.
 */
function isInfiniteNum(value) {
    'use strict';
    if (value == null || typeof value !== 'number') {
        return false;
    }
    return (value === Infinity || value === -Infinity) && value === value;
}
