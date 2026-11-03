/**
 * Creates a new array containing the values from the first array
 * that are not present in the second array.
 *
 * Values are compared using SameValueZero equality. This means `NaN` is
 * considered equal to `NaN`, and objects are compared by reference.
 * Duplicate values and their original order are preserved.
 * Sparse array holes are treated as `undefined` values.
 *
 * @param {Array} arrayA The array to process.
 * @param {Array} arrayB The values to exclude from `arrayA`.
 * @returns {Array} A new array containing the values not excluded by `arrayB`.
 * @throws {TypeError} If either argument is not an array.
 * @example
 *
 * diff([1, 1, 2, 2, 3, 4], [2, 4]);
 * // => [1, 1, 3]
 *
 * diff([1, NaN, 2], [NaN]);
 * // => [1, 2]
 *
 * const obj = { foo: 'bar' };
 * diff([1, 2, obj], [2, obj]);
 * // => [1]
 *
 * diff([1, , 3], []);
 * // => [1, undefined, 3]
 */
export function diff(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
    throw new TypeError('Expected both arguments to be arrays');
  }

  const excluded = new Set(arrayB);
  const result = [];

  for (const value of arrayA) {
    if (!excluded.has(value)) {
      result.push(value);
    }
  }

  return result;
}
