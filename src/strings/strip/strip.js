/**
 * Creates a new string with all occurrences of [string1], [string2],... removed.
 * @param {String} subjectString The string to process.
 * @param {String} [...args] Optional. The substrings to remove from the original string.
 * @returns {String} Returns the result string.
 */
function strip(subjectString /*...args*/) {
    'use strict';

    var index, len;

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    index = 1;
    len = arguments.length;

    for (index; index < len; index += 1) {
        subjectString = subjectString.split(arguments[index]).join('');
    }

    return subjectString;
}
