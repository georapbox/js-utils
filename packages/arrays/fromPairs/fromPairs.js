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
const fromPairs = array => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  const result = {};
  let index = 0;

  while (index < array.length) {
    const pair = array[index];
    result[pair[0]] = pair[1];
    index += 1;
  }

  return result;
};

module.exports = fromPairs;
