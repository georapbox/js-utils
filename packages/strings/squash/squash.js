/**
 * Removes all spaces from a string; optionally removes any escape sequences such as `\t`, `\n`, `\f`, `\r` and `\v`.
 *
 * @param {String} subjectString The initial string to process.
 * @param {Boolean} [squashEscapeSequences] If set to a truthy value any escape sequences will be removed as well.
 * @throws {TypeError} If `subjectString` is not string.
 * @returns {String} The result string with all spaces removed.
 * @xample
 *
 * squash('Lorem ispum dolor sit amet');
 * // => 'Loremispumdolorsitamet'
 *
 * squash('   Lorem   ispum   dolor sit amet  ');
 * // => 'Loremispumdolorsitamet'
 *
 * squash('\tLorem \n\vispum \tdolor \fsit \n amet  ');
 * // => '\tLorem\n\vispum\tdolor\fsit\namet'
 *
 * squash('\tLorem \n\vispum \tdolor \fsit \n amet  ', true);
 * // => 'Loremispumdolorsitamet'
 */
const squash = (subjectString, squashEscapeSequences) => {
  const regex = squashEscapeSequences ? /\s+/g : / /g;

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  return subjectString.replace(regex, '');
};

module.exports = squash;
