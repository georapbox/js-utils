'use strict';

/**
 * Creates an array with all falsy values removed.
 * `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @param {Array} array The array to compact.
 * @throws {TypeError} If `array` is not array.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * compact([0, 1, false, 2, '', 3, null]);
 * // => [1, 2, 3]
 */
const compact = array => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  return array.filter(Boolean);
};

module.exports = compact;
