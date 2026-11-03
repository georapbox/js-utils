/**
 * Creates a new array of grouped elements by combining values at the same
 * index from each input array.
 *
 * The result contains as many groups as the longest input array.
 * Missing elements, including sparse array holes, are treated as `undefined`.
 * The original arrays are not modified.
 *
 * @param {...Array} arrays The arrays to process.
 * @returns {Array} A new array containing the grouped elements.
 * @throws {TypeError} If any argument is not an array.
 * @example
 *
 * zip([1, 2, 3], [11, 22, 33], [111, 222, 333]);
 * // => [[1, 11, 111], [2, 22, 222], [3, 33, 333]]
 *
 * zip([1, 2, 3], [11, 22], [111]);
 * // => [[1, 11, 111], [2, 22, undefined], [3, undefined, undefined]]
 *
 * zip([], [1, 2]);
 * // => [[undefined, 1], [undefined, 2]]
 *
 * zip();
 * // => []
 */
export function zip(...arrays) {
  if (!arrays.every(Array.isArray)) {
    throw new TypeError('Expected all arguments to be arrays');
  }

  let length = 0;

  for (const array of arrays) {
    length = Math.max(length, array.length);
  }

  return Array.from({ length }, (_, index) => {
    return arrays.map((array) => array[index]);
  });
}
