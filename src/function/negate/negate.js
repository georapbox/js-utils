/**
 * Creates a function that negates the result of the predicate func.
 * The func predicate is invoked with the this binding and arguments of the created function.
 * @param {Function} func The predicate to negate.
 * @return {Function} Returns the new function.
 */
function negate(func) {
    'use strict';
    return function () {
        return !func.apply(this, arguments);
    };
}
