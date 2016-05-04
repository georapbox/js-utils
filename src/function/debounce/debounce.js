/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * 'n' milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param {Function} callback The function to be executed.
 * @param {Number} [n=0] Optiona. Default value is 0. Time of delay in milliseconds. It is required if `immediate` is used.
 * @param {Boolean} [immediate] If true or any truthy value, triggers the function on the leading edge.
 * @return {Function} Returns a new debounced function.
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
        timeout = setTimeout(later, n || 0);

        if (callNow) {
            callback.apply(context, args);
        }
    };
}
