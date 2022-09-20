'use strict';

/**
 * Converts a string to [snake case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 * Combines words by replacing each space with an underscore (_).
 *
 * @param {String} subjectString The string to convert.
 * @throws {TypeError} Throws if `subjectString` is not string.
 * @returns {String} Returns the snake cased string.
 * @example
 *
 * snakeCase('the quick brown fox jumps over the lazy dog');
 * // => 'the_quick_brown_fox_jumps_over_the_lazy_dog'
 *
 * snakeCase('the_quick_brown_fox_jumps_over_the_lazy_dog');
 * // => 'the_quick_brown_fox_jumps_over_the_lazy_dog'
 *
 * snakeCase('the-quick-brown-fox-jumps-over-the-lazy-dog');
 * // => 'the_quick_brown_fox_jumps_over_the_lazy_dog'
 *
 * snakeCase('theQuickBrownFoxJumpsOverTheLazyDog');
 * // => 'the_quick_brown_fox_jumps_over_the_lazy_dog'
 *
 * snakeCase('TheQuickBrownFoxJumpsOverTheLazyDog');
 * // => 'the_quick_brown_fox_jumps_over_the_lazy_dog'
 *
 * snakeCase('The Quick Brown Fox Jumps Over The Lazy Dog');
 * // => 'the_quick_brown_fox_jumps_over_the_lazy_dog'
 *
 * snakeCase('the - quick ( * brown# )fox:> < jumps; % over , the ^ lazy & dog');
 * // => 'the_quick_brown_fox_jumps_over_the_lazy_dog'
 *
 * snakeCase('theQUICKBrownFoxJumpsOverTheLazyDog');
 * // => 'the_q_u_i_c_k_brown_fox_jumps_over_the_lazy_dog'
 *
 * snakeCase('thequickbrownfoxjumpsoverthelazydog');
 * // => 'thequickbrownfoxjumpsoverthelazydog'
 *
 * snakeCase(' () @#$ @# %the quick brown fox jumps over the lazy dog  #!#$% <> ');
 * // => 'the_quick_brown_fox_jumps_over_the_lazy_dog'
 */
const snakeCase = subjectString => {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  const capitalsRegexp = /[A-Z\u00C0-\u00D6\u00D9-\u00DD]/g;
  // https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex/25575009#25575009
  const wordSeparatorRegexp = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]+/;
  const lowercase = subjectString.replace(capitalsRegexp, match => ' ' + (match.toLowerCase() || match)); // Replace all capitals with space + lower case equivalent
  const words = lowercase.split(wordSeparatorRegexp); // Split by spaces or any punctuation characters
  const result = words.filter(Boolean).join('_');
  return result;
};

module.exports = snakeCase;
