'use strict';

/**
 * Checks if value is classified as a Map object.
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if `value` is classified as a Map object, else false.
 * @example
 *
 * isMap(new Map());
 * // -> true
 *
 * isMap(new WeakMap());
 * // -> false
 *
 * isMap(new Map([['foo', 'bar'], ['hello', 'world']]));
 * // -> true
 *
 * isMap({foo: 'bar', 'hello': 'world'});
 * // -> false
 */
function isMap(value) {
  return typeof value === 'object' && Object.prototype.toString.call(value) === '[object Map]';
}

module.exports = isMap;