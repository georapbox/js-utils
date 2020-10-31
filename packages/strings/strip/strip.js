'use strict';

/**
 * Creates a new string with all occurrences of [string1], [string2],... removed.
 *
 * @category String
 * @param {String} subjectString The string to process.
 * @param {String} [args...] The substrings to remove from the original string.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {String} The result string.
 * @example
 *
 * var str = 'Lorem_ipsum_dolor_sit_amet. Lorem+ipsum+dolor+sit+amet. 123456789';
 *
 * strip(str, '_');
 * // -> 'Loremipsumdolorsitamet. Lorem+ipsum+dolor+sit+amet. 123456789'
 *
 * strip(str, '+');
 * // -> 'Lorem_ipsum_dolor_sit_amet. Loremipsumdolorsitamet. 123456789'
 *
 * strip(str, '123');
 * // -> 'Lorem_ipsum_dolor_sit_amet. Lorem+ipsum+dolor+sit+amet. 456789'
 *
 * strip(str, 'Lorem');
 * // -> '_ipsum_dolor_sit_amet. +ipsum+dolor+sit+amet. 123456789'
 */
function strip(subjectString /* args... */) {
  var index, len;

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  index = 1;
  len = arguments.length;

  for (index; index < len; index += 1) {
    subjectString = subjectString.split(arguments[index]).join('');
  }

  return subjectString;
}

module.exports = strip;