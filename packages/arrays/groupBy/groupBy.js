'use strict';

/**
 * Creates an object composed of keys generated from the results of running each element of `array` through `iteratee`.
 * The order of grouped values is determined by the order they occur in the `array`.
 *
 * @param {Array} array The array to iterate over.
 * @param {String|Function} iteratee The iteratee to transform keys. It is invoked with one argument, the array item.
 * @throws {TypeError} If `array` is not array.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * groupBy(['one', 'two', 'three', 'four', 'five'], function (item) {
 *   return item.length;
 * });
 * // => { '3': ['one', 'two'], '4': ['four', 'five'], '5': ['three'] }
 *
 * groupBy([
 *   { name: 'John' },
 *   { name: 'George' },
 *   { name: 'Helen' },
 *   { name: 'John' },
 *   { name: 'Helen' },
 *   { name: 'Alex' },
 *   { name: 'George' }
 * ], 'name');
 * // => { 'John': [{'name': 'John'}, {'name': 'John'}], 'George': [{'name': 'George'}, {'name': 'George'}], 'Helen': [{'name': 'Helen'}, {'name': 'Helen'}], 'Alex': [{'name': 'Alex'}] }
 */
const groupBy = (array, iteratee) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  return array.reduce(function arrayAggregator(accumulator, item) {
    const group = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
    accumulator[group] = accumulator[group] || [];
    accumulator[group].push(item);
    return accumulator;
  }, {});
};

module.exports = groupBy;
