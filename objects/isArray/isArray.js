/**
 * Checks if 'value' is array.
 * @param   {*}  value The 'value' to check if is array.
 * @returns {Boolean} Returns true if array, else false.
 */
function isArray(value) {
    if (Array.isArray) {
        return Array.isArray(value);
    } else {
        return value instanceof Array || Object.prototype.toString.call(value) === '[object Array]';
    }
}