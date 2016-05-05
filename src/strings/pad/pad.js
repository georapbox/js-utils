/**
 * Pad `subjectString` on both sides to the given `len`, with optional `chars` defaulting to a space.
 * @param {String} subjectString The string to process.
 * @param {Number} len The length to pad the string.
 * @param {String} [chars=' '] Optional. Defaults to sapce. The character(s) to use for padding.
 * @returns {String} Returns the result string.
 */
function pad(subjectString, len, chars) {
    'use strict';

    var left, right;

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    chars = chars || ' '; // Set default character.

    if (subjectString.length >= len) {
        return subjectString;
    }

    len = len - subjectString.length;
    left = [];
    right = [];
    left.length = Math.ceil(len / 2) + 1;
    right.length = Math.floor(len / 2) + 1;
    left = left.join(chars);
    right = right.join(chars);

    return left + subjectString + right;
}
