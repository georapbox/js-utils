/**
 * Converts a camel cased or snake cased string into a string delimited by dashes.
 *
 * @category String
 * @param {String} subjectString The string to dasherize.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {String} The converted string.
 * @example
 *
 * dasherize('backgroundColor');
 * // -> 'background-color'
 *
 * dasherize('MozBackgroundImage');
 * // -> '-moz-background-image'
 *
 * dasherize(['MozBackgroundImage']);
 * // -> Throws TypeError
 *
 * dasherize('-moz-background-image');
 * // -> '-moz-background-image'
 */
function dasherize(subjectString) {
  'use strict';

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string');
  }

  return subjectString
    .replace(/[_\s]+/g, '-')
    .replace(/([A-Z])/g, '-$1')
    .replace(/-+/g, '-')
    .toLowerCase();
}
