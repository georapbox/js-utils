/**
 * Determines whether a string begins with the characters of another string,
 * returning true or false as appropriate.
 * @param {String} subjectString The string to process.
 * @param {String} searchString The characters to be searched for at the start of the string.
 * @param {Number} [position=0] The position in the original string at which to begin searching for `prefix`.
 * @returns {Boolean}
 */
function startsWith(subjectString, searchString, position) {
    'use strict';

    subjectString = subjectString.toString();
    searchString = searchString.toString();
    position = position || 0;
    return String.prototype.startsWith ?
        subjectString.startsWith(searchString, position) :
        subjectString.substr(position, searchString.length) === searchString;
}
