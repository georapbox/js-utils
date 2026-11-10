/**
 * Creates a new array excluding elements from the end of the input array
 * while the predicate returns a truthy value.
 *
 * Iteration starts at the array's initial last index, so elements appended
 * during iteration are not visited. The predicate may still modify the array.
 *
 * @param {Array} array The array to process.
 * @param {function} predicate The function invoked with `(value, index, array)` for each element.
 * @returns {Array} A new array containing the remaining elements.
 * @throws {TypeError} If the first argument is not an array or the second argument is not a function.
 * @example
 *
 * dropRightWhile([1, 2, 3, 4, 5], value => value > 3);
 * // => [1, 2, 3]
 *
 * dropRightWhile([1, 2, 3], value => value > 5);
 * // => [1, 2, 3]
 *
 * dropRightWhile([1, 2, 3], value => value > 0);
 * // => []
 */
export function dropRightWhile(array, predicate) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  let index = array.length - 1;

  while (index >= 0 && predicate(array[index], index, array)) {
    index--;
  }

  return array.slice(0, index + 1);
}
