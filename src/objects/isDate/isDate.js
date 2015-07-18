/**
 * Checks if 'value' is a date.
 * @param   {*}       value The value to check.
 * @returns {Boolean} Returns true if 'value' is a date, else returns false.
 */
function isDate(value) {
    'use strict';

    return value &&
        typeof value === 'object' &&
        Object.prototype.toString.call(value) === '[object Date]' ||
        false;
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = isDate;
}
