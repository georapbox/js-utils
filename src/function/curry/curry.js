/**
 * Transforms a function of N arguments in such a way that it can
 * be called as a chain of N functions each with a single argument.
 * @param {Function} func The function to curry.
 * @param {Number} [n] The number of expected arguments in case that
 *        the function's arity cannot be automatically determined.
 * @return {Function} A new, curried function.
 */
function curry(func, n) {
    'use strict';

    var slice, initialArguments, argumentsLength;

    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }

    slice = Array.prototype.slice;
    initialArguments = slice.call(arguments, 2);
    argumentsLength = typeof n !== 'number' ? func.length : n;

    function curried(args) {
        if (args.length >= argumentsLength) {
            return func.apply(null, args);
        }

        return function () {
            return curried(args.concat(slice.call(arguments)));
        };
    }

    return curried(initialArguments);
}
