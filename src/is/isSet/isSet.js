/**
 * Checks if value is classified as a Set object.
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if `value` is classified as a Set object, else false.
 * @example
 *
 * isSet(new Set());
 * // -> true
 *
 * isSet(new WeakSet());
 * // -> false
 */
function isSet(value) {
    'use strict';

    return typeof value === 'object' &&
        Object.prototype.toString.call(value) === '[object Set]';
}
