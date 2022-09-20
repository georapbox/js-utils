'use strict';

/**
 * Inserts one or more elements to array at a specific index.
 *
 * @param {Array} array The array to insert elements to.
 * @param {Number} start The index to insert elements.
 * If greater than the length of the array, actual starting index will be set to the length of the array.
 * If negative, will begin that many elements from the end.
 * If a float number is passed, it is implicitly converted to integers using `Math.floor()`.
 * @param {*} ...elements The elements to insert to the array.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `start` is not number.
 * @returns {Array} A new array including the new elements.
 * @example
 *
 * const arr = [1, 2, 3];
 *
 * insert(arr, 0, 'a');
 * // => ['a', 1, 2, 3]
 *
 * insert(arr, 2, 'a');
 * // => [1, 2, 'a', 3]
 *
 * insert(arr, -1, 'a');
 * // => [1, 2, 'a', 3]
 *
 * insert(arr, 0.9, 'a');
 * // => ['a', 1, 2, 3];
 *
 * insert(arr, arr.length + 1, 'a');
 * // => [1, 2, 3, 'a']
 *
 * insert(arr, 1, 'a', 'b', 'c');
 * // => [1, 'a', 'b', 'c', 2, 3]
 *
 * insert(arr, 2, undefined);
 * // => [1, 2, undefined, 3]
 *
 * insert(arr, 2);
 * // => [1, 2, 3]
 */
const insert = (array, start, ...elements) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof start !== 'number') {
    throw new TypeError('Expected a number for second argument');
  }

  const result = [...array];

  result.splice(start, 0, ...elements);

  return result;
};

module.exports = insert;
