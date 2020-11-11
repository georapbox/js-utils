/**
 * Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 *
 * @param {Array} array The initial array to be flattened.
 * @param {Number} [depth=1] The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
 * If unsure of how nested the array is, use `Infinity` to deeply flatten the array.
 * If a number less thatn 1 is provided, it will return a shallow copy of the original array.
 * @throws {TypeError} Throws if `array` is not array.
 * @returns {Array} Returns a new array with the sub-array elements concatenated into it.
 * @example
 *
 * var arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
 *
 * flat(arr);
 * // -> [1, 2, 3, 4, [5, 6, [7, 8]]]
 *
 * flat(arr, 2);
 * // -> [1, 2, 3, 4, 5, 6, [7, 8]]
 *
 * flat(arr, 3);
 * // -> [1, 2, 3, 4, 5, 6, 7, 8]
 *
 * flat(arr, Infinity);
 * // -> [1, 2, 3, 4, 5, 6, 7, 8]
 *
 * flat(arr, 0);
 * // -> [1, 2, [3, 4, [5, 6, [7, 8]]]]
 */
function flat(array, depth) {
  var result, length, element, index;

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (Array.prototype.flat) {
    return array.flat(depth);
  }

  result = [];
  length = array.length;
  depth = typeof depth !== 'undefined' ? Math.floor(depth) : 1;

  for (index = 0; index < length; index += 1) {
    element = array[index];

    if (depth > 0) {
      if (Array.isArray(element)) {
        result.push.apply(result, flat(element, depth - 1));
      } else {
        result.push(element);
      }
    } else {
      result = Array.prototype.slice.call(array, 0);
    }
  }

  return result;
}

module.exports = flat;