'use strict';

/**
 * Removes one or more elements from an array at the specified index(es).
 *
 * @param {Array} array The initial array to remove elements from.
 * @param {Array.<Number>} indexes An array with the index(es) of the elements to be removed.
 * Non numbers are ignored. Float numbers, are implicitly converted to integers using `Math.floor()`.
 * If negative index(es) passed, will begin that many elements from the end.
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
 * remove(arr, [-1]);
 * // -> [1, 2, 3, 4]
 *
 * remove(arr, [-1, -4])
 * // -> [1, 3, 4]
 *
 * remove(arr, [0.2, 1.8]);
 * // -> [3, 4, 5]
 *
 * remove(arr, []);
 * // -> [1, 2, 3, 4, 5]
 *
 * remove(arr, [arr.length]);
 * // -> [1, 2, 3, 4, 5]
 */
function remove(array, indexes) {
  var result, i, index;

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (!Array.isArray(indexes)) {
    throw new TypeError('Expected an array for second argument');
  }

  result = array.slice(0);

  for (i = indexes.length - 1; i >= 0; i--) {
    index = indexes[i];

    if (typeof index === 'number' && index === index) { // check if number and not NaN
      result.splice(index, 1);
    }
  }

  return result;
}

module.exports = remove;
