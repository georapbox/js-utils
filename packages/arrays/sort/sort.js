'use strict';

/**
 * Sorts an array of primitive values of the same type.
 * Any `null`, `undefined` or `NaN` values are removed from the result array.
 * If array values are of different type, the result is not guaranteed to be correct.
 *
 * @param {Array} array The array to sort.
 * @param {Boolean} [ascending=true] Defines the sort order. Falsy values will assume descending.
 * @throws {TypeError} If `array` is not array.
 * @returns {Array} The new sorted array.
 * @example
 *
 * sort(['Delta', 'Omega', 'alpha', 'CHARLIE', 'lorem', 'bravo']);
 * // => ['alpha', 'bravo', 'CHARLIE', 'Delta', 'lorem', 'Omega']
 *
 * sort(['Delta', 'Omega', 'alpha', 'CHARLIE', 'lorem', 'bravo'], false);
 * // => ['Omega', 'lorem', 'Delta', 'CHARLIE', 'bravo', 'alpha']
 *
 * sort([4, 6, 2, 9, 100, 321, -2, 99], true);
 * // => [-2, 2, 4, 6, 9, 99, 100, 321]
 *
 * sort([4, 6, 2, 9, 100, 321, -2, 99], false);
 * // => [321, 100, 99, 9, 6, 4, 2, -2]
 *
 * sort([4, 6, undefined, 2, 9, -10, 100, 321, -2, null, 99], true);
 * // => [-10, -2, 2, 4, 6, 9, 99, 100, 321]
 *
 * sort([4, 6, undefined, 2, 9, -10, 100, 321, -2, null, 99], false);
 * // => [321, 100, 99, 9, 6, 4, 2, -2, -10]
 */
const sort = (array, ascending = true) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  return array.filter(el => el != null && !Number.isNaN(el)) // Remove any `null`, `undefined` or `NaN` values.
    .map(el => typeof el === 'string' ? el.toLowerCase() : el)
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0) * [-1, 1][+!!ascending]);
};

module.exports = sort;
