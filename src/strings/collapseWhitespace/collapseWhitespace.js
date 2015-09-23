/**
 * Converts all adjacent whitespace characters to a single space.
 * @param {string} str the string to process.
 * @return {string} The final string with all adjacent whitespace converted to single space.
 */
function collapseWhitespace(str) {
    'use strict';

    if (typeof str !== 'string') {
        throw new TypeError('A string was expected as argument, instead saw ' + typeof str);
    }

    return str.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
}
