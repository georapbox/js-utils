'use strict';

/**
 * Creates an object composed from key-value pairs.
 *
 * @param {Array.<Array>} array The key-value pairs array.
 * @throws {TypeError} If `array` is not array.
 * @returns {Object} Returns the result object.
 * @example
 *
 * fromPairs([['Javascript', 10], ['PHP', 3], ['Java', 4]]);
 * // -> { 'Javascript': 10, 'PHP': 3, 'Java': 4 }
 */
function fromPairs(array) {
  var index, length, result, pair;

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
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