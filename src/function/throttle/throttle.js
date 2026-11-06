/**
 * Creates a throttled function that invokes `fn` at most once per `wait`
 * milliseconds, apart from an initial leading-edge invocation.
 *
 * The first call invokes `fn` immediately. Additional calls during the
 * interval schedule a trailing-edge invocation with the arguments and
 * `this` binding of the most recent call.
 *
 * During continuous calls, `fn` executes at approximately the specified
 * interval. The throttled function always returns `undefined`.
 *
 * @param {function} fn The function to throttle.
 * @param {number} [wait=0] The minimum interval between invocations, in milliseconds.
 * @returns {function} The new throttled function.
 * @throws {TypeError} If `fn` is not a function.
 * @example
 *
 * // Limit scroll updates to approximately once every 250 milliseconds.
 * const handleScroll = throttle(() => {
 *   console.log(window.scrollY);
 * }, 250);
 *
 * window.addEventListener('scroll', handleScroll);
 *
 * // The most recent arguments are used for trailing calls.
 * const log = throttle(value => {
 *   console.log(value);
 * }, 100);
 *
 * log('first');  // Logs 'first' immediately
 * log('second'); // Schedules 'second' for the trailing edge
 */
export function throttle(fn, wait = 0) {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  let timerId = null;
  let lastRan = null;

  return function (...args) {
    const now = Date.now();
    const remaining = wait - (now - lastRan);

    if (lastRan === null || remaining <= 0) {
      clearTimeout(timerId);
      timerId = null;
      lastRan = now;

      fn.apply(this, args);
    } else {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        timerId = null;
        lastRan = Date.now();

        fn.apply(this, args);
      }, remaining);
    }
  };
}
