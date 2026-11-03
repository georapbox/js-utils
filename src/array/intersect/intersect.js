/**
 * Creates an array of unique values that are included in all given arrays.
 * The order of result values is determined by their first occurrence in
 * the first array.
 *
 * Values are compared using SameValueZero equality. This means `NaN` is
 * considered equal to `NaN`, and objects are compared by reference.
 * Sparse array holes are treated as `undefined` values.
 *
 * @param {...Array} arrays The arrays to intersect.
 * @returns {Array} A new array containing the unique intersecting values.
 * @throws {TypeError} If no arrays are provided or any argument is not an array.
 * @example
 *
 * intersect([1, 2, 2, 3], [2, 3, 4]);
 * // => [2, 3]
 *
 * intersect([NaN, 3, 8, 'foo'], [3, NaN, 'bar']);
 * // => [NaN, 3]
 *
 * intersect([1, 2, 3], [2, 3], [3, 4]);
 * // => [3]
 *
 * intersect([1, , 3], [undefined, 3]);
 * // => [undefined, 3]
 */
export function intersect(...arrays) {
  if (arrays.length === 0 || !arrays.every(Array.isArray)) {
    throw new TypeError('Expected all arguments to be arrays');
  }

  const [firstArray, ...otherArrays] = arrays;
  const sets = otherArrays.map((array) => new Set(array));
  const result = new Set();

  for (const value of firstArray) {
    if (sets.every((set) => set.has(value))) {
      result.add(value);
    }
  }

  return [...result];
}
