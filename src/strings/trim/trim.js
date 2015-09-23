/**
 * Removes whitespace from both ends of a string.
 * @param {String} str The string to trim.
 */
function trim(str) {
    'use strict';

    return String.prototype.trim ?
        str.trim() :
        str.replace(/(^\s*|\s*$)/g, '');
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = trim;
}
