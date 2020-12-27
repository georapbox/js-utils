'use strict';

/**
 * Creates an array of elements split into groups the length of `size`.
 * If array can’t be split evenly, the final chunk will be the remaining elements.
 *
 * @param {Array} array The array to process.
 * @param {Number} size The length of each chunk. If a float number, it is converted to integer using `Math.floor()`.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `size` is not number.
 * @throws {RangeError} If `size` is not a positive number, or zero, or `NaN`, or greater than `Number.MAX_SAFE_INTEGER`.
 * @return {Array} The new array containing chunks. If `size` is lower than 1, an empty array is returned.
 * @example
 *
 * chunk([1, 2, 3, 4], 2);
 * // -> [[1, 2], [3, 4]]
 *
 * chunk([1, 2, 3, 4, 5], 2);
 * // -> [[1, 2], [3, 4], [5]]
 *
 * chunk([1, 2, 3, 4], 3);
 * // -> [[1, 2, 3], [4]]
 *
 * chunk([1, 2, 3, 4], 2.7);
 * // -> [[1, 2], [3, 4]]
 */
function chunk(array, size) {
  var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
  var len, result, index, resIndex;

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof size !== 'number') {
    throw new TypeError('Expected a number for second argument');
  }

  if (size <= 0 || size > MAX_SAFE_INTEGER || size !== size) {
    throw new RangeError('Expected a positive number lower than Number.MAX_SAFE_INTEGER for second argument');
  }

  size = Math.floor(size);

  len = array.length;

  if (!len) {
    return [];
  }

  index = 0;
  resIndex = 0;
  result = [Math.ceil(len / size)];

  while (index < len) {
    result[resIndex] = array.slice(index, index += size);
    resIndex += 1;
  }

  return result;
}

module.exports = chunk;
