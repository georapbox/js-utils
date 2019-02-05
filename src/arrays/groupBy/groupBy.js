/**
 * Creates an object composed of keys generated from the results of running each element of `array` through `iteratee`.
 * The order of grouped values is determined by the order they occur in the `array`.
 *
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {String|Function} iteratee The iteratee to transform keys. It is invoked with one argument, the array item.
 * @returns {Object}
 * @example
 *
 * groupBy(['one', 'two', 'three', 'four', 'five'], function (item) {
 *   return item.length;
 * });
 * // -> { '3': ['one', 'two'], '4': ['four', 'five'], '5': ['three'] }
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
 * // -> { 'John': [{'name': 'John'}, {'name': 'John'}], 'George': [{'name': 'George'}, {'name': 'George'}], 'Helen': [{'name': 'Helen'}, {'name': 'Helen'}], 'Alex': [{'name': 'Alex'}] }
 */
function groupBy(array, iteratee) {
  return array.reduce(function arrayAggregator(accumulator, item) {
    var isFunction = Object.prototype.toString.call(iteratee) === '[object Function]';
    var group = isFunction ? iteratee(item) : item[iteratee];
    accumulator[group] = accumulator[group] || [];
    accumulator[group].push(item);
    return accumulator;
  }, {});
}
