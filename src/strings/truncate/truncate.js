/**
 * Truncates a string based on character count.
 * @param {String} string The string to truncate.
 * @param {Number} characterCount The number of characters the truncated string contains. If ommitted or falsey, the initial string is returned.
 * @param {String} [delimiter=""] Defaults to empty string. The delimiter to add at the end of the truncated string. Optional.
 * @return {String} Returns the truncated string.
 */
function truncate(subjectString, characterCount, delimiter) {
    'use strict';

    var regex, truncated;

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    if (typeof characterCount !== 'number') {
        throw new TypeError('Expected a number');
    }

    characterCount = Math.floor(characterCount);

    if (characterCount > subjectString.length || characterCount < 0 || characterCount !== characterCount) {
        return subjectString;
    }

    regex = new RegExp('^.{0,' + characterCount + '}[\S]*', 'g');
    truncated = subjectString.match(regex);
    delimiter = delimiter || '';
    truncated = truncated[0].replace(/\s$/, '');
    truncated = truncated + delimiter;

    return truncated;
}
