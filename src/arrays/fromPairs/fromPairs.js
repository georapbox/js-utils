'use strict';

/**
 * Creates an object composed from key-value pairs.
 *
 * @category Array
 * @param {Array.<Array>} array The key-value pairs array.
 * @throws {TypeError} If `array` is not array.
 * @return {Object} The result object.
 * @example
 *
 * fromPairs([['Javascript', 10], ['PHP', 3], ['Java', 4]]);
 * // -> { 'Javascript': 10, 'PHP': 3, 'Java': 4 }
 */
function fromPairs(array) {
  var index, length, result, pair;

  if (Object.prototype.toString.call(array) !== '[object Array]') {
    throw new TypeError('Expected an array');
  }

  index = 0;
  length = array.length;
  result = {};

  while (index < length) {
    pair = array[index];
    result[pair[0]] = pair[1];
    index += 1;
  }

  return result;
}

module.exports = fromPairs;