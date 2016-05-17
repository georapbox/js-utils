/**
 * Checks if "value" is the language type of "Object".
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if "value" is an object, else false.
 * @example
 *
 * isObject({});
 * // -> true
 *
 * isObject(function test() {});
 * // -> true
 *
 * isObject([1, 2, 3]);
 * // -> true
 *
 * isObject('Hello World!');
 * // -> false
 *
 * isObject(false);
 * // -> false
 *
 * isObject(new String('Hello world'));
 * // -> true
 *
 * isObject();
 * // -> false
 */
function isObject(value) {
    'use strict';
    return !!value && typeof value === 'function' || typeof value === 'object';
}
