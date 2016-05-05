/**
 * Generates a random string of n characters, using the "chars" specified.
 * @param {number} n The length of the final random  string.
 * @param {string} [chars] The characters to use in order to generate the string.
 *        Default value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.
 * @return {string} Returns the random string.
 */
function randomString(n, chars) {
    'use strict';

    // Default values, if arguments omitted.
    n = n || 0;
    chars = chars || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    var result = '',
        index;

    for (index = n; index > 0; --index) {
        result += chars[Math.round(Math.random() * (chars.length - 1))];
    }

    return result;
}
