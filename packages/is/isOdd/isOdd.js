'use strict';

/**
 * Checks if a value is odd.
 *
 * @param {Number} value The value to check.
 * @returns {Boolean} True if value is odd, else false.
 * @example
 *
 * isOdd(0);
 * // => false
 *
 *isOdd(2);
 * // => false
 *
 * isOdd(3);
 * // => true
 *
 * isOdd(5);
 * // => true
 *
 * isOdd('5');
 * // => true
 *
 * isOdd(null);
 * // => false
 *
 * isOdd();
 * // => false
 */
const isOdd = value => {
  if (typeof value === 'object' || typeof value === 'undefined') {
    return false;
  }

  return value % 2 === 1;
};

module.exports = isOdd;
