'use strict';

/**
 * Converts a string to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 * Combines words of a string by replacing each space with a dash (-).
 *
 * @param {String} subjectString The string to convert.
 * @throws {TypeError} Throws if `subjectString` is not string.
 * @return {String} Returns the kebab cased string.
 * @example
 *
 * kebabCase('the quick brown fox jumps over the lazy dog');
 * // -> 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('the_quick_brown_fox_jumps_over_the_lazy_dog');
 * // -> 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('the-quick-brown-fox-jumps-over-the-lazy-dog');
 * // -> 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('theQuickBrownFoxJumpsOverTheLazyDog');
 * // -> 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('TheQuickBrownFoxJumpsOverTheLazyDog');
 * // -> 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('The Quick Brown Fox Jumps Over The Lazy Dog');
 * // -> 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('the - quick ( * brown# )fox:> < jumps; % over , the ^ lazy & dog');
 * // -> 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('theQUICKBrownFoxJumpsOverTheLazyDog');
 * // -> 'the-q-u-i-c-k-brown-fox-jumps-over-the-lazy-dog'
 *
 * kebabCase('thequickbrownfoxjumpsoverthelazydog');
 * // -> 'thequickbrownfoxjumpsoverthelazydog'
 *
 * kebabCase(' () @#$ @# %the quick brown fox jumps over the lazy dog  #!#$% <> ');
 * // -> 'the-quick-brown-fox-jumps-over-the-lazy-dog'
 */
function kebabCase(subjectString) {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  var capitalsRegexp = /[A-Z\u00C0-\u00D6\u00D9-\u00DD]/g;
  var wordSeparatorRegexp = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]+/; // http://stackoverflow.com/a/25575009
  var lowercase = subjectString.replace(capitalsRegexp, function (match) {
    return ' ' + (match.toLowerCase() || match); // Replace all capitals with space + lower case equivalent
  });
  var words = lowercase.split(wordSeparatorRegexp); // Split by spaces or any punctuation characters
  var result = words.filter(Boolean).join('-');

  return result;
}

module.exports = kebabCase;