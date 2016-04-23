/**
 * Take a function that accepts a number of arguments,
 * bind values to one or more of those arguments and finally
 * return a new function that only accepts the remaining, unbound arguments.
 * Returns a function `ƒ` that, when invoked, invokes the `fn` function with the
 * originally-specified (bound) arguments, followed by all arguments passed to `f`.
 * @param {Function} fn The function to be invoked with the bound arguments.
 * @param {*} [args...] Some number of the originally-specified arguments to be passed.
 * @return {Function} f A function that invokes the originally-specified function `fn`.
 */
function partial(fn /*, args...*/) {
    var slice = Array.prototype.slice,
        args = slice.call(arguments, 1);

    return function f () {
        // Invoke the originally-specified function, passing in all originally-
        // specified arguments, followed by any just-specified arguments.
        return fn.apply(this, args.concat(
            slice.call(arguments, 0))
        );
    };
}
