'use strict';

/**
 * Checks if a value is an integer number.
 * If the value is NaN or infinite, return false.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if value is integer, else false.
 * @example
 *
 * isInteger(1);
 * // => true
 *
 * isInteger(9007199254740992);
 * // => true
 *
 * isInteger(-9007199254740992);
 * // => true
 *
 * isInteger(-100000);
 * // => true
 *
 * isInteger(0);
 * // => true
 *
 * isInteger(0.1);
 * // => false
 *
 * isInteger(Math.PI);
 * // => false
 *
 * isInteger(NaN);
 * // => false
 *
 * isInteger('10');
 * // => false
 *
 * isInteger(Number.MAX_VALUE);
 * // => false
 *
 * isInteger(Infinity);
 * // => false
 */
const isInteger = value => {
  if (Number.isInteger) {
    return Number.isInteger(value);
  }

  return (Object.prototype.toString.call(value) === '[object Number]' || typeof value === 'number')
    && value !== Infinity && value !== -Infinity
    && Math.floor(value) === value;
};

module.exports = isInteger;
