'use strict';

/**
 * Creates a duplicate-free version of an array, using [SameValueZero](https://262.ecma-international.org/7.0/#sec-samevaluezero) for equality comparisons,
 * in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.
 *
 * @param {Array} array The array to process.
 * @throws {TypeError} If `array` is not array.
 * @returns {Array} Returns the result (duplicates-free) array.
 * @example
 *
 * const obj = {foo: 'bar'};
 * const arr = ['foo', 'bar'];
 * const values = ['a', 'a', 'b', '2', 2, obj, obj, arr, arr, true, true, false, false, NaN, NaN];
 *
 * uniq(values);
 * // => ['a', 'b', '2', 2, obj, arr, true, false, NaN]
 */
const uniq = array => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  return Array.from(new Set(array));
};

module.exports = uniq;
