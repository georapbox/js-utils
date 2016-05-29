/**
 * Executes a provided callback function once per array element.
 * To break from the iteration at any time, have the callback return `false`.
 *
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Function} callback Function to execute for each element.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `callback` is not function.
 * @param {*} [thisArg] Value to use as `this` when executing callback.
 * @example
 *
 * var arr = ['a', 'b', 'c', 'd', 'e'];
 *
 * forEach(arr, function (item, index, obj) {
 *   console.log(item);
 * });
 * // -> a, b, c, d, e
 *
 * forEach(arr, function (item, index, obj) {
 *   console.log(index);
 * });
 * // -> 0, 1, 2, 3, 4
 *
 * forEach(arr, function (item, index, obj) {
 *   if (item === 'c') {
 *     return false;
 *   }
 * });
 * // -> a, b, c
 *
 * forEach(arr, function (item, index, obj) {
 *   console.log(this);
 *   return false;
 * }, arr);
 * // =>  ['a', 'b', 'c', 'd', 'e']
 */
function forEach(array, callback, thisArg) {
    'use strict';

    var index, len;

    if (Object.prototype.toString.call(array) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    if (typeof callback !== 'function') {
        throw new TypeError('Expected a function');
    }

    index = 0;
    len = array.length;

    for (; index < len; index += 1) {
        if (callback.call(thisArg, array[index], index, array) === false) {
            return;
        }
    }
}
