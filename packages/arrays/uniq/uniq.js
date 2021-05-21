'use strict';

/**
 * Removes duplicate primitive values from an array.
 *
 * @param {Array} array The array to process.
 * @throws {TypeError} If `array` is not array.
 * @return {Array} Returns the result (duplicates-free) array.
 * @example
 *
 * uniq(['a', 'a', 'b', true, '2', 2, false, true]);
 * // -> ['a', 'b', true, '2', 2, false]
 */
function uniq(array) {
  var duplicates, len, i, j, found;

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  duplicates = [];
  len = array.length;

  for (i = 0; i < len; i += 1) {
    found = false;

    for (j = 0; j < duplicates.length; j += 1) {
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
}

module.exports = uniq;
