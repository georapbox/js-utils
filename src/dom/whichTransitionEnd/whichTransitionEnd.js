/**
 * Detects the supported property name for the "transitionend" event.
 * @returns {string} The supported property name or undefined if not supported.
 */
function whichTransitionEnd() {
    'use strict';

    var key,
        el = document.createElement('div'),
        transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };

    for (key in transitions) {
        if (transitions.hasOwnProperty(key)) {
            if (el.style[key] !== undefined) {
                el = null;
                return transitions[key];
            }
        }
    }
}
