/**
 * Pad `subjectString` on left side to the given `len`, with optional `chars` defaulting to a space.
 *
 * @category String
 * @param {String} subjectString The string to process.
 * @param {Number} len The length to pad the string.
 * @param {String} [chars=' '] The character(s) to use for padding.
 * @return {String} The result padded string.
 * @example
 *
 * padLeft('Hello', 10);
 * // -> '     Hello'
 *
 * padLeft('Hello', 5, '-');
 * // -> '-----Hello'
 */
function padLeft(subjectString, len, chars) {
    'use strict';

    var left;

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    chars = chars || ' '; // Set default character.

    if (subjectString.length >= len) {
        return subjectString;
    }

    left = [];
    left.length = len - subjectString.length + 1;
    left = left.join(chars);

    return left + subjectString;
}
