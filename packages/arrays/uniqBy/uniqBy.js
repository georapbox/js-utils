'use strict';

/**
 * Creates a dupliate free array by accepting an `iteratee` which is invoked for each element in array.
 * The `iteratee` is invoked with one argument (each element in the array).
 *
 * @param {Array} array The initial array to inspect.
 * @param {Function|String} iteratee The iteratee invoked per element.
 * @throws {TypeError} If `array` is not array.
 * @returns {Array} The duplicate free array.
 * @example
 *
 * const arr1 = [
 *   { id: 1, name: 'John' },
 *   { id: 2, name: 'George' },
 *   { id: 1, name: 'Helen' }
 * ];
 *
 * const arr2 = [
 *   { v: 1.6 },
 *   { v: 2.1 },
 *   { v: 1.1 }
 * ];
 *
 * uniqBy(arr1, 'id');
 * // => [{ id: 1, name: 'John' }, { id: 2, name: 'George' }]
 *
 * uniqBy(arr2, function (o) {
 *   return Math.floor(o.v);
 * });
 * // => [{ v: 1.6 }, { v: 2.1 }]
 */
const uniqBy = (array, iteratee) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  const cb = typeof iteratee === 'function' ? iteratee : (o) => o[iteratee];

  return array.reduce((acc, current) => {
    const found = acc.find(item => cb(item) === cb(current));

    if (!found) {
      acc.push(current);
    }

    return acc;
  }, []);
};

module.exports = uniqBy;
