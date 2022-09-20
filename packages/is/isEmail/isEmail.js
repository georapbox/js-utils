'use strict';

/**
 * Validates a string as email address.
 *
 * @param {String} value The string to validate.
 * @returns {Boolean} True if valid email, else false.
 * @example
 *
 * isEmail('me@example.com';
 * // => true
 *
 * isEmail('a.nonymous@example.com';
 * // => true
 *
 * isEmail('name+tag@example.com';
 * // => true
 *
 * isEmail('name\@tag@example.com');
 * // => true
 *
 * isEmail('name@tag@example.com');
 * // => true
 *
 * isEmail('spaces are allowed@example.com');
 * // => true
 *
 * isEmail("!#$%&'+-/=.?^`{|}~@[1.0.0.127]");
 * // => true
 *
 * isEmail("!#$%&'+-/=.?^`{|}~@[IPv6:0123:4567:89AB:CDEF:0123:4567:89AB:CDEF]");
 * // => false
 */
const isEmail = value => {
  if (typeof value !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  /**
   * RFC 2822 compliant pattern to validate all emails against.
   * http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
   * @type {RegExp}
   */
  const emailRegex = /(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/; // eslint-disable-line no-control-regex

  return emailRegex.test(value);
};

module.exports = isEmail;
