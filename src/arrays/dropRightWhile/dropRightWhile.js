/**
 * Creates a slice of `array` excluding elements dropped from the end, until `predicate` returns falsy.
 * The `predicate` is invoked with three arguments: (`value`, `index`, `array`).
 *
 * @category Array
 * @param {Array} array The array to process.
 * @param {function} [predicate] The function invoked per iteration.
 * @return {Array} The slice of `array`.
 * @example
 *
 * var books = [
 *   {title: 'Javascript Design Patterns', read: false},
 *   {title: 'Programming Javascript Applications', read: true},
 *   {title: 'JavaScript The Good Parts', read: false},
 *   {title: 'Eloquent Javascript', read: false}
 * ];
 *
 * dropRightWhile(books, function (book, index, books) {
 *   return !book.read;
 * });
 * // -> [{title: 'Javascript Design Patterns', read: false}, {title: 'Programming Javascript Applications', read: true}]
 *
 */
function dropRightWhile(array, predicate) {
    'use strict';

    var index, length;

    if (Object.prototype.toString.call(array) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    if (predicate == null) {
        return array;
    }

    if (typeof predicate !== 'function') {
        throw new TypeError('Expected a function');
    }

    length = array.length;
    index = length;

    while (--index < length && index >= 0 && predicate(array[index], index, array)) {
        continue;
    }

    return array.slice(0, index + 1);
}
