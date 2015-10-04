/**
 * Returns a curried equivalent of the provided function.
 * @param fn {function} The function to curry.
 * @return {function} A new, curried function.
 */
function curry(fn) {
    'use strict';

    var initialArguments = [].slice.call(arguments, 1),
        argumentsLength = fn.length;

    function curried(args) {
        if (args.length >= argumentsLength) {
            return fn.apply(null, args);
        }

        return function () {
            return curried(args.concat([].slice.apply(arguments)));
        };
    }

    return curried(initialArguments);
}
