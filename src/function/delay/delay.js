/**
 * Invokes `func` after `wait` milliseconds.
 * Any additional arguments are provided to `func` when it’s invoked.
 * @param {Function} func The function to delay.
 * @param {Number} [wait=0] The number of milliseconds to delay invokation.
 * @param {*} [args] The arguments to invoke `func` with.
 * @return {Number} Returns the timer's id.
 */
function delay(func, wait /*, args...*/) {
    'use strict';

    var slice, args;

    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }

    slice = Array.prototype.slice;
    wait = wait || 0;
    args = slice.call(arguments, typeof wait === 'number' ? 2 : 1);

    return setTimeout(function () {
        func.apply(undefined, args);
    }, wait);
}
