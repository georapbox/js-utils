/**
 * Creates a new array excluding elements at the specified indices.
 *
 * Indices refer to positions in the original array. Duplicate, negative,
 * fractional, and out-of-range indices are ignored, as are non-number values.
 * The order of remaining elements is preserved.
 * Sparse array holes are treated as `undefined` values.
 *
 * @param {Array} array The array to process.
 * @param {...number} indexes The indices of the elements to remove.
 * @returns {Array} A new array containing the remaining elements.
 * @throws {TypeError} If the first argument is not an array.
 * @example
 *
 * remove([1, 2, 3, 4, 5], 0, 4);
 * // => [2, 3, 4]
 *
 * remove([1, 2, 3, 4, 5], 1, 3);
 * // => [1, 3, 5]
 *
 * remove([1, 2, 3], 1, 1, -1);
 * // => [1, 3]
 *
 * remove([1, 2, 3], 10);
 * // => [1, 2, 3]
 *
 * remove([1, , 3], 0);
 * // => [undefined, 3]
 */
export function remove(array, ...indexes) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  const excluded = new Set(indexes);
  const result = [];

  for (let index = 0; index < array.length; index++) {
    if (!excluded.has(index)) {
      result.push(array[index]);
    }
  }

  return result;
}
