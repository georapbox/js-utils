/**
 * Creates a new array with its elements shuffled into a random order
 * using the Fisher-Yates algorithm.
 *
 * The original array is not modified. Sparse array holes are treated
 * as `undefined` values. Randomness is provided by `Math.random()`
 * and is not suitable for cryptographic purposes.
 *
 * @param {Array} array The array to shuffle.
 * @returns {Array} A new array containing the elements in random order.
 * @throws {TypeError} If the argument is not an array.
 * @example
 *
 * shuffle([1, 2, 3, 4, 5]);
 * // => [3, 1, 5, 2, 4] (example result; order varies)
 *
 * shuffle(['a', 'b', 'c']);
 * // => ['c', 'a', 'b'] (example result; order varies)
 *
 * shuffle([]);
 * // => []
 */
export function shuffle(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  const result = [...array];

  for (let index = result.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    const temp = result[index];
    result[index] = result[randomIndex];
    result[randomIndex] = temp;
  }

  return result;
}
