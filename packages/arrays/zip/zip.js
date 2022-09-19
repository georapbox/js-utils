'use strict';

/**
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
 * the second of which contains the second elements of the given arrays, and so on.
 *
 * @param {...Array} arrays The arrays to process.
 * @throws {TypeError} If any of the arguments is not array.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * zip([1, 2, 3], [11, 22, 33], [111, 222, 333]);
 * // => [ [1, 11, 111], [2, 22, 222], [3, 33, 333] ]
 *
 * zip([1, 2, 3], [11, 22, 33], [111, 222]);
 * // => [ [1, 11, 111], [2, 22, 222], [3, 33, undefined] ]
 *
 * zip([1, 2, 3], [11, 22, 33], [111, 222]);
 * // => [ [1, 11, 111], [2, 22, undefined], [3, undefined, undefined] ]
 *
 * zip([], []);
 * // => []
 *
 * zip();
 * // => []
 */
const zip = (...arrays) => {
  let len = arrays.length;

  while (len--) {
    if (!Array.isArray(arrays[len])) {
      throw new TypeError('Expected all arguments passed to be arrays');
    }
  }

  return arrays
    .reduce((a, b) => a.length > b.length ? a : b, []) // Find the longest of the arrays, to begin mapping from this one.
    .map((_, index) => arrays.map(array => array[index]));
};

module.exports = zip;
