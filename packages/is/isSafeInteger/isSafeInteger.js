'use strict';

/**
 * Checks if an integer number is in the safe range, i.e., it is correctly represented by JavaScript
 * (where all numbers, including integer numbers, are technically floating point number).
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if safe integer, else false.
 * @example
 *
 * isSafeInteger(3));
 * // => true
 *
 * isSafeInteger(Math.pow(2, 53)));
 * // => false
 *
 * isSafeInteger(-Math.pow(2, 53))).
 * // => false
 *
 * isSafeInteger(Math.pow(2, 53) - 1));
 * // => true
 *
 * isSafeInteger(NaN));
 * // => false
 *
 * isSafeInteger(Infinity));
 * // => false
 *
 * isSafeInteger('3'));
 * // => false
 *
 * isSafeInteger(3.1));
 * // => false
 *
 * isSafeInteger(3.0));
 * // => true
 */
const isSafeInteger = value => {
  if (Number.isSafeInteger) {
    return Number.isSafeInteger(value);
  }

  return typeof value === 'number'
    && Math.round(value) === value
    && -(Math.pow(2, 53) - 1) <= value
    && value <= Math.pow(2, 53) - 1;
};

module.exports = isSafeInteger;
