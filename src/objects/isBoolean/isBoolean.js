/**
 * Checks if 'value' is a boolean value.
 * @param   {*}       value The value to check.
 * @returns {Boolean} Returns true if the 'value' is a boolean value, else false.
 */
function isBoolean(value) {
    'use strict';

    return (value === true || value === false || value && typeof obj === 'object') &&
        (Object.prototype.toString.call(value) === '[object Boolean]') ||
        false;
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = isBoolean;
}
