/**
 * Splits string into an array of its words.
 *
 * @category String
 * @param {String} subjectString The string to process.
 * @return {Array} The string's words.
 * @example
 *
 * words('Hello world!        \n This is a message     from outer\tspace.');
 * // -> ['Hello', 'world!', 'This', 'is', 'a', 'message', 'from', 'outer', 'space.']
 *
 * words('');
 * // -> []
 *
 * words();
 * // -> Throws TypeError.
 *
 * words(100);
 * // -> Throws TypeError.
 */
function words(subjectString) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    return subjectString.match(/\S+/g) || [];
}
