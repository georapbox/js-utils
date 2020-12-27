'use strict';

/**
 * Constructs and returns a new string which contains the specified number
 * of copies of the string on which it was called, concatenated together.
 *
 * @param {String} subjectString The string to process.
 * @param {Number} count An integer indicating the number of times to repeat the string.
 * @throws {TypeError} If `subjectString` is not string.
 * @throws {TypeError} If `count` is not number.
 * @throws {RangeError} If `count` is a negative or zero number or is greater than `Number.MAX_SAFE_INTEGER`.
 * @return {String} A new string containing the specified number of copies of the given string.
 * @example
 *
 * repeat('a', 4);
 * // -> 'aaaa'
 *
 * repeat('a', 2.5);
 * // -> 'aa' (count will be converted to integer)
 */
function repeat(subjectString, count) {
  var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
  var str, repeated;

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  if (typeof count !== 'number') {
    throw new TypeError('Expected a number for second argument');
  }

  str = '' + subjectString;

  if (count <= 0 || count > MAX_SAFE_INTEGER || count !== count) {
    throw new RangeError('Expected a positive number lower than Number.MAX_SAFE_INTEGER for second argument');
  }

  count = Math.floor(count);

  if (str.length === 0 || count === 0) {
    return '';
  }

  repeated = '';

  for (;;) {
    if ((count & 1) === 1) {
      repeated += str;
    }

    count >>>= 1;

    if (count === 0) {
      break;
    }

    str += str;
  }

  return repeated;
}

module.exports = repeat;
