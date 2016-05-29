/**
 * Removes suffix from start of a string.
 *
 * @category String
 * @param {String} subjectString The original string.
 * @param {String} [suffix] The suffix substring to remove from the original string.
 * @throws {TypeError} If `subjectString` is not string.
 * @throws {TypeError} If `suffix` is not string but not if is  `null` or `undefined`.
 * @return {String} The result string.
 * @example
 *
 * removeSuffix('foobar__', '__');
 * // -> 'foo'
 *
 * removeSuffix('foobar__', '??');
 * // -> 'foobar'
 *
 * removeSuffix('foobar__');
 * // -> 'foobar'
 *
 * removeSuffix('foobar__', {});
 * // -> TypeError
 */
function removeSuffix(subjectString, suffix) {
    'use strict';

    var strLen, suffixLen;

    if (typeof subjectString !== 'string' || typeof suffix !== 'string' && suffix != null) {
        throw new TypeError('Expected a string');
    }

    strLen = subjectString.length;
    suffixLen = suffix ? suffix.length : 0;

    return subjectString.indexOf(suffix, strLen - suffixLen) !== -1 ?
        subjectString.slice(0, strLen - suffixLen) : subjectString;
}
