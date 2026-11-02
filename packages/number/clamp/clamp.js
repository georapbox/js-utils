/**
 * Clamps number within the inclusive `min` and `max` bounds,
 * making sure it does not go beyond them on either side.
 *
 * The mplementation is based on proposal for `Nmuber.prototype.clamp` (originally `Math.clamp`):
 * https://tc39.es/proposal-math-clamp
 *
 * @param {Number} value The number to clamp.
 * @param {Number} min The lower bound.
 * @param {Number} max The upper bound.
 * @throws {TypeError} If any of the arguments is not a number.
 * @throws {RnageError} If `min` is greater than `max`.
 * @returns {Number} The clamped number.
 * @example
 *
 * clamp(10, -5, 5);
 * // => 5
 *
 * clamp(-10, -5, 5);
 * // => -5
 *
 * clamp(-15, 0, 100);
 * // => 0
 *
 * clamp(120, 0, 100);
 * // => 100
 *
 * clamp(NaN, 0, 100);
 * // => NaN
 */
export const clamp = (value, min, max) => {
  if (typeof value !== 'number') {
    throw new TypeError('value must be a Number');
  }

  if (typeof min !== 'number') {
    throw new TypeError('min must be a Number');
  }

  if (typeof max !== 'number') {
    throw new TypeError('max must be a Number');
  }

  if (Number.isNaN(min) || Number.isNaN(max) || Number.isNaN(value)) {
    return NaN;
  }

  if (min > max) {
    throw new RangeError('min cannot be greater than max');
  }

  if (Object.is(min, max)) {
    return min;
  }

  if (Object.is(value, -0) && Object.is(min, +0)) {
    return +0;
  }

  if (Object.is(value, +0) && Object.is(min, -0)) {
    return +0;
  }

  if (value < min) {
    return min;
  }

  if (Object.is(value, -0) && Object.is(max, +0)) {
    return -0;
  }

  if (Object.is(value, +0) && Object.is(max, -0)) {
    return -0;
  }

  if (value > max) {
    return max;
  }

  return value;
};
