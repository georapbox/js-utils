'use strict';

/**
 * Reverses an array (not in place).
 * The first array element becomes the last and the last becomes the first.
 *
 * @category Array
 * @param {Array} array The array to reverse.
 * @throws {TypeError} If `array` is not array.
 * @return {Array} Returns a new array reversed.
 * @example
 *
 * reverse([1, 2, 3]);
 * // -> [3, 2, 1]
 */
function reverse(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  return array.slice(0).reverse();
}

module.exports = reverse;