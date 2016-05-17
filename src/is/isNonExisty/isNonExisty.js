/**
 * Checks if 'value' is non existy (null or undefined).
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if the 'value' is non existy, else false.
 * @example
 *
 * var foo;
 *
 * isNonExisty(foo);
 * // -> true
 *
 * isNonExisty(null);
 * // -> true
 *
 * isNonExisty({foo: 'bar'});
 * // -> false
 *
 * isNonExisty();
 * // -> true
 */
function isNonExisty(value) {
    'use strict';

    return value == null;
}
