/**
 * Ensure a given functionality only runs once.
 * @param {Function} func The function to restrict.
 * @param {Object} [thisArg] Value to use as this when executing callback.
 * @return {Function} Returns the new restricted function.
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
