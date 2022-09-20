'use strict';

/**
 * Checks if a value is classified as a WeakMap object.
 *
 * @param {value} value The value to check.
 * @returns {Boolean} True if value is classified as a WeakMap object, else false.
 * @example
 *
 * isWeakMap(new WeakMap());
 * // => true
 *
 * isWeakMap(new Map());
 * // => false
 *
 * const obj = {
 *   foo: 'bar'
 * };
 *
 * isWeakMap(new WeakMap([[obj, 'foobar']]));
 * // => true
 *
 * isWeakMap([['foo', 'bar'], ['hello', 'world']]);
 * // => false
 */
const isWeakMap = value => {
  return typeof value === 'object' && Object.prototype.toString.call(value) === '[object WeakMap]';
};

module.exports = isWeakMap;
