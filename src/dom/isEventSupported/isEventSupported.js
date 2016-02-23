var isEventSupported = (function (win, doc, undefined) {
    'use strict';

    var TAGNAMES = {
        select: 'input',
        change: 'input',
        submit: 'form',
        reset: 'form',
        error: 'img',
        load: 'img',
        abort: 'img'
    },
    cache = {};

    /**
     * Checks if an event is supported in a browser environment.
     * @param {String} eventName The event to check if is supported.
     * @param {Object} [element] An HTML node to check if an event is supported on.
     *        Some events are supported on specific elements, eg `resize` is supported on `window` but not on a `div` element.
     *        If omited the results are cached and next calls with the same `eventName` will return the results from cache.
     * @return {Boolean} True if event is supported, else false.
     */
    function isEventSupported(eventName, element) {
        var canCache = !element,
            isSupported;

        // Return the cached result if exists.
        if (canCache && cache[eventName]) {
            return cache[eventName];
        }

        element = element || doc.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;
        isSupported = eventName in element;

        // Old Gecko based browsers create methods on an element when an attribute
        // with the name corresponding to a “known” event is set on that element.
        if (!isSupported) {
            // If it has no `setAttribute` (i.e. doesn't implement Node interface), try a generic element like `div`.
            if (!element.setAttribute) {
                element = doc.createElement('div');
            }

            element.setAttribute(eventName, 'return;');
            isSupported = typeof element[eventName] === 'function';
        }

        element = null;
        return canCache ? (cache[eventName] = isSupported) : isSupported;
    }

    return isEventSupported;
}(window, document));
