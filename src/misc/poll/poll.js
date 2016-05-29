/**
 * Periodically check for application's status updates.
 *
 * @category Misc
 * @param {function} func The function to be called repeatedly. If returns a truthy value, stop polling.
 * @param {Number} [interval=100] Optional. The time (milliseconds) that `poll` should wait before each call to `func`.
 * @param {function} [successCallback] Optional. Function to be executed if `func` returns truthy a value.
 * @param {Number} [timeout] Optional. The time (milliseconds) to continue calling `func` until polling times out.
 *        If `undefined` or `null` polling never times out and will continue to call `func` for ever.
 * @param {function} [timeoutCallback] Optional. Function to be executed if poll times out.
 * @throws {TypeError} If `func` is not function.
 * @example
 *
 * // Periodically check every 500 milliseconds if popup element is visible.
 * // If is not visible after 3000 milliseconds, throw error else
 * // log a success message on the console.
 * poll(function () {
 *   return document.getElementById('myPopup').style.display === 'block';
 * }, 500, function() {
 *   console.log('Popup is now visible');
 * }, 3000, function(fn, args) {
 *   throw new Error('Timed out for ' + fn + ': ' + args)
 * });
 *
 * // Ask for data via an AJAX request every 1000 milliseconds.
 * // Will run forever.
 * poll(function () {
 *   $.ajax('path/to/data/').then(function (res) {
 *     // Do something with response.
 *   });
 * }, 1000);
 */
function poll(func, interval, successCallback, timeout, timeoutCallback) {
    'use strict';

    var endTime;

    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }

    endTime= typeof timeout === 'number' ? new Date().getTime() + timeout : null;
    interval = interval || 100;

    (function p() {
        var result = func();
        if (result) {
            successCallback && successCallback(result);
        } else if (new Date().getTime() < endTime || !endTime) {
            setTimeout(p, interval);
        } else {
            timeoutCallback(func, arguments);
        }
    })();
}
