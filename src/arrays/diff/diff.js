'use strict';

/**
 * Creates an array with only the unique values from the first array,
 * by excluding all values from the second array using strict equality for comparisons.
 *
 * @category Array
 * @param {Array} arrayA The array to process.
 * @param {Array} arrayB The values to exclude from `arrayA`.
 * @throws {TypeError} If `arrayA` is not array.
 * @throws {TypeError} If `arrayB` is not array but not if `null` or `undefined`.
 * @return {Array} Array of values not included in the exclusion set.
 * @example
 *
 * var obj = {
 *     foo: 'bar'
 * };
 *
 * var a = [1, 2, 3, 4, 5, obj];
 * var b = [5, 2, 10, obj];
 *
 * diff(a, b);
 * // -> [1, 3, 4]
 *
 * diff(a, []);
 * // -> [1, 2, 3, 4, 5, obj]
 *
 * diff(a);
 * // -> [1, 2, 3, 4, 5, obj]
 */
function diff(arrayA, arrayB) {
  var toString = Object.prototype.toString;
  var len, arr;

  if (
    toString.call(arrayA) !== '[object Array]'
    || arrayB != null && toString.call(arrayB) !== '[object Array]'
  ) {
    throw new TypeError('Expected an array');
  }

  len = arrayA.length;
  arr = [];

  if (!arrayB) {
    return arrayA;
  }

  while (len--) {
    if (arrayB.indexOf(arrayA[len]) === -1) {
      arr.unshift(arrayA[len]);
    }
  }

  return arr;
}

module.exports = diff;