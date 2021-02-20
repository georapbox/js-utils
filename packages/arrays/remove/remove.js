'use strict';

/**
 * Removes one or more elements from an array at the specified index(es).
 *
 * @param {Array} array The initial array to remove elements from.
 * @param {Array.<Number>} indexes An array with the index(es) of the elements to be removed. Non numbers are ignored.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `indexes` is not array.
 * @returns {Array} The result array with the elements specified removed.
 * @example
 *
 * var arr = [1, 2, 3, 4, 5];
 *
 * remove(arr, [0]);
 * // -> [2, 3, 4, 5]
 *
 * remove(arr, [0, 1]);
 * // -> [3, 4, 5]
 *
 * remove(arr, [0, 4]);
 * // -> [2, 3, 4]
 *
 * remove(arr, []);
 * // -> [1, 2, 3, 4, 5]
 *
 * remove(arr, [arr.length]);
 * // -> [1, 2, 3, 4, 5]
 */
function remove(array, indexes) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (!Array.isArray(indexes)) {
    throw new TypeError('Expected an array for second argument');
  }

  return array.filter(function (_, index) {
    return typeof index === 'number' && index === index // check if number and not NaN
      ? indexes.indexOf(index) === -1
      : false;
  });
}

module.exports = remove;
