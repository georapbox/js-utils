/**
 * Creates a slice of an array containing elements from the end
 * until the predicate returns a falsy value.
 *
 * Iteration is limited to the array's initial length, so elements appended
 * during iteration are not visited. The predicate may still modify the array.
 *
 * @param {Array} array The array to process.
 * @param {function} predicate The function invoked with `(value, index, array)` for each element.
 * @returns {Array} A new array containing the trailing elements that satisfy the predicate.
 * @throws {TypeError} If the first argument is not an array or the second argument is not a function.
 * @example
 *
 * takeRightWhile([1, 2, 3, 4, 5], value => value > 3);
 * // => [4, 5]
 *
 * takeRightWhile([1, 2, 3], value => value > 5);
 * // => []
 *
 * takeRightWhile([1, 2, 3], value => value > 0);
 * // => [1, 2, 3]
 */
export function takeRightWhile(array, predicate) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  const length = array.length;
  let index = length - 1;

  while (index >= 0 && predicate(array[index], index, array)) {
    index--;
  }

  return array.slice(index + 1, length);
}
