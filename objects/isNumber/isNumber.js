/**
 * Checks if 'value' is a number.
 * Note: NaN is considered a number.
 * @param   {*}       value The value to check.
 * @returns {Boolean} Returns true if 'value' is a number, else false.
 */
function isNumber(value) {
    return value &&
        typeof value === 'object' &&
        Object.prototype.toString.call(value) === '[object Number]' &&
        typeof value === 'number' ||
        false;
}