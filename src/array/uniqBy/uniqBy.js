/**
 * Creates a duplicate-free array using an `iteratee` function to compute a
 * unique key for each element. Only the first occurrence of each key is kept,
 * preserving the original order.
 *
 * Keys are compared using SameValueZero equality.
 *
 * @param {Array} array The array to process.
 * @param {function} iteratee The function invoked with each array element to compute its uniqueness key.
 * @returns {Array} The duplicate-free array.
 * @throws {TypeError} If `array` is not an array or `iteratee` is not a function.
 * @example
 *
 * const arr = [
 *   { id: 1, name: 'John' },
 *   { id: 2, name: 'George' },
 *   { id: 1, name: 'Helen' }
 * ];
 *
 * uniqBy(arr, (item) => item.id);
 * // => [{ id: 1, name: 'John' }, { id: 2, name: 'George' }]
 */
export function uniqBy(array, iteratee) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof iteratee !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  const unique = new Map();

  array.forEach((item) => {
    const key = iteratee(item);

    if (!unique.has(key)) {
      unique.set(key, item);
    }
  });

  return [...unique.values()];
}
