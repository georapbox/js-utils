/**
 * Returns true if string ends with suffix.
 * @param {String} str The original string.
 * @param {String} suffix The substring to check against.
 * @returns {Boolean}
 */
function endsWith(str, suffix) {
    'use strict';
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
