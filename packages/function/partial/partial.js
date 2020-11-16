/**
 * Creates a new function that invokes the provided function `func` with `partials` prepended to the arguments it receives.
 *
 * @param {function} func The function to partially apply arguments to.
 * @param {*} [...args] The arguments to be partially applied.
 * @throws {TypeError} Throws if `func` is not a function.
 * @returns {function} Returns the new partially applied function.
 * @example
 *
 * var add = function (a, b, c) {
 *   return a + b + c;
 * };
 *
 * var p1 = partial(add, 1);
 * p1(2, 3); // -> 6
 *
 * var p2 = partial(add, 10, 20);
 * p2(30); // -> 60
 *
 * var p3 = partial(add, 100, 200, 300);
 * p3(); // -> 600
 *
 * var p4 = partial(add);
 * p4(5, 10, 15); // -> 30
 */
function partial(func /* , ...args_a */) {
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

    return func.apply(void 0, args_a.concat(args_b));
  };
}

module.exports = partial;