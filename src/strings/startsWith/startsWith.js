/**
 * Determines whether a string begins with the characters of another string,
 * returning true or false as appropriate
 * @param {String} str The string to process.
 * @param {String} prefix The characters to be searched for at the start of the string.
 * @param {Number} [position=0] The position in the original string at which to begin searching for `prefix`.
 * @returns {Boolean}
 */
function startsWith(str, prefix, position) {
    'use strict';

    str = str.toString();
    prefix = prefix.toString();
    position = position || 0;
    return String.prototype.startsWith ?
        str.startsWith(prefix, position) :
        str.substr(position, prefix.length) === prefix;
}
