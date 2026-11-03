/**
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
 * the second of which contains the second elements of the given arrays, and so on.
 *
 * @param {...Array} arrays The arrays to process.
 * @throws {TypeError} If any argument is not an array.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * zip([1, 2, 3], [11, 22, 33], [111, 222, 333]);
 * // => [[1, 11, 111], [2, 22, 222], [3, 33, 333]]
 *
 * zip([1, 2, 3], [11, 22, 33], [111, 222]);
 * // => [[1, 11, 111], [2, 22, 222], [3, 33, undefined]]
 *
 * zip([1, 2, 3], [11, 22], [111]);
 * // => [[1, 11, 111], [2, 22, undefined], [3, undefined, undefined]]
 *
 * zip([], []);
 * // => []
 *
 * zip();
 * // => []
 */
export const zip = (...arrays) => {
  if (!arrays.every(Array.isArray)) {
    throw new TypeError('Expected all arguments to be arrays');
  }

  const longestArray = arrays.reduce((a, b) => {
    return a.length > b.length ? a : b;
  }, []);

  return Array.from({ length: longestArray.length }, (_, index) => {
    return arrays.map((array) => array[index]);
  });
};
