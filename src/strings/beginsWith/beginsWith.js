/**
 * Returns true if string begins with substring (prefix).
 * @param {String} str The original string.
 * @param {String} prefix The substring to check against.
 * @returns {Boolean}
 */
function beginsWith(str, prefix) {
    'use strict';
    return str.substr(0, prefix.length) === prefix;
}