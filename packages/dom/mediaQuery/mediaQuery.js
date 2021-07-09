/**
 * Determines if the document matches a media query string.
 *
 * @param {String} mediaQueryString A string specifying the media query to parse into a MediaQueryList.
 * @param {function} callback Callback function which is invoked whenever the media query status changes.
 * @param {Boolean} [immediate=true] If `true` the `callback` function is called immediately, otherwise is called only when the media query status changes.
 * @returns {function} Returns a function that when called it will remove the event handler that listens for media query status changes.
 * @throws {TypeError} If `mediaQueryString` is not string.
 * @throws {TypeError} If `callback` is not function.
 * @example
 *
 * // Start listening for media query status changes.
 * var unsubscribe = mediaQuery('(min-width: 480px) and (max-width: 768px)', function (matches) {
 *   document.body.style.backgroundColor = matches ? 'green' : 'red';
 * });
 *
 * // Stop listening for media query status changes.
 * unsubscribe();
 */
function mediaQuery(mediaQueryString, callback, immediate) {
  var mqList;

  function onChange() {
    callback(mqList.matches);
  }

  if (typeof mediaQueryString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  mqList = window.matchMedia(mediaQueryString);

  if (typeof immediate === 'undefined' || Boolean(immediate)) {
    callback(mqList.matches);
  }

  mqList.addEventListener('change', onChange);

  return function unsubscribe() {
    mqList.removeEventListener('change', onChange);
  };
}

module.exports = mediaQuery;
