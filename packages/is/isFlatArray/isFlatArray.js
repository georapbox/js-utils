'use strict';

/**
 * Checks if `value` is a flat array.
 * If the value is not array, will return `false`.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} Returns `true` if value is flat array, otherwise returns `false`.
 * @example
 *
 * isFlatArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
 * // -> true
 *
 * isFlatArray([1, 2, [3], [4, 5], 6, 7, [8], 9]);
 * // -> false
 *
 * isFlatArray([]);
 * // -> true
 *
 * isFlatArray(new Set());
 * // -> false
 */
function isFlatArray(value) {
  var i, len;

  if (!Array.isArray(value)) {
    return false;
  }

  for (i = 0, len = value.length; i < len; i += 1) {
    if (Array.isArray(value[i])) {
      return false;
    }
  }

  return true;
}

module.exports = isFlatArray;
