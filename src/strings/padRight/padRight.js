/**
 * Pad `subjectString` on right side to the given `len`, with optional `chars` defaulting to a space.
 * @param {String} subjectString The string to process.
 * @param {Number} len The length to pad the string.
 * @param {String} [chars=' '] The character(s) to use for padding. Default is space.
 * @returns {String} The processed string.
 */
function padRight(subjectString, len, chars) {
    'use strict';

    chars = chars || ' '; // Set default character.

    if (subjectString.length >= len) {
        return subjectString;
    }

    var right = [];
    right.length = len - subjectString.length + 1;
    right = right.join(chars);
    return subjectString + right;
}
