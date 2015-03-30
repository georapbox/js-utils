/**
 * Pad "str" on left side to the given "len", with optional "ch" defaulting to a space.
 * @param {string} str The string to process.
 * @param {number} len The length to pad the string.
 * @param {string|number} [ch] The character(s) to use for padding. Default is space.
 * @returns {string} The processed string.
 */
function padLeft(str, len, ch) {
    'use strict';

    ch = ch || ' '; // Set default character.

    if (str.length >= len) {
        return str;
    }

    var left = [];
    left.length = len - str.length + 1;
    left = left.join(ch);
    return left + str;
}