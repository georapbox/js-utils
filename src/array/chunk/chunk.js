/**
 * Splits an array into chunks of the specified size.
 * If the array cannot be split evenly, the final chunk contains the remaining elements.
 *
 * @param {Array} array The array to process.
 * @param {number} size The size of each chunk. Fractional values are rounded down using `Math.floor()`.
 * @throws {TypeError} If `array` is not an array or `size` is not a number.
 * @throws {RangeError} If `size` is not a positive finite number after rounding down.
 * @returns {Array} Returns a new array containing the chunks.
 * @example
 *
 * chunk([1, 2, 3, 4], 2);
 * // => [[1, 2], [3, 4]]
 *
 * chunk([1, 2, 3, 4, 5], 2);
 * // => [[1, 2], [3, 4], [5]]
 *
 * chunk([1, 2, 3, 4], 3);
 * // => [[1, 2, 3], [4]]
 *
 * chunk([1, 2, 3, 4], 2.7);
 * // => [[1, 2], [3, 4]]
 */
export function chunk(array, size) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof size !== 'number') {
    throw new TypeError('Expected a number for second argument');
  }

  const chunkSize = Math.floor(size);

  if (!Number.isFinite(chunkSize) || chunkSize < 1) {
    throw new RangeError('Expected a positive finite number for second argument');
  }

  const result = [];

  for (let index = 0; index < array.length; index += chunkSize) {
    result.push(array.slice(index, index + chunkSize));
  }

  return result;
}
