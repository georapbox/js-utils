/**
 * Limits the number of times a function can be called in a given period.
 * @param {Function} callback The function to be executed.
 * @param {Number} [n=0] Optional. Default value is 0. Time of delay in milliseconds.
 * @return {Function} Returns the throttled function.
 */
function throttle(callback, n) {
    'use strict';

    var wait = false;

    return function () {
        if (!wait) {
            callback.call();
            wait = true;
            setTimeout(function () {
                wait = false;
            }, n || 0);
        }
    };
}
