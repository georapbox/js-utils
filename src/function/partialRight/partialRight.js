/**
 * Creates a function that invokes `func` with `args` appended to the arguments it receives.
 * Returns a function `partialApplicator` that, when invoked, invokes the `fn` function with the
 * originally-specified arguments, followed by all arguments passed to `partialApplicator`.
 *
 * @category Function
 * @param {function} func The function to be invoked with the partially applied arguments.
 * @param {*} [args...] The arguments to be partially applied.
 * @throws {TypeError} If `func` is not function.
 * @return {function} partialApplicator A function that invokes the originally-specified function `fn`.
 * @example
 *
 * var greet = function (greeting, name) {
 *   return greeting + ' ' + name;
 * };
 *
 * var greetGeorge = partialRight(greet, 'George');
 * greetGeorge('Hello');
 * // -> "Hello George";
 */
function partialRight(func /* , args... */) {
  'use strict';

  var slice, args_a;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  slice = Array.prototype.slice;
  args_a = slice.call(arguments, 1);

  return function partialApplicator() {
    var args_b = slice.call(arguments);
    return func.apply(undefined, args_b.concat(args_a));
  };
}
