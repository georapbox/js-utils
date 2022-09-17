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
 * const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
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
const flat = (array, depth = 1) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (Array.prototype.flat) {
    return array.flat(depth);
  }

  let result = [];

  depth = Math.floor(depth);

  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];

    if (depth > 0) {
      if (Array.isArray(element)) {
        result.push(...flat(element, depth - 1));
      } else {
        result.push(element);
      }
    } else {
      result = [...array];
    }
  }

  return result;
};

module.exports = flat;
