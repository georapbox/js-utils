/**
 * @module cookie
 * @category Misc
 */
(function (name, context, definition) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    } else {
        context[name] = definition();
    }
}('cookie', this, function () {
    'use strict';

    /**
     * Creates a new cookie.
     *
     * @function create
     * @param {String} name The name of the cookie to create.
     * @param {String} value The value of the cookie to create.
     * @param {String} [expiresOn=''] Denotes when the cookie expires.
     *        If is of type `number`, denotes the number of days the cookie is active. If is set to 0 cookie's expiration is set to Session.
     *        If is of type `string` the provided string must be of UTC/GMT format
     *        eg. "Mon, 25 Apr 2016 02:47:11 UTC", else expirations is set to Session.
     * @param {String} [path='/'] Optional. The directory where the cookie is active.
     * @example
     *
     * // Create a cookie with name "my-cookie1" and value "test1" that expires 3 days from now.
     * cookie.create('my-cookie1', 'test1', 3);
     *
     * // Create a cookie with name "my-cookie2" and value "test2" that expires with session.
     * cookie.create('my-cookie2', 'test2');
     *
     * // Create a cookie with name "my-cookie3" and value "test3" that expires with session.
     * cookie.create('my-cookie3', 'test3', 0);
     *
     * // Create a cookie with name "my-cookie4" and value "test4" that expires on "Mon, 25 Apr 2016 02:47:11 UTC".
     * cookie.create('my-cookie4', 'test4', 'Mon, 25 Apr 2016 02:47:11 UTC');
     *
     * // Create a cookie with name "my-cookie5" and value "test5" that expires 2 days from now and the path is "/my-page".
     * cookie.create('my-cookie5', 'test5', 2, '/my-page');
     *
     * // Create a cookie with name "my-cookie6" and value "test6" that expires on "Mon, 20 Jun 2016 00:30:20 UTC" and the path is "/my-page".
     * cookie.create('my-cookie6', 'test6', new Date(2016, 5, 20, 3, 30, 20, 20).toUTCString(), '/my-page');
     */
    function createCookie(name, value, expiresOn, path) {
        var date, expires;

        if (typeof expiresOn === 'number' && expiresOn !== 0) {
            date = new Date();
            date.setTime(date.getTime() + Math.ceil(expiresOn) * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        } else if (typeof expiresOn === 'string') {
            expires = '; expires=' + expiresOn;
        } else {
            expires = '';
        }

        document.cookie = name + '=' + value + expires + '; path=' + (path || '/');
    }

    /**
     * Reads a cookie by its name.
     *
     * @function read
     * @param {String} [name] The name of the cookie to read.
     *        If not provided or is not of type `string` the whole cookie string is returned.
     * @return {String} Returns the value of the cookie if exists, else `null`.
     * @example
     *
     * // From the example above and supposing we are on root directory.
     *
     * cookie.read('my-cookie1');
     * // -> "test1"
     *
     * cookie.read('my-cookie2');
     * // -> "test2"
     *
     * cookie.read('my-cookie5');
     * // -> null
     *
     * cookie.read('non-existent-cookie');
     *
     * cookie.read();
     * // -> "my-cookie1=test1; my-cookie2=test2; my-cookie3=test3; my-cookie4=test4"
     */
    function readCookie(name) {
        var cookie = document.cookie,
            nameEQ, ca, c, i, len;

        if (typeof name !== 'string') {
            return cookie;
        }

        nameEQ = name + '=';
        ca = cookie.split(';');
        len = ca.length;
        i = 0;

        for (i; i < len; i += 1) {
            c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }

        return null;
    }

    /**
     * Deletes a cookie by its name.
     *
     * @function remove
     * @param {String} name The name of the cookie to delete.
     * @example
     *
     * // From the examples above and supposing we are on root directory.
     *
     * cookie.remove('my-cookie1');
     *
     * cookie.read();
     * // -> "my-cookie2=test2; my-cookie3=test3; my-cookie4=test4"
     */
    function removeCookie(name) {
        createCookie(name, '', -1);
    }

    return {
        create: createCookie,
        read: readCookie,
        remove: removeCookie
    };
}));
