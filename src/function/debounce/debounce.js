/**
 * Creates a debounced function that delays invoking `fn` until `wait`
 * milliseconds have elapsed since its last call.
 *
 * By default, `fn` is invoked on the trailing edge with the arguments
 * and `this` binding of the most recent call.
 *
 * When `immediate` is truthy, `fn` is invoked on the leading edge instead,
 * and subsequent calls are ignored until the function has not been called
 * for `wait` milliseconds.
 *
 * The debounced function always returns `undefined`.
 *
 * @param {function} fn The function to debounce.
 * @param {number} [wait=0] The delay in milliseconds.
 * @param {boolean} [immediate=false] Whether to invoke `fn` on the leading edge.
 * @returns {function} The new debounced function.
 * @throws {TypeError} If `fn` is not a function.
 * @example
 *
 * // Trailing-edge debounce
 * const handleResize = debounce(() => {
 *   console.log('Window resized');
 * }, 250);
 *
 * window.addEventListener('resize', handleResize);
 *
 * // Leading-edge debounce
 * const handleClick = debounce(() => {
 *   console.log('Button clicked');
 * }, 1000, true);
 *
 * button.addEventListener('click', handleClick);
 */
export function debounce(fn, wait = 0, immediate = false) {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  let timerId = null;

  return function (...args) {
    const callNow = immediate && timerId === null;

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      timerId = null;

      if (!immediate) {
        fn.apply(this, args);
      }
    }, wait);

    if (callNow) {
      fn.apply(this, args);
    }
  };
}
