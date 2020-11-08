'use strict';

/**
 * Checks if an event is supported in a browser environment.
 *
 * @module isEventSupported
 * @param {String} eventName The event name (without the `on` prefix) to check if is supported, eg `click`, `mouseover`, etc.
 * @param {HTMLElement} [element] An HTML node to check if an event is supported on.
 * Some events are supported on specific elements, eg `online` is supported on `window` but not on a `div` element.
 * If omitted the results are cached and next calls with the same `eventName` will return the results from cache.
 * @throws {TypeError} If `eventName` is not string.
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
module.exports = (function () {
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
    var canCache = !element;
    var isSupported;

    if (typeof eventName !== 'string') {
      throw new TypeError('Expected a string for first argument');
    }

    eventName = 'on' + eventName;

    // Return the cached result if exists.
    if (canCache && cache[eventName]) {
      return cache[eventName];
    }

    element = element || document.createElement(TAGNAMES[eventName] || 'div');
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
}());