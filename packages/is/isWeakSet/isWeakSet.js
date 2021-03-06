'use strict';

/**
 * Checks if a value is classified as a WeakSet object.
 *
 * @param {*} value The value to check.
 * @return {Boolean} True if value is classified as a WeakSet object, else false.
 * @example
 *
 * isWeakSet(new WeakSet());
 * // -> true
 *
 * isWeakSet(new Set());
 * // -> false
 */
function isWeakSet(value) {
  return typeof value === 'object' && Object.prototype.toString.call(value) === '[object WeakSet]';
}

module.exports = isWeakSet;
