'use strict';

/**
 * Creates an array of elements split into two groups (arrays), the first of which contains the elements that the `predicate` returns truthy for,
 * the second of which contains the elements that the `predicate` returns falsy for.
 * The predicate is invoked with three arguments: (value, index, collection).
 *
 * @param {Array} array The array to iterate over.
 * @param {Function} [predicate=Identity] The function invoked per iteration.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `predicate` is defined but not a function.
 * @returns {Array} Returns the array of grouped elements.
 * @example
 *
 * const users = [{
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
 * partition(users, user => user.isAdmin);
 * // => [[{ name: 'John', isAdmin: true }, { name: 'Alice', isAdmin: true }], [{ name: 'George', isAdmin: false }]]
 *
 * const numbers = [1, 3, 5, -4, 6, -2];
 *
 * partition(numbers, num => num > 0);
 * // => [[1, 3, 5, 6], [-4, -2]]
 */
const partition = (array, predicate = x => x) => {
  const part1 = [];
  const part2 = [];

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  for (let index = 0; index < array.length; index += 1) {
    const value = array[index];
    predicate(value, index, array) ? part1.push(value) : part2.push(value);
  }

  return [part1, part2];
};

module.exports = partition;
