/**
 * Creates a function that invokes `func` with `args` prepended to the arguments it receives.
 * Returns a function `partialApplicator` that, when invoked, invokes the `fn` function with the
 * originally-specified arguments, followed by all arguments passed to `partialApplicator`.
 * @param {Function} fn The function to be invoked with the partially applied arguments.
 * @param {*} [args...] The arguments to be partially applied.
 * @return {Function} partialApplicator A function that invokes the originally-specified function `fn`.
 */
function partial(fn /*, args...*/) {
    'use strict';

    var slice = Array.prototype.slice,
        args_a = slice.call(arguments, 1);

    return function partialApplicator() {
        var args_b = slice.call(arguments, 0);
        return fn.apply(undefined, args_a.concat(args_b));
    };
}
