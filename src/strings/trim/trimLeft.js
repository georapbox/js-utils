/**
 * Removes whitespace from the left end of a string.
 * @param {String} str The string to left trim.
 */
function trimLeft(str) {
    'use strict';

    return str.replace(/^\s+/, '');
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = trimLeft;
}
