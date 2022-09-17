'use strict';

/**
 * Reverses an array (not in place).
 * The first array element becomes the last and the last becomes the first.
 *
 * @param {Array} array The array to reverse.
 * @throws {TypeError} If `array` is not array.
 * @return {Array} Returns a new array reversed.
 * @example
 *
 * reverse([1, 2, 3]);
 * // -> [3, 2, 1]
 */
const reverse = array => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  return [...array].reverse();
};

module.exports = reverse;
