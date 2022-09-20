'use strict';

/**
 * Checks if a value is a flat array.
 * If the value is not array, will return `false`.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} Returns `true` if value is flat array, otherwise returns `false`.
 * @example
 *
 * isFlatArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
 * // => true
 *
 * isFlatArray([1, 2, [3], [4, 5], 6, 7, [8], 9]);
 * // => false
 *
 * isFlatArray([]);
 * // => true
 *
 * isFlatArray(new Set());
 * // => false
 */
const isFlatArray = value => {
  if (!Array.isArray(value)) {
    return false;
  }

  for (let i = 0; i < value.length; i += 1) {
    if (Array.isArray(value[i])) {
      return false;
    }
  }

  return true;
};

module.exports = isFlatArray;
