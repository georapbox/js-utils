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

/**
 * Removes whitespace from the left end of a string.
 * @param {String} str The string to left trim.
 */
function trimLeft(str) {
    'use strict';

    return str.replace(/^\s+/, '');
}

/**
 * Removes whitespace from the right end of a string.
 * @param {String} str The string to right trim.
 */
function trimRight(str) {
    'use strict';

    return str.replace(/\s+$/, '');
}