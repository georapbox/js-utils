/**
 * Limits the number of times a function can be called in a given period.
 * @param {function} callback The function to be executed.
 * @param {number} n Time of delay in milliseconds.
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
            }, n);
        }
    };
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = throttle;
}
