/**
 * Repeat a string 'count' times.
 *
 * @category String
 * @param {String} subjectString the string to process.
 * @param {Number} [count=0] The times to repeat the string.
 * @return {String} The result string.
 * @example
 *
 * repeat('&nbsp;', 4);
 * // -> '&nbsp;&nbsp;&nbsp;&nbsp;'
 *
 * repeat('&nbsp;', 2.5);
 * // -> '&nbsp;&nbsp;'
 *
 * repeat('&nbsp;', 0);
 * // -> ''
 *
 * repeat('&nbsp;', null);
 * // -> ''
 *
 * repeat('&nbsp;');
 * // -> ''
 *
 * repeat('&nbsp;', -2);
 * // -> ''
 *
 * repeat('&nbsp;', Infinity);
 * // -> ''
 *
 * repeat('&nbsp;', -Infinity);
 * // -> ''
 *
 * repeat('&nbsp;', NaN);
 * // -> ''
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
