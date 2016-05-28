/**
 * Creates a function that negates the result of the predicate `func`.
 * The `func` predicate is invoked with the this binding and arguments of the created function.
 *
 * @category Function
 * @param {function} func The predicate to negate.
 * @throws {TypeError} If `func` is not function.
 * @return {function} Returns the new function.
 * @example
 *
 * // Example 1
 * var isString = function (val) {
 *   return typeof val === 'string';
 * };
 *
 * var isNotString = negate(isString);
 *
 * isString('lorem ipsum');
 * // -> true
 *
 * isNotString('lorem ipsum');
 * // -> false
 *
 * // Example 2
 * var isEven = function (n) {
 *   return n % 2 === 0;
 * };
 *
 * var numbers = [1, 2, 3, 4, 5, 6];
 *
 * var evens = numbers.filter(isEven);
 * // -> [2, 4, 6]
 *
 * var odds = numbers.filter(negate(isEven));
 * // -> [1, 3, 5]
 */
function negate(func) {
    'use strict';

    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }

    return function () {
        return !func.apply(this, arguments);
    };
}
