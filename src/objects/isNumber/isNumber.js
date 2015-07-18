/**
 * Checks if 'value' is a number.
 * Note: NaN is considered a number.
 * @param   {*}       value The value to check.
 * @returns {Boolean} Returns true if 'value' is a number, else false.
 */
function isNumber(value) {
    'use strict';

    return value &&
        Object.prototype.toString.call(value) === '[object Number]' &&
        typeof value === 'number' ||
        false;
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = isNumber;
}
