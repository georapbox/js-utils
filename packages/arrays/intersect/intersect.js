'use strict';

/**
 * Creates an array of unique values that are included in all given arrays.
 * The order of result values is determined by the order they occur in the first array.
 *
 * @param {...Array} arrays The arrays to intersect.
 * @throws {TypeError} If any of the arguments is not array.
 * @returns {Array} The array of intersecting values.
 * @example
 *
 * const arrA = [NaN, 3, 8, 'foo', 'bar'];
 * const arrB = [2, 7, 'foo', NaN, 3];
 * const arrC = [1, 2, 3, NaN];
 *
 * intersect(arrA, arrB);
 * // => [NaN, 3, 'foo']
 *
 * intersect(arrA, arrB, arrC);
 * // => [NaN, 3]
 */
const intersect = (...arrays) => {
  let len = arrays.length;

  while (len--) {
    if (!Array.isArray(arrays[len])) {
      throw new TypeError('Expected all arguments to be arrays');
    }
  }

  return arrays.reduce((accumArray, currentArray) => {
    return accumArray.filter(function (element) {
      if (Array.prototype.includes) {
        return currentArray.includes(element);
      } else {
        let index = 0;

        while (index < currentArray.length) {
          const currentElement = currentArray[index];

          if (element === currentElement || Number.isNaN(element) && Number.isNaN(currentElement)) {
            return true;
          }

          index += 1;
        }

        return false;
      }
    });
  });
};

module.exports = intersect;
