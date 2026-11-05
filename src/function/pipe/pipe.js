/**
 * Creates a function that performs left-to-right function composition.
 *
 * The leftmost function receives all arguments passed to the composed
 * function. Each remaining function receives the result of the function
 * to its left as its only argument.
 *
 * The composed function preserves the caller's `this` binding.
 * If no functions are provided, an identity function is returned.
 * If only one function is provided, it is returned unchanged.
 *
 * @param {...function} fns The functions to compose.
 * @returns {function} The composed function.
 * @throws {TypeError} If any argument is not a function.
 * @example
 *
 * const inc = x => x + 1;
 * const double = x => x * 2;
 *
 * pipe(inc, double)(3);
 * // => 8
 *
 * pipe(double, inc)(3);
 * // => 7
 *
 * const greeting = (firstName, lastName) => `Hello, my name is ${firstName} ${lastName}.`;
 * const capitalize = str => str.toUpperCase();
 *
 * const shoutGreeting = pipe(greeting, capitalize);
 *
 * shoutGreeting('John', 'Doe');
 * // => 'HELLO, MY NAME IS JOHN DOE.'
 *
 * pipe()(42);
 * // => 42
 */
export function pipe(...fns) {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('Expected all arguments to be functions');
    }
  }

  if (fns.length === 0) {
    return (value) => value;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function (...args) {
    let index = 0;
    let result = fns[index].apply(this, args);

    while (index < fns.length - 1) {
      index++;
      result = fns[index].call(this, result);
    }

    return result;
  };
}
