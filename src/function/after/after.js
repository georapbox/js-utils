/**
 * Creates a function that invokes `func` once it's called `n` or more times.
 * `func` is invoked with the this binding and arguments of the created function.
 * @param {Number} n The number of calls before `func` is invoked. A positive integer is expected.
 *        If a negative number or 0, `func` is invoked immediately.
 *        If `NaN`, `-Infinity` or `Infinity`, `func` is never invoked.
 * @param {Function} func The function to restrict.
 * @return {Function} Returns the new restricted function.
 */
function after(n, func) {
    'use strict';

    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }

    n = parseInt(n, 10);

    return function () {
        if (--n < 1) {
            return func.apply(this, arguments);
        }
    };
}
