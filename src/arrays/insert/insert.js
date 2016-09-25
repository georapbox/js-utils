/**
 * Inserts elements to array at specific index.
 *
 * @category Array
 * @param {Array} array The array to insert elements to.
 * @param {Number} [start=0] The index to insert elements.
 *        If greater than the length of the array, actual starting index will be set to the length of the array.
 *        If negative, will begin that many elements from the end.
 * @param {*} [element1 [, element2 [, ...]]] The elements to add to the array.
 * @throws {TypeError} If `array` is not array.
 * @return {Array} A new array including the new elements.
 * @example
 *
 * var arr = [1, 2, 3, ['x', 'y']];
 *
 * insert(arr, 0, 'a');
 * // -> ['a', 1, 2, 3, ['x', 'y']]
 *
 * insert(arr, 2, 'b');
 * // -> [1, 2, 'b', 3, ['x', 'y']]
 *
 * insert(arr, -1, 'c');
 * // -> [1, 2, 3, 'c', ['x', 'y']]
 *
 * insert(arr, 10, 'd');
 * // -> [1, 2, 3, ['x', 'y'], 'd']
 *
 * insert(arr, 2);
 * // -> [1, 2, 3, ['x', 'y']]
 *
 * insert(arr, 2, undefined);
 * // -> [1, 2, undefined, 3, ['x', 'y']]
 *
 * insert(arr);
 * // -> [1, 2, 3, ['x', 'y']]
 */
function insert(array, start /* [element1 [, element2 [, ...]]] */) {
  'use strict';

  var elements, i, len;

  if (Object.prototype.toString.call(array) !== '[object Array]') {
    throw new TypeError('Expected an array');
  }

  array = array.slice(0);
  elements = Array.prototype.slice.call(arguments, 2);
  start = start || 0;
  i = 0;
  len = elements.length;

  for (; i < len; i += 1) {
    array.splice(start++, 0, elements[i]);
  }

  return array;
}
