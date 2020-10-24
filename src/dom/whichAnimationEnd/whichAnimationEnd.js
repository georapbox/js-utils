'use strict';

/**
 * Detects the supported property name for the `animationend` event.
 *
 * @category DOM
 * @return {String} The supported property name or `undefined` if not supported.
 * @example
 *
 * var animEnd = whichAnimationEnd();
 * // -> eg 'animationend'
 *
 * element.addEventListener(animEnd, function () {
 *   // Do soething...
 * });
 */
function whichAnimationEnd() {
  var key;
  var el = document.createElement('div');
  var animations = {
    'animation': 'animationend',
    'OAnimation': 'oAnimationEnd',
    'MozAnimation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd'
  };

  for (key in animations) {
    if (Object.prototype.hasOwnProperty.call(animations, key)) {
      if (el.style[key] !== undefined) {
        el = null;
        return animations[key];
      }
    }
  }
}

module.exports = whichAnimationEnd;