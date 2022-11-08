/**
 * Escapes the `RegExp` special characters `^`, `$`, `\`, `.`, `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}`, and `|` in a string.
 *
 * @param {String} subjectString The string to escape.
 * @throws {TypeError} If `subjectString` is not string.
 * @returns {String} Returns the escaped string.
 * @example
 *
 * escapeRegExp('[MDN](https://developer.mozilla.org/)');
 * // => '\\[MDN\\]\\(https://developer\\.mozilla\\.org/\\)'
 *
 * escapeRegExp('*_* +_+ ...');
 * // => '\\*_\\* \\+_\\+ \\.\\.\\.'
 */
const escapeRegExp = subjectString => {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  const regExpChars = /[\\^$.*+?()[\]{}|]/g;

  return RegExp(regExpChars.source).test(subjectString)
    ? subjectString.replace(regExpChars, '\\$&')
    : subjectString;
};

module.exports = escapeRegExp;
