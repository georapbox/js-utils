/**
 * Detects the supported property name for the `animationend` event.
 *
 * @category DOM
 * @return {String} The supported property name or `undefined` if not supported.
 */
function whichAnimationEnd() {
    'use strict';

    var key,
        el = document.createElement('div'),
        animations = {
            'animation': 'animationend',
            'OAnimation': 'oAnimationEnd',
            'MozAnimation': 'animationend',
            'WebkitAnimation': 'webkitAnimationEnd'
        };

    for (key in animations) {
        if (animations.hasOwnProperty(key)) {
            if (el.style[key] !== undefined) {
                el = null;
                return animations[key];
            }
        }
    }
}
