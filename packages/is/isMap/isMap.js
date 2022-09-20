'use strict';

/**
 * Checks if a value is classified as a Map object.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if value is classified as a Map object, else false.
 * @example
 *
 * isMap(new Map());
 * // => true
 *
 * isMap(new WeakMap());
 * // => false
 *
 * isMap(new Map([['foo', 'bar'], ['hello', 'world']]));
 * // => true
 *
 * isMap({foo: 'bar', 'hello': 'world'});
 * // => false
 */
const isMap = value => {
  return typeof value === 'object' && Object.prototype.toString.call(value) === '[object Map]';
};

module.exports = isMap;
