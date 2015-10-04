/**
 * Transforms a function with multiple arity into the same function with less arity.
 * Currying refers to the process of transforming a function with multiple arity into
 * the same function with less arity. The curried effect is achieved by binding some of
 * the arguments to the first function invoke, so that those values are fixed for the next invocation.
 * [https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe]
 * @param fn {function} The function to curry.
 * @return {function} A new, curried function.
 */
function curry(fn) {
    'use strict';
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
    };
}
