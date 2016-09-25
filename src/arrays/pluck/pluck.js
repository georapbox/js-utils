/**
 * Retrieves the value of a specified property from all elements in an array.
 *
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {String} key The name of the property to pluck.
 * @throws {TypeError} If `array` is not array.
 * @returns {Array} Returns the result array.
 * @example
 *
 * var books = [
 *   {title: 'Around the World in Eighty Days', author: 'Jules Verne'},
 *   {title: 'The Mist', author: 'Stephen King'},
 *   {title: 'Journey to the Center of the Earth', author: 'Jules Verne'},
 *   {title: 'The Monster in the Closet', author: 'Stephen King'}
 * ];
 *
 * pluck(books, 'title');
 * // -> ["Around the World in Eighty Days", "The Mist", "Journey to the Center of the Earth", "The Monster in the Closet"]
 *
 * pluck(books, 'author');
 * // -> ["Jules Verne", "Stephen King", "Jules Verne", "Stephen King"]
 */
function pluck(array, key) {
  'use strict';

  var arr, index, len, arrItem;

  if (Object.prototype.toString.call(array) !== '[object Array]') {
    throw new TypeError('Expected an array');
  }

  arr = [];
  index = -1;
  len = array.length;
  arrItem;

  while (++index < len) {
    arrItem = array[index];

    if ({}.hasOwnProperty.call(arrItem, key)) {
      arr[arr.length] = arrItem[key];
    }
  }

  return arr;
}
