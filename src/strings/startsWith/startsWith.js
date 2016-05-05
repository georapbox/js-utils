/**
 * Determines whether a string begins with the characters of another string,
 * returning true or false as appropriate.
 * @param {String} subjectString The string to process.
 * @param {String} searchString The characters to be searched for at the start of the string.
 * @param {Number} [position=0] Optional. The position in the original string at which to begin searching for `prefix`.
 * @returns {Boolean} Returns true if `subjectString` starts with `searchString`, else false.
 */
function startsWith(subjectString, searchString, position) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    if (searchString == null) {
        return false;
    }

    if (String.prototype.startsWith) {
        return subjectString.startsWith(searchString, position);
    }

    subjectString = subjectString.toString();
    searchString = searchString.toString();
    position = position || 0;

    return subjectString.substr(position, searchString.length) === searchString;
}
