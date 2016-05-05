/**
 * Determines whether a string ends with the characters of another string,
 * returning true or false as appropriate.
 * @param {String} subjectString The string to process.
 * @param {String} searchString The characters to be searched for at the end of the original string.
 * @param {Number} [position=str.length] Optional. Search within this string as if this string were only this long;
 *        defaults to the original string's actual length, clamped within the range established by this string's length.
 * @returns {Boolean} Returns true if `subjectString` ends with `searchString`, else false.
 */
function endsWith(subjectString, searchString, position) {
    'use strict';

    var lastIndex;

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    if (String.prototype.endsWith) {
        return subjectString ? subjectString.endsWith(searchString, position) : false;
    }

    if (searchString == null) {
        return false;
    }

    subjectString = subjectString.toString();
    searchString = searchString.toString();

    if (typeof position !== 'number' || !isFinite(position) ||
        Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
    }

    position -= searchString.length;
    lastIndex = subjectString.indexOf(searchString, position);

    return lastIndex !== -1 && lastIndex === position;
}
