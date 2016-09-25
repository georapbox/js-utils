/**
 * Converts string into string delimited by underscores.
 *
 * @category String
 * @param {String} subjectString The string to convert.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {String} The result string.
 * @example
 *
 * snakeCase('Foo Bar');
 * // -> 'foo_bar'
 *
 * snakeCase('fooBar');
 * // -> 'foo_bar'
 *
 * snakeCase('--FOO-BAR--');
 * // -> 'foo_bar'
 *
 * snakeCase('__FOO_BAR__');
 * // -> 'foo_bar'
 *
 * snakeCase('foo_bar');
 * // -> 'foo_bar'
 *
 * snakeCase('foo bar');
 * // -> 'foo_bar'
 *
 * snakeCase('foo???bar');
 * // -> 'foo_bar'
 *
 * snakeCase('foo!@#$%^&*()bar');
 * // -> 'foo_bar'
 *
 * snakeCase('-f-o-o-b-a-r-');
 * // -> f-o-o-b-a-r
 *
 * snakeCase(' f o o b a r ');
 * // -> f-o-o-b-a-r
 */
function snakeCase(subjectString) {
  'use strict';

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string');
  }

  return subjectString
    .replace(/[_]+/g, ' ')                             // Replace any `_` characters with a space.
    .replace(/[^\w\s]/g, ' ')                          // Replace any non alphanumeric characters with a space.
    .replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') // Remove leading and trailing spaces.
    .replace(/([a-z\d])([A-Z]+)/g, '$1_$2')            // Uppercase characters preceeded by lowercase characters.
    .replace(/([A-Z\d]+)([A-Z][a-z])/g, '$1_$2')       // Uppercase characters preceeded by lowercase characters and followed by lowercase characters.
    .replace(/[-\s]+/g, '_')                           // Replace spaces and `-` characters with `_` character.
    .toLowerCase();                                    // Lower case string.
}
