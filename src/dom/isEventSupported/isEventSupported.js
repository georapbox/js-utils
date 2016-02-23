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
    };
    var cache = {};

    function isEventSupported(eventName, element) {
        var canCache = (arguments.length === 1); // Cache when no element is given
        var isSupported;

        // Return the cached result if exists
        if (canCache && cache[eventName]) {
            return cache[eventName];
        }

        element = element || doc.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;
        isSupported = eventName in element;

        if (!isSupported) {
            // If it has no `setAttribute` (i.e. doesn't implement Node interface), try a generic element like `div`
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
