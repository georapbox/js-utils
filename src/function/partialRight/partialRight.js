/**
 * Creates a function that invokes `func` with `args` appended to the arguments it receives.
 * Returns a function `partialApplicator` that, when invoked, invokes the `fn` function with the
 * originally-specified arguments, followed by all arguments passed to `partialApplicator`.
 * @param {Function} fn The function to be invoked with the bound arguments.
 * @param {*} [args...] Some number of the originally-specified arguments to be passed.
 * @return {Function} partialApplicator A function that invokes the originally-specified function `fn`.
 */
function partialRight(fn /*, args...*/) {
    'use strict';

    var slice = Array.prototype.slice,
        args_a = slice.call(arguments, 1);

    return function partialApplicator() {
        var args_b = slice.call(arguments);
        return fn.apply(undefined, args_b.concat(args_a));
    };
}
