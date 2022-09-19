'use strict';

/**
 * Checks if a value is a primitive data type.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} Returns `true` if value is primitive, otherwise `false`.
 * @example
 *
 * isPrimitive(null); // => true
 *
 * isPrimitive(undefined); // => true
 *
 * isPrimitive(123); // => true
 *
 * isPrimitive(Infinity); // => true
 *
 * isPrimitive(NaN); // => true
 *
 * isPrimitive('foo'); // => true
 *
 * isPrimitive(true); // => true
 *
 * isPrimitive(false); // => true
 *
 * isPrimitive(Symbol('foo')); // => true
 *
 * isPrimitive({}); // => false
 *
 * isPrimitive([]); // => false
 *
 * isPrimitive(function () {}); // => false
 *
 * isPrimitive(new Map()); // => false
 *
 * isPrimitive(new WeakMap()); // => false
 *
 * isPrimitive(new Set()); // => false
 *
 * isPrimitive(new WeakSet()); // => false
 *
 * isPrimitive(new Date()); // => false
 *
 * isPrimitive(/s+/g); // => false
 */
const isPrimitive = value => {
  if (typeof value === 'object') {
    return value === null;
  }

  return typeof value !== 'function';
};

module.exports = isPrimitive;
