/**
 * Returns true if an object is an array, else returns false.
 * @param   {Object}  obj The object to check if is array.
 * @returns {Boolean}
 */
function isArray(obj) {
    if (Array.isArray) {
        return Array.isArray(obj);
    } else {
        return obj instanceof Array || Object.prototype.toString.call(obj) === '[object Array]';
    }
}