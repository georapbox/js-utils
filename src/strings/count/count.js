/**
 * Counts the occurrences of substring in a string.
 *
 * @category String
 * @param {String} subjectString The string.
 * @param {String} searchString The string to search for.
 * @param {Boolean} [caseInsensitive=false] If true, the lookup is case insensitive.
 * @throws {TypeError} If `subjectString` is not string.
 * @throws {TypeError} If `searchString` is not string.
 * @return {Number} The number of occurrences of search string in original string.
 * @example
 *
 * var str = 'Lorem ipsum dolor sit | amet, consectetur - adipisicing elit. Aperiam inventore neque doloremque dolor ibus impedit ipsam, incidunt. Doloremque eveniet sit, illo, et incidunt, maiores sequi accusantium impedit aperiam officiis aspernatur nobis.';
 *
 * count(str, 'dolor'));
 * // -> 3
 *
 * count(str, 'dolor', true));
 * // -> 4 (case insensitive lookup)
 *
 * count(str, '|'));
 * // -> 1
 *
 * count(str, ','));
 * // -> 5
 *
 * count(str, '');
 * // -> 245
 *
 * count(str, {}));
 * // -> Throws TypeError
 */
function count(subjectString, searchString, caseInsensitive) {
    'use strict';

    var n, pos, step;

    if (typeof subjectString !== 'string' || typeof searchString !== 'string') {
        throw new TypeError('Expected a string');
    }

    if (searchString.length <= 0) {
        return subjectString.length + 1;
    }

    // Case insensitive lookup.
    if (caseInsensitive === true) {
        searchString = searchString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return (subjectString.match(new RegExp(searchString, 'gi')) || []).length;
    }

    // Case sensitive lookup.
    n = 0;
    pos = 0;
    step = searchString.length;

    while (true) {
        pos = subjectString.indexOf(searchString, pos);

        if (pos >= 0) {
            n += 1;
            pos += step;
        } else {
            break;
        }
    }

    return n;
}
