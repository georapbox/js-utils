/**
 * Creates a function that invokes `func` with `args` prepended to the arguments it receives.
 * Returns a function `partialApplicator` that, when invoked, invokes the `fn` function with the
 * originally-specified arguments, followed by all arguments passed to `partialApplicator`.
 *
 * @category Function
 * @param {function} func The function to be invoked with the partially applied arguments.
 * @param {*} [args...] The arguments to be partially applied.
 * @throws {TypeError} If `func` is not function.
 * @return {function} partialApplicator A function that invokes the originally-specified function `func`.
 * @example
 *
 * // Example 1
 * var greet = function(greeting, name) {
 *   return greeting + ' ' + name;
 * };
 *
 * var sayHelloTo = partial(greet, 'Hello');
 * sayHelloTo('George');
 * // -> "Hello George";
 *
 * // Example 2
 * function add() {
 *   var args = Array.prototype.slice.call(arguments);
 *   return args.reduce(function (accum, val) {
 *     return accum + val;
 *   }, 0);
 * }
 *
 * var addOne = partial(add, 1);
 *
 * addOne(2);
 * // -> 3
 *
 * addOne(2, 3);
 * // -> 6
 *
 * addOne(9, 1, 4);
 * // -> 15
 */
function partial(func /* ,args... */) {
  'use strict';

  var slice, args_a;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  slice = Array.prototype.slice;
  args_a = slice.call(arguments, 1);

  return function partialApplicator() {
    var args_b = slice.call(arguments, 0);
    return func.apply(undefined, args_a.concat(args_b));
  };
}
