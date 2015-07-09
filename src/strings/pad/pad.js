/**
 * Pad "str" on both sides to the given "len", with optional "ch" defaulting to a space.
 * @param {string} str The string to process.
 * @param {number} len The length to pad the string.
 * @param {string|number} [ch] The character(s) to use for padding. Default is space.
 * @returns {string} The processed string.
 */
function pad(str, len, ch) {
    'use strict';

    ch = ch || ' '; // Set default character.

    if (str.length >= len) {
        return str;
    }

    len = len - str.length;

    var left = [],
        right = [];

    left.length = Math.ceil(len / 2) + 1;
    right.length = Math.floor(len / 2) + 1;
    left = left.join(ch);
    right = right.join(ch);

    return left + str + right;
}