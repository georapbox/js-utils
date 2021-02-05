'use strict';

/**
 * Creates an array of unique values that are included in all given arrays.
 * The order of result values is determined by the order they occur in the first array.
 *
 * @param {Array} ...arrays The arrays to intersect.
 * @throws {TypeError} If any of the arguments is not array.
 * @return {Array} The array of intersecting values.
 * @example
 *
 * var arrA = [NaN, 3, 8, 'foo', 'bar'];
 * var arrB = [2, 7, 'foo', NaN, 3];
 * var arrC = [1, 2, 3, NaN];
 *
 * intersect(arrA, arrB);
 * // -> [NaN, 3, 'foo']
 *
 * intersect(arrA, arrB, arrC);
 * // -> [NaN, 3]
 */
function intersect(/* ...arrays */) {
  var _len = arguments.length;
  var _key = 0;
  var arrays = new Array(_len);

  for (; _key < _len; _key += 1) {
    arrays[_key] = arguments[_key];
  }

  while (_len--) {
    if (!Array.isArray(arrays[_len])) {
      throw new TypeError('Expected all arguments to be arrays');
    }
  }

  return arrays.reduce(function (accumArray, currentArray) {
    return accumArray.filter(function (element) {
      var index, currentElement;

      if (Array.prototype.includes) {
        return currentArray.includes(element);
      } else {
        index = 0;

        while (index < currentArray.length) {
          currentElement = currentArray[index];

          if (
            element === currentElement
            || (element !== element && currentElement !== currentElement) // Check for NaN values
          ) {
            return true;
          }

          index += 1;
        }

        return false;
      }
    });
  });
}

module.exports = intersect;
