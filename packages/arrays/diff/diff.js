'use strict';

/**
 * Creates an array with only the unique values from the first array,
 * by excluding all values from the second array using strict equality for comparisons.
 *
 * @param {Array} arrayA The array to process.
 * @param {Array} arrayB The values to exclude from `arrayA`.
 * @throws {TypeError} If any of the arguments passed are not arrays.
 * @returns {Array} Array of values not included in the exclusion set.
 * @example
 *
 * const obj = {
 *   foo: 'bar'
 * };
 *
 * const a = [1, 2, 3, 4, 5, obj];
 * const b = [5, 2, 10, obj];
 *
 * diff(a, b);
 * // => [1, 3, 4]
 *
 * diff(a, []);
 * // => [1, 2, 3, 4, 5, obj]
 */
const diff = (arrayA, arrayB) => {
  if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
    throw new TypeError('Expected both arguments to be arrays');
  }

  let len = arrayA.length;
  const arr = [];

  while (len--) {
    if (arrayB.indexOf(arrayA[len]) === -1) {
      arr.unshift(arrayA[len]);
    }
  }

  return arr;
};

module.exports = diff;
