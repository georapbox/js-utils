'use strict';

/**
 * Creates an array of elements split into two groups (arrays), the first of which contains the elements that the `predicate` returns truthy for,
 * the second of which contains the elements that the `predicate` returns falsy for.
 * The predicate is invoked with three arguments: (value, index, collection).
 *
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Function} [predicate=Identity] The function invoked per iteration.
 * @throws {TypeError} If `array` is not array.
 * @returns {Array} Returns the array of grouped elements.
 * @example
 *
 * var users = [{
 *   name: 'John',
 *   isAdmin: true
 * }, {
 *   name: 'George',
 *   isAdmin: false
 * }, {
 *   name: 'Alice',
 *   isAdmin: true
 * }];
 *
 * partition(users, function (element) {
 *   return element.isAdmin
 * });
 * // -> [[{ name: 'John', isAdmin: true }, { name: 'Alice', isAdmin: true }], [{ name: 'George', isAdmin: false }]]
 *
 *
 * var numbers = [1, 3, 5, -4, 6, -2];
 *
 * partition(numbers, function (element) {
 *   return element > 0;
 * });
 * // -> [[1, 3, 5, 6], [-4, -2]]
 */
function partition(array, predicate) {
  var part1 = [];
  var part2 = [];
  var index, value;

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof predicate !== 'function') {
    predicate = function (x) {
      return x;
    };
  }

  for (index = 0; index < array.length; index += 1) {
    value = array[index];
    predicate(value, index, array) ? part1.push(value) : part2.push(value);
  }

  return [part1, part2];
}

module.exports = partition;