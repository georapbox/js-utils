'use strict';

/**
 * Creates a slice of `array` with elements taken from the beginning, until `predicate` returns falsy.
 * The `predicate` is invoked with three arguments: (`value`, `index`, `array`).
 *
 * @param {Array} array The array to process.
 * @param {function} predicate The function invoked per iteration.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `predicate` is not function but not if is `undefined`.
 * @returns {Array} The slice of `array`.
 * @example
 *
 * const books = [
 *   {title: 'Javascript Design Patterns', read: false},
 *   {title: 'Programming Javascript Applications', read: false},
 *   {title: 'JavaScript: The Good Parts', read: true},
 *   {title: 'Eloquent Javascript', read: false}
 * ];
 *
 * takeWhile(books, function (book, index, books) {
 *   return !book.read;
 * });
 * // => [{title: 'Javascript Design Patterns', read: false}, {title: 'Programming Javascript Applications', read: false}]
 */
const takeWhile = (array, predicate) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  let index = -1;

  while (++index < array.length && predicate(array[index], index, array)) {
    continue;
  }

  return array.slice(0, index);
};

module.exports = takeWhile;
