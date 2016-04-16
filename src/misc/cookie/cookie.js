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
     * Reads a cookie by its name.
     * @param {String} [name] The name of the cookie to read.
     *        If not provided or is not of type `string` the whole cookie string is returned.
     * @return {String} The value of the cookie if exists, else null.
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
     * Create a new cookie.
     * @param {String} name The name of the cookie to create.
     * @param {String} value The value of the cookie to create.
     * @param {String} [expiresOn=''] When the cookie expires.
     *        If is of type `number`, denotes the number of days the cookie is active.
     *        If is set to 0 cookie's expiration is set to Session.
     *        If is of type `string` the provided string must be of UTC/GMT format
     *        eg. "Mon, 25 Apr 2016 02:47:11 UTC", else expirations is set to Session.
     * @param {String} [path='/'] The directory where the cookie is active.
     */
    function createCookie(name, value, expiresOn, path) {
        var date, expires;

        if (typeof expiresOn === 'number' && expiresOn !== 0) {
            date = new Date();
            date.setTime(date.getTime() + (Math.ceil(expiresOn) * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toGMTString();
        } else if (typeof expiresOn === 'string') {
            expires = '; expires=' + expiresOn;
        } else {
            expires = '';
        }

        document.cookie = name + '=' + value + expires + '; path=' + (path || '/');
    }

    /**
     * Deletes a cookie by its name.
     * @param {String} name The name of the cookie to delete.
     */
    function removeCookie(name) {
        createCookie(name, '', -1);
    }

    return {
        read: readCookie,
        create: createCookie,
        remove: removeCookie
    };
}));
