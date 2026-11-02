/**
 * Creates an array of unique values that are included in all given arrays.
 * The order of result values is determined by the order they occur in the first array.
 *
 * @param {...Array} arrays The arrays to intersect.
 * @throws {TypeError} If any argument is not an array or no arrays are provided.
 * @returns {Array} The array of intersecting values.
 * @example
 *
 * const arrA = [NaN, 3, 8, 'foo', 'bar'];
 * const arrB = [2, 7, 'foo', NaN, 3];
 * const arrC = [1, 2, 3, NaN];
 *
 * intersect(arrA, arrB);
 * // => [NaN, 3, 'foo']
 *
 * intersect(arrA, arrB, arrC);
 * // => [NaN, 3]
 */
const intersect = (...arrays) => {
  if (arrays.length === 0 || !arrays.every(Array.isArray)) {
    throw new TypeError('Expected all arguments to be arrays');
  }

  const [firstArray, ...otherArrays] = arrays;

  const intersection = firstArray.filter((element) => {
    return otherArrays.every((array) => array.includes(element));
  });

  const uniqueValues = new Set(intersection);

  return [...uniqueValues];
};

export { intersect };
