/**
 * Limits the number of times a function can be called in a given period.
 * @param {Function} func The function to be executed.
 * @param {Number} [n=0] Optional. Default value is 0. Time of delay in milliseconds.
 * @return {Function} Returns the throttled function.
 */
function throttle(func, n) {
    'use strict';

    var wait;

    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }

    wait = false;

    return function () {
        if (!wait) {
            func.call();
            wait = true;
            setTimeout(function () {
                wait = false;
            }, n || 0);
        }
    };
}
