'use strict';

/**
 * Checks if a value is classified as a WeakSet object.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if value is classified as a WeakSet object, else false.
 * @example
 *
 * isWeakSet(new WeakSet());
 * // => true
 *
 * isWeakSet(new Set());
 * // => false
 */
const isWeakSet = value => {
  return typeof value === 'object' && Object.prototype.toString.call(value) === '[object WeakSet]';
};

module.exports = isWeakSet;
