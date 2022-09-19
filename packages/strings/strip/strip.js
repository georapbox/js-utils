'use strict';

/**
 * Creates a new string with all occurrences of [string1], [string2],... removed.
 *
 * @param {String} subjectString The string to process.
 * @param {...String} [...args] The substrings to remove from the original string.
 * @throws {TypeError} If `subjectString` is not string.
 * @returns {String} The result string.
 * @example
 *
 * const str = 'Lorem_ipsum_dolor_sit_amet. Lorem+ipsum+dolor+sit+amet. 123456789';
 *
 * strip(str, '_');
 * // => 'Loremipsumdolorsitamet. Lorem+ipsum+dolor+sit+amet. 123456789'
 *
 * strip(str, '+');
 * // => 'Lorem_ipsum_dolor_sit_amet. Loremipsumdolorsitamet. 123456789'
 *
 * strip(str, '123');
 * // => 'Lorem_ipsum_dolor_sit_amet. Lorem+ipsum+dolor+sit+amet. 456789'
 *
 * strip(str, 'Lorem');
 * // => '_ipsum_dolor_sit_amet. +ipsum+dolor+sit+amet. 123456789'
 */
const strip = (subjectString, ...args) => {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  for (let index = 0; index < args.length; index += 1) {
    subjectString = subjectString.split(args[index]).join('');
  }

  return subjectString;
};

module.exports = strip;
