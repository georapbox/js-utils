'use strict';

/**
 * Creates a slice of `array` with elements taken from the beginning, until `predicate` returns falsy.
 * The `predicate` is invoked with three arguments: (`value`, `index`, `array`).
 *
 * @category Array
 * @param {Array} array The array to process.
 * @param {function} predicate The function invoked per iteration.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `predicate` is not function but not if is `undefined`.
 * @return {Array} The slice of `array`.
 * @example
 *
 * var books = [
 *   {title: 'Javascript Design Patterns', read: false},
 *   {title: 'Programming Javascript Applications', read: false},
 *   {title: 'JavaScript: The Good Parts', read: true},
 *   {title: 'Eloquent Javascript', read: false}
 * ];
 *
 * takeWhile(books, function (book, index, books) {
 *   return !book.read;
 * });
 * // -> [{title: 'Javascript Design Patterns', read: false}, {title: 'Programming Javascript Applications', read: false}]
 */
function takeWhile(array, predicate) {
  var index, length;

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  index = -1;
  length = array.length;

  while (++index < length && predicate(array[index], index, array)) {
    continue;
  }

  return array.slice(0, index);
}

module.exports = takeWhile;