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
 * var arr1 = [
 *   { id: 1, name: 'John' },
 *   { id: 2, name: 'George' },
 *   { id: 1, name: 'Helen' }
 * ];
 *
 * var arr2 = [
 *   { v: 1.6 },
 *   { v: 2.1 },
 *   { v: 1.1 }
 * ];
 *
 * uniqBy(arr1, 'id');
 * // -> [{ id: 1, name: 'John' }, { id: 2, name: 'George' }]
 *
 * uniqBy(arr2, function (o) {
 *   return Math.floor(o.v);
 * });
 * // -> [{ v: 1.6 }, { v: 2.1 }]
 */
function uniqBy(array, iteratee) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for second argument');
  }

  var cb = typeof iteratee === 'function' ? iteratee : function (o) {
    return o[iteratee];
  };

  return array.reduce(function (acc, current) {
    var found = acc.find(function (item) {
      return cb(item) === cb(current);
    });

    if (!found) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
}

module.exports = uniqBy;