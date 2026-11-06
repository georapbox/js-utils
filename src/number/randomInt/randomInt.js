/**
 * Returns a pseudo-random integer within an inclusive range.
 *
 * If `min` is greater than `max`, the bounds are swapped.
 * Both bounds must be safe integers, and the range size must not
 * exceed the maximum safe integer.
 *
 * Randomness is provided by `Math.random()` and is not suitable
 * for cryptographic purposes.
 *
 * @param {number} min The lower bound of the range.
 * @param {number} max The upper bound of the range.
 * @returns {number} A pseudo-random integer within the inclusive range.
 * @throws {TypeError} If either argument is not a safe integer.
 * @throws {RangeError} If the range size exceeds the maximum safe integer.
 * @example
 *
 * randomInt(3, 8);
 * // => An integer between 3 and 8 (inclusive)
 *
 * randomInt(8, 3);
 * // => An integer between 3 and 8 (inclusive)
 *
 * randomInt(-5, 5);
 * // => An integer between -5 and 5 (inclusive)
 *
 * randomInt(5, 5);
 * // => 5
 */
export function randomInt(min, max) {
  if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max)) {
    throw new TypeError('Expected safe integers for both arguments');
  }

  const lower = Math.min(min, max);
  const upper = Math.max(min, max);
  const range = upper - lower + 1;

  if (!Number.isSafeInteger(range)) {
    throw new RangeError('Range size exceeds the maximum safe integer');
  }

  return Math.min(upper, lower + Math.floor(Math.random() * range));
}
