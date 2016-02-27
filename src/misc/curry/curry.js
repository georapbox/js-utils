/**
 * Transforms a function of N arguments in such a way that it can
 * be called as a chain of N functions each with a single argument.
 * @param {Function} fn The function to curry.
 * @param {Number} [n] The number of arguments in case that the
 *        function's arity cannot be automatically determined.
 * @return {function} A new, curried function.
 */
function curry(fn, n) {
    'use strict';

    var initialArguments = [].slice.call(arguments, 2),
        argumentsLength = typeof n !== 'number' ? fn.length : n;

    function curried(args) {
        if (args.length >= argumentsLength) {
            return fn.apply(null, args);
        }

        return function () {
            return curried(args.concat([].slice.call(arguments)));
        };
    }

    return curried(initialArguments);
}
