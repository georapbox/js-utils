'use strict';

/**
 * Creates a new array with all elements that pass the test implemented by the provided callback function.
 *
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {function} callback Function to test each element of the array.
 * @param {*} [thisArg] Value to use as `this` when executing callback.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `callback` is not function.
 * @return {Array} Returns the result array.
 * @example
 *
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 *
 * filter(arr, function (item, index, obj) {
 *   return typeof item === 'string';
 * });
 * // -> ['a', 'b', 'c']
 *
 * filter(arr, function (item, index, obj) {
 *   return item.a === 'b' || item === 2;
 * });
 * // -> [{a: 'b'}, 2]
 */
function filter(array, callback, thisArg) {
  var len, res;

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  len = array.length;
  res = array.slice();

  while (len--) {
    if (!callback.call(thisArg, array[len], len, array)) {
      res.splice(len, 1);
    }
  }

  return res;
}

module.exports = filter;
