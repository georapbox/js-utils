/**
 * Iterates over own enumerable properties of an object, executing the callback for each property.
 * The callback is invoked with three arguments (value, key, object)
 * @param {Object} obj The object to iterate over.
 * @param {Function} callback The function called per iteration.
 * @returns {Object} The original object.
 */
function forOwn(obj, callback) {
    'use strict';

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            callback && callback(obj[key], key, obj);
        }
    }

    return obj;
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = forOwn;
}
