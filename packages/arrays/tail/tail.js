'use strict';

/**
 * Gets all but the first element of array.
 *
 * @param {Array} array The array to process.
 * @throws {TypeError} If `array` is not array.
 * @returns {Array} The new tailed array.
 * @example
 *
 * tail([1, 2, 3,]);
 * // => [2, 3]
 *
 * tail([1]);
 * // => []
 *
 * tail([]);
 * // => []
 */
const tail = array => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  return array.slice(1);
};

module.exports = tail;
