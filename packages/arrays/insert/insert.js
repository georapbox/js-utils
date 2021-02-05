'use strict';

/**
 * Inserts elements to array at specific index.
 *
 * @param {Array} array The array to insert elements to.
 * @param {Number} start The index to insert elements.
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
 */
function insert(array, start /* [element1 [, element2 [, ...]]] */) {
  var _len, _key, elements, result, i;

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof start !== 'number') {
    throw new TypeError('Expected a number for second argument');
  }

  for (_len = arguments.length, _key = 2, elements = new Array(_len > 2 ? _len - 2 : 0); _key < _len; _key++) {
    elements[_key - 2] = arguments[_key];
  }

  result = array.slice(0);

  for (i = 0; i < elements.length; i++) {
    result.splice(start++, 0, elements[i]);
  }

  return result;
}

module.exports = insert;
