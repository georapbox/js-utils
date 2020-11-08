'use strict';

/**
 * Fills elements of array with value from start up to end (not including end).
 *
 * @param {Array} array The array to fill.
 * @param {*} value The value to fill array with.
 * @param {Number} [start=0] The start position.
 * @param {Number} [end=array.length] The end position.
 * @throws {TypeError} If `array` is not an array.
 * @returns {Array} The new array.
 * @example
 *
 * fill(['a', 'b', 'c'], '*');
 * // -> ['*', '*', '*']
 *
 * fill(['a', 'b', 'c'], '*', 0, 2);
 * // -> ['*', '*', 'c']
 *
 * fill(['a', 'b', 'c'], '*', -1, 3);
 * // -> ['a', 'b', '*']
 *
 * fill(['a', 'b', 'c'], '*', -1, 2);
 * // -> ['a', 'b', 'c']
 *
 * fill(['a', 'b', 'c'], '*', 0, -2);
 * // -> ['*', 'b', 'c']
 *
 * fill(['a', 'b', 'c']);
 * // -> [undefined, undefined, undefined]
 */
function fill(array, value, start, end) {
  var resultArray, length;

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (Array.prototype.fill) {
    return array.fill(value, start, end);
  }

  resultArray = array.slice(0);
  length = resultArray.length;

  if (length === 0) {
    return [];
  }

  start = parseInt(start, 10) || 0;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }

  end = typeof end === 'undefined' || end > length ? length : parseInt(end, 10);

  if (end < 0) {
    end += length;
  }

  if (start > end) {
    end = 0;
  }

  while (start < end) {
    resultArray[start++] = value;
  }

  return resultArray;
}

module.exports = fill;