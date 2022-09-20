'use strict';

/**
 * Detects the supported property name for the `animationend` event.
 *
 * @returns {String} The supported property name or `undefined` if not supported.
 * @example
 *
 * const animEnd = whichAnimationEnd();
 * // => eg 'animationend'
 *
 * element.addEventListener(animEnd, function () {
 *   // Do soething...
 * });
 */
const whichAnimationEnd = () => {
  let el = document.createElement('div');

  const animations = {
    'animation': 'animationend',
    'OAnimation': 'oAnimationEnd',
    'MozAnimation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd'
  };

  for (const key in animations) {
    if (Object.prototype.hasOwnProperty.call(animations, key)) {
      if (el.style[key] !== undefined) {
        el = null;
        return animations[key];
      }
    }
  }
};

module.exports = whichAnimationEnd;
