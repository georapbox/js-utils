/**
 * Returns a string repeated 'count' times.
 * @param {string} string the string to process.
 * @param {number} count The times to repeat the string.
 * @returns {string} the final string.
 */
function repeat(string, count) {
    'use strict';

    if (string == null) { // jshint ignore: line
        throw new TypeError('can\'t convert ' + string + ' to object');
    }

    if (count < 0) {
        throw new RangeError('repeat count must be non-negative');
    }

    if (count === Infinity) {
        throw new RangeError('repeat count must be less than infinity');
    }

    if (count == null) { // jshint ignore: line
        count = 0;
    }

    count = count | 0; // Floor count.
    return new Array(count + 1).join(string);
}
