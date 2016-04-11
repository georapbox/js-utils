/**
 * Periodically check for application's status updates.
 * @param {Function} fn The function to be called repeatedly. If returns a truthy value, stop polling.
 * @param {Number} [interval=100] The time (milliseconds) that `poll` should wait before each call to `fn`.
 * @param {Function} [successCallback] Function to be executed if `fn` returns truthy a value.
 * @param {Number} [timeout] The time (milliseconds) to continue calling `fn` until polling times out.
 *        If `undefined` or `null` polling never times out and will continue to call `fn` for ever.
 * @param {Function} [timeoutCallback] Function to be executed if poll times out.
 */
function poll(fn, interval, successCallback, timeout, timeoutCallback) {
    'use strict';

    var endTime = typeof timeout === 'number' ?
        new Date().getTime() + timeout : null;

    interval = interval || 100;

    (function p() {
        var result = fn();
        if (result) {
            successCallback && successCallback(result);
        } else if (new Date().getTime() < endTime || !endTime) {
            setTimeout(p, interval);
        } else {
            timeoutCallback(fn, arguments);
        }
    })();
}
