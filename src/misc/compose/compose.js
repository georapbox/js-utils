/**
 * Chains together functions to create a new function following the mathematical model of function composition.
 * In mathematics f ∘ g (pronounced "f composed with g") is the function that given x, returns f(g(x)).
 * Following the mathematical model `compose(f, g)(x)` should equal `f(g(x))`.
 * Thus it is made clear that function passed as arguments should be read from right to left.
 * @return {Function} A new function as the result of the composition.
 */
function compose() {
    'use strict';

    var funcs = arguments;
    return function () {
        var args = arguments, i;
        for (i = funcs.length; i--;) {
            args = [funcs[i].apply(this, args)];
        }
        return args[0];
    };
}
