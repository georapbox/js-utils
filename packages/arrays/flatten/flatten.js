'use strict';

/**
 * Flattens array a single level deep.
 *
 * @param {Array} array The array to flatten.
 * @throws {TypeError} If `array` is not array.
 * @return {Array} The new flattened array.
 * @example
 *
 * flatten([[1, 2], [3, 4], [5], 6]);
 * // -> [1, 2, 3, 4, 5, 6]
 *
 * flatten([1, [2, [3, [4]], 5], [10]]);
 * // -> [1, 2, [3, [4]], 5, 10]
 *
 * function dummy() {
 *   var arr = [1, [2, [3, [4]], 5]];
 *   arr.push(arguments);
 *   arr.push({foo: 'bar', length: 23});
 *   return arr;
 * }
 *
 * flatten(dummy('a', 'b'));
 * // -> [1, 2, [3, [4]], 5, 'a', 'b', {foo: 'bar', length: 23}]
 */
function flatten(array) {
  var index, length, value, result;

  function isArguments(val) {
    var toString = Object.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var argsTag = '[object Arguments]';

    // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
    return hasOwnProperty.call(val, 'callee')
      && (!propertyIsEnumerable.call(val, 'callee') || toString.call(val) === argsTag);
  }

  function arrayPush(arr, values) {
    var idx = -1;
    var len = values.length;
    var offset = arr.length;

    while (++idx < len) {
      arr[offset + idx] = values[idx];
    }

    return array;
  }

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  index = -1;
  length = array.length;
  result = [];

  while (++index < length) {
    value = array[index];

    if (Array.isArray(value) || isArguments(value)) {
      arrayPush(result, value);
    } else {
      result[result.length] = value;
    }
  }

  return result;
}

module.exports = flatten;