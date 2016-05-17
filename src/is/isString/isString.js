/**
 * Checks if 'value' is string.
 *
 * @category Is
 * @param {*} 'value' to check if is string.
 * @return {Boolean} True if string, else false.
 * @example
 *
 * isString(['a', 'b', 'c', 'd']);
 * // -> false
 *
 * isString(100);
 * // -> false
 *
 * isString('Lorem ipsum dolor sit amet');
 * // -> true
 *
 * isString({ a: 'a', b: 'b' });
 * // -> false
 */
function isString(value) {
    'use strict';

    return !!value && Object.prototype.toString.call(value) === '[object String]';
}
