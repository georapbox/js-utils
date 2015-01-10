/**
 * Checks if 'value' is string.
 * @param   {*}       'value' to check if is string.
 * @returns {Boolean} Returns true if string, else false.
 */
function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
}