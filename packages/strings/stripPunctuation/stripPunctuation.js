'use strict';

/**
 * Removes all of the punctuation from a string.
 *
 * @param {String} subjectString The string to strip the punctuation from.
 * @throws {TypeError} Throws if `subjectString` is not string.
 * @returns {String} Returns the reuslt string with all punctuation stripped.
 * @example
 *
 * const str = ';``?You can\'t [make] an *ome*let + wit&&hout \\ %break_ing/% ~ a few eg-gs.!@#-"$"+:';
 *
 * stripPunctuation(str);
 * // => You cant make an omelet without breaking a few eggs
 */
const stripPunctuation = subjectString => {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  // https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex/25575009#25575009
  const punctRegExp = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/g;
  const spaceRegExp = /\s+/g;

  return subjectString.replace(punctRegExp, '').replace(spaceRegExp, ' ');
};

module.exports = stripPunctuation;
