'use strict';

/**
 * Retrieves the value of a specified property from all elements in an array.
 *
 * @param {Array} array The array to iterate over.
 * @param {String} [key] The name of the property to pluck.
 * @throws {TypeError} If `array` is not array.
 * @returns {Array} Returns the result array.
 * @example
 *
 * const books = [
 *   {title: 'Around the World in Eighty Days', author: 'Jules Verne'},
 *   {title: 'The Mist', author: 'Stephen King'},
 *   {title: 'Journey to the Center of the Earth', author: 'Jules Verne'},
 *   {title: 'The Monster in the Closet', author: 'Stephen King'}
 * ];
 *
 * pluck(books, 'title');
 * // => ["Around the World in Eighty Days", "The Mist", "Journey to the Center of the Earth", "The Monster in the Closet"]
 *
 * pluck(books, 'author');
 * // => ["Jules Verne", "Stephen King", "Jules Verne", "Stephen King"]
 */
const pluck = (array, key) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  const arr = [];
  let index = -1;

  while (++index < array.length) {
    const arrItem = array[index];

    if (Object.prototype.hasOwnProperty.call(arrItem, key)) {
      arr[arr.length] = arrItem[key];
    }
  }

  return arr;
};

module.exports = pluck;
