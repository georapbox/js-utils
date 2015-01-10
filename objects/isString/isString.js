/**
 * Returns true if an object is a string, else returns false.
 * @param   {Object} obj The object to check if is string.
 * @returns {Boolean}
 */
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}