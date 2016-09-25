/**
 * Sorts an array of primitive values of the same type.
 * Any `null`, `undefined` or `NaN` values are removed from the result array.
 * If array values are of different type, the result is not guaranteed to be correct.
 *
 * @category Array
 * @Note: For legacy browsers use the `Array.prototype.map` and `Array.prototype.filter` polyfills.
 * @param {Array} array The array to sort.
 * @param {Boolean} [ascending=true] Defines the sort order. Default is true (ascending).
 * @throws {TypeError} If `array` is not array.
 * @return {Array} The new sorted array.
 * @example
 *
 * sort(['Delta', 'Omega', 'alpha', 'CHARLIE', 'lorem', 'bravo']);
 * // -> ['alpha', 'bravo', 'CHARLIE', 'Delta', 'lorem', 'Omega']
 *
 * sort(['Delta', 'Omega', 'alpha', 'CHARLIE', 'lorem', 'bravo'], false);
 * // -> ['Omega', 'lorem', 'Delta', 'CHARLIE', 'bravo', 'alpha']
 *
 * sort([4, 6, 2, 9, 100, 321, -2, 99], true);
 * // -> [-2, 2, 4, 6, 9, 99, 100, 321]
 *
 * sort([4, 6, 2, 9, 100, 321, -2, 99], false);
 * // -> [321, 100, 99, 9, 6, 4, 2, -2]
 *
 * sort([4, 6, undefined, 2, 9, -10, 100, 321, -2, null, 99], true);
 * // -> [-10, -2, 2, 4, 6, 9, 99, 100, 321]
 *
 * sort([4, 6, undefined, 2, 9, -10, 100, 321, -2, null, 99], false);
 * // -> [321, 100, 99, 9, 6, 4, 2, -2, -10]
 */
function sort(array, ascending) {
  'use strict';

  // Remove any `null`, `undefined` or `NaN` values.
  var filtered;

  if (Object.prototype.toString.call(array) !== '[object Array]') {
    throw new TypeError('Expected an array');
  }

  filtered = array.filter(function (el) {
    return el != null && el === el;
  });

  return filtered.map(function (el, idx) {
    return {
      index: idx,
      value: typeof el === 'string' ? el.toLowerCase() : el
    };
  }).sort(function (a, b) {
    if (ascending == null) {
      ascending = true;
    }
    return (a.value < b.value ? -1 : a.value > b.value ? 1 : 0) * [-1, 1][+!!ascending];
  }).map(function (el) {
    return filtered[el.index];
  });
}
