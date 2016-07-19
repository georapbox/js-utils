/**
 * Checks if `value` is classified as a WeakMap object.
 *
 * @category Is
 * @param {value} value The value to check.
 * @return {Boolean} True if `value` is classified as a WeakMap object, else false.
 * @example
 *
 * isWeakMap(new WeakMap());
 * // -> true
 *
 * isWeakMap(new Map());
 * // -> false
 *
 * var obj = {
 *   foo: 'bar'
 * };
 *
 * isWeakMap(new WeakMap([[obj, 'foobar']]));
 * // -> true
 *
 * isWeakMap([['foo', 'bar'], ['hello', 'world']]);
 * // -> false
 */
function isWeakMap(value) {
    'use strict';

    return typeof value === 'object' &&
        Object.prototype.toString.call(value) === '[object WeakMap]';
}
