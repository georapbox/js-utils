'use strict';

/**
 * Creates a slice of `array` with elements taken from the end, until `predicate` returns falsy.
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
 *   {title: 'Programming Javascript Applications', read: true},
 *   {title: 'JavaScript The Good Parts', read: false},
 *   {title: 'Eloquent Javascript', read: false}
 * ];
 *
 * takeRightWhile(books, function (book, index, books) {
 *   return !book.read;
 * });
 * // => [{title: 'JavaScript The Good Parts', read: false}, {title: 'Eloquent Javascript', read: false}]
 */
const takeRightWhile = (array, predicate) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  const len = array.length;
  let index = len;

  while (--index < len && index >= 0 && predicate(array[index], index, array)) {
    continue;
  }

  return array.slice(index + 1, len);
};

module.exports = takeRightWhile;
