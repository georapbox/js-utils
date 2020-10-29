'use strict';

/**
 * Flattens array recursively.
 *
 * @category Array
 * @param {Array} array the array to flatten.
 * @throws {TypeError} If `array` is not array.
 * @return {Array} the new flattened array.
 * @example
 *
 * flattenDeep([1, [2, [3, [4]], 5], [6]]);
 * // -> [1, 2, 3, 4, 5, 6]
 *
 * function dummy() {
 *   var arr = [1, [2, [3, [4]], 5]];
 *   arr.push(arguments);
 *   arr.push({foo: 'bar', length: 23});
 *   return arr;
 * }
 *
 * flattenDeep(dummy('a', 'b'));
 * // -> [1, 2, 3, 4, 5, 'a', 'b', {foo: 'bar', length: 23}]
 */
function flattenDeep(array) {
  var copy, result, tail;

  function isArguments(value) {
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var argsTag = '[object Arguments]';

    // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
    return hasOwnProperty.call(value, 'callee')
      && (!propertyIsEnumerable.call(value, 'callee') || Object.prototype.toString.call(value) === argsTag);
  }

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (array.length === 0) {
    return array;
  }

  result = [];
  copy = array.slice();
  tail = copy.pop();

  do {
    if (Array.isArray(tail) || isArguments(tail)) {
      copy.push.apply(copy, tail);
    } else {
      result.push(tail);
    }
  } while (copy.length && (tail = copy.pop()) !== undefined);

  result.reverse();

  return result;
}

module.exports = flattenDeep;