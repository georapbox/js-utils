'use strict';

/**
 * Returns a value in the array, if an element in the array satisfies the provided testing function.
 * Executes the callback function once for each element present in the array until it finds one
 * where `predicate` returns a true value. If such an element is found, `find` immediately returns
 * the value of that element, otherwise, `find` returns `undefined`.
 * `predicate` is invoked only for indexes of the array which have assigned values;
 * it is not invoked for indexes which have been deleted or which have never been assigned values.
 *
 * @param {Array} array The array to process.
 * @param {function} predicate Function to execute on each value in the array, taking three arguments:
 * - `{*}` element: The current element being processed in the array.
 * - `{Number}` index: The index of the current element being processed in the array.
 * - `{Array}` array: The array find was called upon.
 * @param {*} [thisArg] Optional object to use as `this` when executing the predicate function.
 * @throws {TypeError} If `array` is not an array.
 * @throws {TypeError} If `predicate` is not a function.
 * @returns {*} A value in the array if an element passes the test, else, `undefined`.
 * @example
 *
 * const fruits = [
 *   {name: 'apples', quantity: 2},
 *   {name: 'bananas', quantity: 0},
 *   {name: 'cherries', quantity: 5},
 *   {name: 'melons', quantity: 0}
 * ];
 *
 * find(fruits, function (element, index, array) {
 *   return element.name === 'cherries';
 * });
 * // -> {name: 'cherries', quantity: 5}
 *
 * find(fruits, function (element, index, array) {
 *   return element.quantity === 0;
 * });
 * // -> {name: 'bananas', quantity: 0}
 *
 * find([1, 2, 3, 4, 5], function (element) {
 *   return element === 3;
 * });
 * // -> 3
 *
 * find([1, 2, 3, 4, 5], function (element) {
 *   return element === 10;
 * });
 * // -> undefined
 */
const find = (array, predicate, thisArg) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an an array for first argument');
  }

  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  if (Array.prototype.find) {
    return array.find(predicate, thisArg);
  }

  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];

    if (predicate.call(thisArg, element, index, array)) {
      return element;
    }
  }

  return;
};

module.exports = find;
