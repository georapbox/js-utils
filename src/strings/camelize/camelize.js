/**
 * Converts a string into camel casing, removing "underscores", "dashes" or spaces (optional).
 * @param {String} subjectString The string to camelize.
 * @param {Boolean} [camelizeSpaces] Defines if spaces are also camelized.
 */
function camelize(subjectString, camelizeSpaces) {
    'use strict';

    var regex;

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    regex = camelizeSpaces === true ? /(\-|_|\s)+(.)?/g : /(\-|_)+(.)?/g;

    return subjectString.replace(regex, function (match, seperator, character) {
        return character ? character.toUpperCase() : '';
    });
}
