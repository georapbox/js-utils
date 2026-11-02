/**
 * Checks if a value is an iterable.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} Returns `true` if value is iterable; otherwise `false`.
 * @example
 *
 * function* generatorFunc() {
 *   yield 'foo';
 * }
 *
 * isIterable([]);
 * // => true
 *
 * isIterable(new Map());
 * // => true
 *
 * isIterable('');
 * // => true
 *
 * isIterable(generatorFunc());
 * // => true
 *
 * isIterable({});
 * // => false
 *
 * isIterable(0);
 * // => false
 *
 * isIterable(null);
 * // => false
 */
export const isIterable = (value) => {
  return value != null && typeof value[Symbol.iterator] === 'function';
};
