/**
 * Creates a curried function that collects arguments across multiple calls
 * until the specified arity is reached.
 *
 * Arguments can be provided individually or in groups. Once enough
 * arguments are collected, the original function is invoked with all
 * collected arguments and the final call's `this` binding.
 *
 * By default, the arity is determined by `fn.length`. An explicit arity
 * can be provided for functions with default or rest parameters.
 * If the arity is zero, the original function is invoked on the first call.
 *
 * @param {function} fn The function to curry.
 * @param {number} [arity=fn.length] The number of arguments required before invoking `fn`. Must be a non-negative integer.
 * @returns {function} The curried function.
 * @throws {TypeError} If `fn` is not a function or `arity` is not an integer.
 * @throws {RangeError} If `arity` is negative.
 * @example
 *
 * const add = curry((a, b) => a + b);
 *
 * add(1)(2);
 * // => 3
 *
 * const sum = curry((a, b, c) => a + b + c);
 *
 * sum(1)(2)(3);
 * // => 6
 *
 * sum(1, 2)(3);
 * // => 6
 *
 * sum(1)(2, 3);
 * // => 6
 *
 * const addWithDefaults = curry((a = 0, ...args) => a + args[0] + args[1], 3);
 *
 * addWithDefaults(1)(2)(3);
 * // => 6
 */
export function curry(fn, arity) {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  if (arity === undefined) {
    arity = fn.length;
  }

  if (!Number.isInteger(arity)) {
    throw new TypeError('Expected an integer for second argument');
  }

  if (arity < 0) {
    throw new RangeError('Expected a non-negative integer for second argument');
  }

  function curried(...args) {
    if (args.length >= arity) {
      return fn.apply(this, args);
    }

    return function (...nextArgs) {
      return curried.call(this, ...args, ...nextArgs);
    };
  }

  return curried;
}
