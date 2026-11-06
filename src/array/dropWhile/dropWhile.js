/**
 * Creates a new array excluding elements from the beginning of the input array
 * while the predicate returns a truthy value.
 *
 * Iteration is limited to the array's initial length, so elements appended
 * during iteration are not visited. The predicate may still modify the array.
 *
 * @param {Array} array The array to process.
 * @param {function} predicate The function invoked with `(value, index, array)` for each element.
 * @returns {Array} A new array containing the remaining elements.
 * @throws {TypeError} If the first argument is not an array or the second argument is not a function.
 * @example
 *
 * dropWhile([1, 2, 3, 4, 5], value => value < 4);
 * // => [4, 5]
 *
 * dropWhile([1, 2, 3], value => value > 5);
 * // => [1, 2, 3]
 *
 * dropWhile([1, 2, 3], value => value > 0);
 * // => []
 */
export function dropWhile(array, predicate) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  const length = array.length;
  let index = 0;

  while (index < length && predicate(array[index], index, array)) {
    index++;
  }

  return array.slice(index, length);
}
