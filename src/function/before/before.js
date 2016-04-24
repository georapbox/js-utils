/**
 * Creates a function that invokes `func` while it’s called less than n times.
 * `func` is invoked with the this binding and arguments of the created function.
 * @param {Number} n The number of calls before `func` is no longer invoked. A positive integer is expected.
 *        `func` is never invoked if any of the following are passed: a negative number, `NaN`, '-Infinity', `Infinity`
 * @param {Function} func The function to restrict.
 * @return {Function} Returns the new restricted function.
 */
function before(n, func) {
    'use strict';

    var result;

    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }

    n = parseInt(n, 10);

    return function () {
        if (--n > 0) {
            result = func.apply(this, arguments);
        }

        if (n <= 1) {
            func = undefined;
        }

        return result;
    };
}
