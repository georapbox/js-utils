/**
 * Checks if value is array-like.
 * A value is considered array-like if it’s not a function and has a `value.length` that’s an
 * integer greater than or equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.
 * @param {*} value The value to check.
 * @return {Boolean} Returns true if value is array-like, else false.
 */
function isArrayLike(value) {
    'use strict';

    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
        len = value && value.length;

    return value != null && typeof value !== 'function' &&
        typeof len === 'number' && len > -1 && len % 1 === 0 && len <= MAX_SAFE_INTEGER;
}
