/**
 * Checks if 'value' is a falsy one.
 * @param {*} value The value to check.
 * @return {Boolean} true|false Returns true if the 'value' is falsy, else false.
 */
function isFalsy(value) {
    'use strict';
    // NOTE: Using non strict equality (value == null) to check for null or undefined.
    return value == null || // value is non existy
        value === false ||  // obviously :)
        value !== value ||  // check if is NaN (NaN is falsy)
        value === '' ||     // empty string is falsy
        value === 0;        // 0 is the only falsy number
}
