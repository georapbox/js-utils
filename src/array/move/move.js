/**
 * Creates a new array with an element moved from one index to another.
 *
 * Negative indices are resolved relative to the original array length.
 * If the source index is out of range, the array is returned unchanged.
 * Destination indices outside the array bounds are clamped to the nearest
 * valid position. Sparse array holes are treated as `undefined` values.
 *
 * @param {Array} array The array to process.
 * @param {number} fromIndex The index of the element to move.
 * @param {number} toIndex The destination index.
 * @returns {Array} A new array with the element moved.
 * @throws {TypeError} If the first argument is not an array or either index is not an integer.
 * @example
 *
 * move(['A', 'B', 'C', 'D'], 0, 2);
 * // => ['B', 'C', 'A', 'D']
 *
 * move(['A', 'B', 'C', 'D'], -1, 1);
 * // => ['A', 'D', 'B', 'C']
 *
 * move(['A', 'B', 'C', 'D'], 0, -1);
 * // => ['B', 'C', 'D', 'A']
 *
 * move(['A', 'B', 'C'], 0, 10);
 * // => ['B', 'C', 'A']
 *
 * move(['A', 'B', 'C'], 10, 0);
 * // => ['A', 'B', 'C']
 */
export function move(array, fromIndex, toIndex) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (!Number.isInteger(fromIndex) || !Number.isInteger(toIndex)) {
    throw new TypeError('Expected integer indices for second and third arguments');
  }

  const result = [...array];
  const length = result.length;

  const startIndex = fromIndex < 0 ? length + fromIndex : fromIndex;

  if (startIndex < 0 || startIndex >= length) {
    return result;
  }

  const endIndex = toIndex < 0 ? length + toIndex : toIndex;
  const destination = Math.max(0, Math.min(endIndex, length - 1));

  if (startIndex === destination) {
    return result;
  }

  const [element] = result.splice(startIndex, 1);

  result.splice(destination, 0, element);

  return result;
}
