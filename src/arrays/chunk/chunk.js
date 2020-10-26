'use strict';

/**
 * Creates an array of elements split into groups the length of `size`.
 * If array can’t be split evenly, the final chunk will be the remaining elements.
 *
 * @category Array
 * @param {Array} array The array to process.
 * @param {Number} [size=0] The length of each chunk. If a float number, it is converted to integer using `parseInt`.
 * @throws {TypeError} If `array` is not array.
 * @return {Array} The new array containing chunks. If `size` is lower than 1, an empty array is returned.
 * @example
 *
 * chunk([1, 2, 3, 4], 2);
 * // -> [[1, 2], [3, 4]]
 *
 * chunk([1, 2, 3, 4, 5], 2);
 * // -> [[1, 2], [3, 4], [5]]
 *
 * chunk([1, 2, 3, 4, 5], -1);
 * // -> []
 *
 * chunk([1, 2, 3, 4, 5]);
 * // -> []
 *
 * chunk([1, 2, 3, 4, 5], null);
 * // -> []
 *
 * chunk([1, 2, 3, 4], 3);
 * // -> [[1, 2, 3], [4]]
 *
 * chunk([1, 2, 3, 4], '3');
 * // -> [[1, 2, 3], [4]]
 *
 * chunk([1, 2, 3, 4], Infinity);
 * // -> [[1, 2, 3, 4]]
 *
 * chunk([1, 2, 3, 4], -Infinity);
 * // -> []
 *
 * chunk([1, 2, 3, 4], 2.7);
 * // -> [[1, 2], [3, 4]]
 *
 * chunk([1, 2, 3, 4], 'test');
 * // -> []
 */
function chunk(array, size) {
  var MAX_INTEGER, length, result, index, resIndex;

  if (Object.prototype.toString.call(array) !== '[object Array]') {
    throw new TypeError('Expected an array');
  }

  MAX_INTEGER = Number.MAX_VALUE || 1.7976931348623157e+308;

  size = size === Infinity || size === -Infinity
    ? (size < 0 ? -1 : 1) * MAX_INTEGER
    : parseInt(size, 10) || 0;

  length = array ? array.length : 0;

  if (!length || size < 1) {
    return [];
  }

  index = 0;
  resIndex = 0;
  result = [Math.ceil(length / size)];

  while (index < length) {
    result[resIndex] = array.slice(index, index += size);
    resIndex += 1;
  }

  return result;
}

module.exports = chunk;