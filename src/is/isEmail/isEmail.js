/**
 * Validates a string as email address.
 *
 * @category Is
 * @param {String} value The string to validate.
 * @return {Boolean} True if valid email, else false.
 * @example
 *
 * isEmail('me@example.com';
 * // -> true
 *
 * isEmail('a.nonymous@example.com';
 * // -> true
 *
 * isEmail('name+tag@example.com';
 * // -> true
 *
 * isEmail('name@tag@example.com');
 * // -> false
 *
 * isEmail('spaces are allowed@example.com');
 * // -> false
 *
 * isEmail("!#$%&'+-/=.?^`{|}~@[1.0.0.127]");
 * // -> false
 *
 * isEmail("!#$%&'+-/=.?^`{|}~@[IPv6:0123:4567:89AB:CDEF:0123:4567:89AB:CDEF]");
 * // -> false
 */
function isEmail(value) {
  'use strict';

  var regex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i; // eslint-disable-line no-useless-escape

  if (typeof value !== 'string' || value === '') {
    return false;
  }

  return value.match(regex) !== null;
}
