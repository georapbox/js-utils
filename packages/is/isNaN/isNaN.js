'use strict';

/**
 * Determines whether the passed value is `NaN` and its type is `Number`.
 * It is an implementation similar to native `Number.isNaN()` which is a more robust version of the original, global `isNaN()`.
 *
 * @param {*} value The value to be tested for `NaN`.
 * @returns {Boolean} Returns `true` if the given value is `NaN` and its type is `Number`; otherwise, `false`.
 * @example
 *
 * isNaN(NaN);        // => true
 * isNaN(Number.NaN); // => true
 * isNaN(0 / 0);      // => true
 *
 * isNaN(true);    // => true
 * isNaN(null);    // => true
 * isNaN(37);      // => true
 * isNaN('37');    // => true
 * isNaN('37.37'); // => true
 * isNaN('');      // => true
 * isNaN(' ');     // => true
 *
 * // e.g. these would have been true with global isNaN()
 * isNaN('NaN');     // => false
 * isNaN(undefined); // => false
 * isNaN({});        // => false
 * isNaN('blabla');  // => false
 */
const isNaN = value => {
  if (Number.isNaN) {
    return Number.isNaN(value);
  }

  // NaN is of type "number" and it is also the only primitive value which does not equal itself.
  return typeof value === 'number' && value !== value;
};

module.exports = isNaN;
