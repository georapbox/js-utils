/**
 * Creates a function that invokes `func` with arguments reversed.
 *
 * @category Function
 * @param {function} func The function to flip arguments for.
 * @param {*} [thisArg] Value to use as `this` when executing `func`.
 * @return {function} The new function with arguments reversed.
 * @example
 *
 * var argsToArray = function () {
 *   return Array.prototype.slice.call(arguments, 0);
 * };
 *
 * var flipArgsToArray = flip(argsToArray);
 *
 * flipArgsToArray(1, 2, 3);
 * // -> [3, 2, 1]
 *
 * var subtract = function (a, b) {
 *   return a - b;
 * };
 *
 * var flipSubtract = flip(subtract);
 *
 * flipSubtract(1, 2);
 * // -> 1
 */
function flip(func, thisArg) {
    'use strict';

    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }

    return function flipped() {
        return func.apply(thisArg, Array.prototype.slice.call(arguments, 0).reverse());
    };
}
