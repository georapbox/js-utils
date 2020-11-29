'use strict';

/**
 * Creates a new string with all occurrences of `subString` replaced with `replaceString`.
 *
 * @param {String} subjectString The initial string.
 * @param {String} subString The substring to replace.
 * @param {String} replaceString The substring to replace with.
 * @param {Boolean} [caseInsensitive] If true or any truthy value, the lookup is case insensitive.
 * @throws {TypeError} Throws if `subjectString` is not string.
 * @throws {TypeError} Throws if `subString` is not string.
 * @throws {TypeError} Throws if `replaceString` is not string.
 * @return {String} Returns the final string.
 * @example
 *
 * replaceAll('The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?', 'dog', 'ferret');
 * // -> 'The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?'
 *
 * replaceAll('The quick brown fox jumps over the lazy dog.', ' ', '-');
 * // -> 'The-quick-brown-fox-jumps-over-the-lazy-dog.'
 *
 * replaceAll('The quick brown\tfox jumps\tover the lazy dog.', '\t', ' ');
 * // -> 'The quick brown fox jumps over the lazy dog.'
 *
 * replaceAll('The quick brown fox jumps over the lazy DOG. If the dog reacted, was it really lazy?', 'dog', 'ferret', true);
 * // -> 'The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?'
 */
function replaceAll(subjectString, subString, replaceString, caseInsensitive) {
  if (
    typeof subjectString !== 'string'
    || typeof subString !== 'string'
    || typeof replaceString !== 'string'
  ) {
    throw new TypeError('Expected a string for the first three arguments');
  }

  subString = subString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  return subjectString.replace(new RegExp(subString, caseInsensitive ? 'gi' : 'g'), replaceString);
}

module.exports = replaceAll;
