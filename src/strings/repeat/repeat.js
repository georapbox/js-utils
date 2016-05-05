/**
 * Repeat a string 'count' times.
 * @param {String} subjectString the string to process.
 * @param {Number} [count=0] Optional. The times to repeat the string. Defaults to 0.
 * @returns {String} Returns the result string.
 */
function repeat(subjectString, count) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    if (count == null || count < 0 || count === Infinity || count !== count) {
        count = 0;
    }

    count = count | 0; // Floor count.
    return new Array(count + 1).join(subjectString);
}
