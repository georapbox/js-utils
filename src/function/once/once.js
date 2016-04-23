/**
 * Ensure a given functionality only runs once.
 * @param {Function} func Callback function to be executed only one time.
 * @param {Object} [thisArg] Value to use as this when executing callback.
 * @return {Function}
 */
function once(func, thisArg) {
    'use strict';

    var result;

    function noop() {
        return;
    }

    if (typeof func !== 'function') {
        return noop;
    }

    return function executeOnce() {
        if (func) {
            result = func.apply(thisArg || this, arguments);
            func = null;
        }
        return result;
    };
}
