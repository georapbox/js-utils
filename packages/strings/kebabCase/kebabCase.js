'use strict';

/**
 * Converts a string to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 * Combines words of a string by replacing each space with a dash (-).
 *
 * @param {String} subjectString The string to convert.
 * @throws {TypeError} Throws if `subjectString` is not string.
 * @returns {String} Returns the kebab cased string.
 * @example
 *
 * kebabCase('the quick brown fox jumps over the lazy dog');
 * // => 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('   the quick brown fox jumps over the lazy dog   ');
 * // => 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('the_quick_brown_fox_jumps_over_the_lazy_dog');
 * // => 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('the-quick-brown-fox-jumps-over-the-lazy-dog');
 * // => 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('theQuickBrownFoxJumpsOverTheLazyDog');
 * // => 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('TheQuickBrownFoxJumpsOverTheLazyDog');
 * // => 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('The Quick Brown Fox Jumps Over The Lazy Dog');
 * // => 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('the - quick ( * brown# )fox:> < jumps; % over , the ^ lazy & dog');
 * // => 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('theQUICKBrownFoxJumpsOverTheLazyDog');
 * // => 'the-q-u-i-c-k-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('thequickbrownfoxjumpsoverthelazydog');
 * // => 'thequickbrownfoxjumpsoverthelazydog'
 *
 * kebabCase(' () @#$ @# %the quick brown fox jumps over the lazy dog  #!#$% <> ');
 * // => 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 */
const kebabCase = subjectString => {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  const capitalsRegexp = /[A-Z\u00C0-\u00D6\u00D9-\u00DD]/g;
  // https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex/25575009#25575009
  const wordSeparatorRegexp = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]+/;
  const lowercase = subjectString.replace(capitalsRegexp, match => ' ' + (match.toLowerCase() || match)); // Replace all capitals with space + lower case equivalent
  const words = lowercase.split(wordSeparatorRegexp); // Split by spaces or any punctuation characters
  const result = words.filter(Boolean).join('-');
  return result;
};

module.exports = kebabCase;
