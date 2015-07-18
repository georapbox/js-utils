/**
 * Removes suffix from start of a string.
 * @param {String} str The original string.
 * @param {String} suffix The suffix substring to remove from the original string.
 * @returns {String} The final string.
 */
function removeSuffix(str, suffix) {
    'use strict';

    var strLen = str.length,
        suffixLen = suffix.length;

    if (str.indexOf(suffix, strLen - suffixLen) !== -1) {
        return str.slice(0, strLen - suffixLen);
    } else {
        return str;
    }
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = removeSuffix;
}
