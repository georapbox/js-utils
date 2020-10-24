'use strict';

/**
 * Gets all but the first element of array.
 *
 * @category Array
 * @param {Array} array The array to process.
 * @throws {TypeError} If `array` is not array.
 * @return {Array} The new tailed array.
 * @example
 *
 * tail([1, 2, 3,]);
 * // -> [2, 3]
 *
 * tail([1]);
 * // -> []
 *
 * tail([]);
 * // -> []
 */
function tail(array) {
  if (Object.prototype.toString.call(array) !== '[object Array]') {
    throw new TypeError('Expected an array');
  }

  return array.slice(1);
}

module.exports = tail;