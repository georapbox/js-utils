'use strict';

/**
 * Removes all of the punctuation from a string.
 *
 * @category String
 * @param {String} subjectString The string to strip the punctuation from.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {String} The stripped string.
 * @example
 *
 * var str = ';``?You can\'t [make] an *ome*let + wit&&hout \\ %break_ing/% ~ a few eg-gs.!@#-"$"+:';
 *
 * stripPunctuation(str);
 * // -> You cant make an omelet without breaking a few eggs
 */
function stripPunctuation(subjectString) {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string');
  }

  return subjectString.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
}

module.exports = stripPunctuation;