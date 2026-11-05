/**
 * Subscribes to the matching state of a CSS media query.
 *
 * By default, `callback` is invoked immediately with the current matching
 * state and again whenever the media query status changes.
 *
 * Returns a function that removes the change listener when invoked.
 *
 * For a one-time snapshot, use `window.matchMedia(query).matches` instead.
 *
 * @param {string} query The CSS media query to evaluate.
 * @param {function} callback The function invoked with `matches`, a boolean indicating whether the media query matches.
 * @param {boolean} [immediate=true] Whether to invoke `callback` immediately.
 * @returns {function} A function that removes the media query change listener.
 * @throws {TypeError} If `query` is not a string or `callback` is not a function.
 * @example
 *
 * const unsubscribe = subscribeMediaQuery('(min-width: 768px)', matches => {
 *   document.body.style.backgroundColor = matches ? 'green' : 'red';
 * });
 *
 * // Stop listening for changes.
 * unsubscribe();
 *
 * // Listen only for future changes.
 * const stopListening = subscribeMediaQuery('(prefers-color-scheme: dark)', matches => {
 *   console.log(matches);
 * }, false);
 *
 * stopListening();
 */
export function subscribeMediaQuery(query, callback, immediate = true) {
  if (typeof query !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  const mqList = window.matchMedia(query);

  if (immediate) {
    callback(mqList.matches);
  }

  const onChange = (evt) => callback(evt.matches);

  mqList.addEventListener('change', onChange);

  return function unsubscribe() {
    mqList.removeEventListener('change', onChange);
  };
}
