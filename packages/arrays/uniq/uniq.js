'use strict';

/**
 * Removes duplicate primitive values from an array.
 *
 * @param {Array} array The array to process.
 * @throws {TypeError} If `array` is not array.
 * @returns {Array} Returns the result (duplicates-free) array.
 * @example
 *
 * uniq(['a', 'a', 'b', true, '2', 2, false, true]);
 * // -> ['a', 'b', true, '2', 2, false]
 */
const uniq = array => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  const duplicates = [];

  for (let i = 0; i < array.length; i += 1) {
    let found = false;

    for (let j = 0; j < duplicates.length; j += 1) {
      if (array[i] === duplicates[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      duplicates.push(array[i]);
    }
  }

  return duplicates;
};

module.exports = uniq;
