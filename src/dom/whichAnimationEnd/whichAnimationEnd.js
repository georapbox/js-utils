/**
 * Detects the supported property name for the "animationend" event.
 * @returns {string} The supported property name or undefined if not supported.
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

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = whichAnimationEnd;
}
