'use strict';

/**
 * Detects the supported property name for the `transitionend` event.
 *
 * @returns {String} The supported property name or `undefined` if not supported.
 * @example
 *
 * const transEnd = whichTransitionEnd();
 * // => eg 'transitionend'
 *
 * element.addEventListener(transEnd, function () {
 *   // Do soething...
 * });
 */
const whichTransitionEnd = () => {
  let el = document.createElement('div');

  const transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  };

  for (const key in transitions) {
    if (Object.prototype.hasOwnProperty.call(transitions, key)) {
      if (el.style[key] !== undefined) {
        el = null;
        return transitions[key];
      }
    }
  }
};

module.exports = whichTransitionEnd;
