/**
 * @module cookie
 * @category DOM
 */
module.exports = (function () {
  /**
   * Creates a new cookie.
   *
   * @function set
   * @param {String} name The name of the cookie to create.
   * @param {String} value The value of the cookie to create.
   * @param {Object} [options]
   * @param {String} [options.path="/"] The path where cookie is visible. If not specified, defaults to the current path of the current document location.
   * @param {String} [options.domain] The domain where cookie is visible. If not specified, this defaults to the host portion of the current document location. If a domain is specified, subdomains are always included.
   * @param {String} [options.expires] A date in GMTString format that tells when cookie expires. If not specified it will expire at the end of session. If date is in the past, then the cookie is deleted. Use `Date.prototype.toUTCString()` to properly format it.
   * @param {Number} [options['max-age']] Max age in seconds from the time the cookie is set; alternative to `expires`. If not specified it will expire at the end of session. If zero or negative, then the cookie is deleted.
   * @param {String} [options.secure] Cookie to only be transmitted over secure protocol as https.
   * @param {String} [options.samesite] SameSite prevents the browser from sending this cookie along with cross-site requests. Possible values are "lax", "strict" or "none".
   * @throws {TypeError} If `name` is not string.
   * @throws {TypeError} If `value` is not string.
   * @returns {void}
   * @example
   *
   * cookie.set('foo', 'bar', {
   *   path: '/',
   *   domain: 'example.com',
   *   'max-age': 3600, // value in seconds; expires after one hour from the current time
   *   secure: true,
   *   samesite: 'strict'
   * });
   * // -> undefined
   */
  function setCookie(name, value, options) {
    var cookie, optionKey, optionValue;

    if (typeof name !== 'string' || typeof value !== 'string') {
      throw new TypeError('Expected a string for first and second argument');
    }

    if (!options || typeof options !== 'object') {
      options = {};
    }

    options.path = options.path || '/';

    cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    for (optionKey in options) {
      if (Object.prototype.hasOwnProperty.call(options, optionKey)) {
        optionValue = options[optionKey];
        cookie += '; ' + optionKey;

        if (optionValue !== true) {
          cookie += '=' + optionValue;
        }
      }
    }

    document.cookie = cookie;
  }

  /**
   * Get a cookie by its name.
   *
   * @function get
   * @param {String} [name] The name of the cookie to get.
   * @throws {TypeError} If `name` is not string.
   * @returns {String} Returns the value of the cookie if exists; otherwise an empty string.
   * @example
   *
   * cookie.get('foo');
   * // -> 'bar'
   *
   * cookie.get('cookie-that-does-not-exist');
   * // -> ''
   */
  function getCookie(name) {
    var matches;

    if (typeof name !== 'string') {
      throw new TypeError('Expected a string for first argument');
    }

    if (typeof name === 'undefined') {
      return document.cookie;
    }

    matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)')
    );

    return matches ? decodeURIComponent(matches[1]) : '';
  }

  /**
   * Deletes a cookie by its name.
   *
   * @function delete
   * @param {String} name The name of the cookie to delete.
   * @throws {TypeError} If `name` is not string.
   * @returns {void}
   * @example
   *
   * cookie.delete('foo');
   * // -> undefined
   */
  function deleteCookie(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Expected a string for first argument');
    }

    setCookie(name, '', {
      'max-age': -1
    });
  }

  return {
    set: setCookie,
    get: getCookie,
    delete: deleteCookie
  };
}());