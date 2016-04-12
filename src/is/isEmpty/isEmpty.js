/**
 * Checks if 'value' is empty.
 * Arrays, strings, or arguments objects with a length of 0 and plain objects containing no
 * own enumerable properties or inherited from prototypes properties are considered "empty".
 * @param {*} value The object ot check if is empty.
 * @return {Boolean} true|false Returns true if empty, else false.
 */
function isEmpty(value) {
    'use strict';

    var prop;

    for (prop in value) {
        return false;
    }

    return true;
}
