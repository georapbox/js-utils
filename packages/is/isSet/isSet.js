'use strict';

/**
 * Checks if a value is classified as a Set object.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if value is classified as a Set object, else false.
 * @example
 *
 * isSet(new Set());
 * // => true
 *
 * isSet(new WeakSet());
 * // => false
 */
const isSet = value => {
  return typeof value === 'object' && Object.prototype.toString.call(value) === '[object Set]';
};

module.exports = isSet;
