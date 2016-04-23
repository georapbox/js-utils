/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * 'n' milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param {function} callback The function to be executed.
 * @param {number} n Time of delay in milliseconds.
 * @param {boolean} [immediate] If true or any truthy value, triggers the function on the leading edge.
 */
function debounce(callback, n, immediate) {
    'use strict';

    var timeout;
    return function () {
        var context = this,
            args = arguments;

        var later = function () {
            timeout = null;
            if (!immediate) {
                callback.apply(context, args);
            }
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, n);

        if (callNow) {
            callback.apply(context, args);
        }
    };
}
