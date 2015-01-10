/**
 * Returns true if an object is empty, else returns false.
 * - null and undefined are "empty"
 * - zero length is empty in case of array and string
 * - No own (enumerable) properties is empty in case of object literals
 * @param   {Object}  obj the object ot check if is empty.
 * @returns {Boolean}
 */
function isEmpty(obj) {
    // null and undefined are "empty".
    if (obj == null) {
        return true;
    }

    var isArray = Array.isArray ? Array.isArray(obj) : obj instanceof Array || Object.prototype.toString.call(obj) === '[object Array]',
        isString = Object.prototype.toString.call(obj) === '[object String]';

    // If is array or string, empty means length is 0.
    if (isArray || isString) {
        return obj.length === 0;
    }

    // If it doesn't have own properties (enumerable), is empty.
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }

    return true;
}