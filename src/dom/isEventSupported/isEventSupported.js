/**
 * Checks if an event is supported in a browser environment.
 *
 * @module isEventSupported
 * @category DOM
 * @param {String} eventName The event to check if is supported.
 * @param {Object} [element] An HTML node to check if an event is supported on.
 *        Some events are supported on specific elements, eg `online` is supported on `window` but not on a `div` element.
 *        If omitted the results are cached and next calls with the same `eventName` will return the results from cache.
 * @return {Boolean} True if event is supported, else false.
 * @example
 *
 * isEventSupported('submit');
 * // -> true - Checks on a `form` element
 *
 * isEventSupported('click');
 * // -> true - Checks on a `div` element
 *
 * isEventSupported('resize');
 * // -> false - Checks on a `div` element
 *
 * isEventSupported('resize', window);
 * // -> true - Checks on a `window`
 *
 * isEventSupported('keyup');
 * // -> true - Checks on a `div` element
 *
 * isEventSupported('keyup', document.createElement('input'));
 * // -> true - Checks on an `input` element
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
}('isEventSupported', this, function () {
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

    function isEventSupported(eventName, element) {
        var canCache = !element,
            isSupported;

        // Return the cached result if exists.
        if (canCache && cache[eventName]) {
            return cache[eventName];
        }

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;
        isSupported = eventName in element;

        // Old Gecko based browsers create methods on an element when an attribute
        // with the name corresponding to a “known” event is set on that element.
        if (!isSupported) {
            // If it has no `setAttribute` (i.e. doesn't implement Node interface), try a generic element like `div`.
            if (!element.setAttribute) {
                element = document.createElement('div');
            }

            element.setAttribute(eventName, 'return;');
            isSupported = typeof element[eventName] === 'function';
        }

        element = null;
        return canCache ? (cache[eventName] = isSupported) : isSupported;
    }

    return isEventSupported;
}));
