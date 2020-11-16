'use strict';

/**
 * Creates a new function that invokes the provided function `func` with `partials` appended to the arguments it receives.
 *
 * @param {function} func The function to partially apply arguments to.
 * @param {*} [...args] The arguments to be partially applied.
 * @throws {TypeError} Throws if `func` is not a function.
 * @returns {function} Returns the new partially applied function.
 * @example
 *
 * var greet = function (greeting, title, fname, lname) {
 *   return greeting + ', ' + title + ' ' + fname + ' ' + lname + '.';
 * };
 *
 * var greetMrJoeBlack = partialRight(greet, 'Mr.', 'Joe', 'Black');
 *
 * greetMrJoeBlack('Hello'); // -> Hello, Mr. Joe Black.
 */
function partialRight(func /* , ...args_a */) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  for (var _len = arguments.length, args_a = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args_a[_key - 1] = arguments[_key];
  }

  return function (/* , ...args_b */) {
    for (var _len2 = arguments.length, args_b = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args_b[_key2] = arguments[_key2];
    }

    return func.apply(void 0, args_b.concat(args_a));
  };
}

module.exports = partialRight;