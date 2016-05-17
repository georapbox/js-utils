/**
 * Easing based scrolling to a specified y point inside page.
 *
 * @module scroll
 * @category DOM
 *
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
}('scroll', this, function () { // Change first argument ('scroll') if you need to export with different name.
    'use strict';

    /**
     * Merges (deep copy) the contents of two or more objects together into the first object.
     *
     * @param {Object} target The object to extend. It will receive the new properties.
     * @param {Object} object1 An object containing additional properties to merge in.
     * @param {Object} objectN Additional objects containing properties to merge in.
     * @example
     *
     * extend({}, obj1, objN)
    */
    function extend() {
        for (var i = 1, l = arguments.length; i < l; i++) {
            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    if (
                        arguments[i][key] && arguments[i][key].constructor &&
                        arguments[i][key].constructor === Object
                    ) {
                        arguments[0][key] = arguments[0][key] || {};
                        extend(arguments[0][key], arguments[i][key]);
                    } else {
                        arguments[0][key] = arguments[i][key];
                    }
                }
            }
        }
        return arguments[0];
    }

    var scroll = {};

    /**
     * Scrolls page to the y point with the specified duration and easing function.
     *
     * @function to
     * @param {Object} [options] User defined options, extending the default ones.
     * @param {Number} [options.y] The point the scroll ends. Default 0.
     * @param {Number} [options.duration=400] The duration (milliseconds) of the scrolling animation.
     * @param {function} [options.easing=scroll.easing.linear] The animation's easing function.
     *        Available easing methods:
     *        - scroll.easing.linear
     *        - scroll.easing.easeInQuad
     *        - scroll.easing.easeOutQuad
     *        - scroll.easing.easeInOutQuad
     *        - scroll.easing.easeInCubic
     *        - scroll.easing.easeOutCubic
     *        - scroll.easing.easeInOutCubic
     *        - scroll.easing.easeInQuart
     *        - scroll.easing.easeOutQuart
     *        - scroll.easing.easeInOutQuart
     *        - scroll.easing.easeInQuint
     *        - scroll.easing.easeOutQuint
     *        - scroll.easing.easeInOutQuint
     * @param {function} [callback] A callback function to be executed after animation is done.
     * @example
     *
     * // Scroll page 500px from top
     * scroll.to({
     *   y: 500,
     *   duration: 800,
     *   easing: scroll.easing.easeInOutCubic
     * }, function () {
     *   console.log('Finished scrolling.');
     * });
     *
     * // Scroll page to an element
     * scroll.to({
     *   y: document.getElementById('test').getBoundingClientRect().top + (document.documentElement.scrollTop || document.body.scrollTop),
     *   duration: 600,
     *   easing: scroll.easing.easeInOutCubic
     * }, function (y) {
     *   console.log('Scrolled down ' + y + ' pixels.');
     * });
     */
    scroll.to = function (options, callback) {
        var defaults = {
            y: 0,
            duration: 400,
            easing: scroll.easing.linear
        };

        // Handle case that options is not defined but callback is.
        if (typeof options === 'function') {
            callback = options;
        }

        // Extend the default options.
        options = extend({}, defaults, options);

        // Ugly hack for firefox, that wouldn't scroll if on top of page.
        document.documentElement.scrollTop = document.documentElement.scrollTop + 1;

        var start = Date.now(),
            elem = document.documentElement.scrollTop ? document.documentElement : document.body,
            from = elem.scrollTop;

        // Prevent scrolling to the y point if already there.
        if (from === options.y) {
            callback && callback(options.y);
            return;
        }

        function min(a, b) {
            return a < b ? a : b;
        }

        function move() {
            var currentTime = Date.now(),
                time = min(1, (currentTime - start) / options.duration),
                easedT = options.easing(time);

            elem.scrollTop = easedT * (options.y - from) + from;

            if (time < 1) {
                requestAnimationFrame(move);
            } else {
                callback && callback(options.y);
            }
        }

        requestAnimationFrame(move);
    };

    /**
     * Easing Functions - inspired from http://gizma.com/easing/
     * only considering the t value for the range [0, 1] => [0, 1]
     */
    scroll.easing = {
        linear: function (t) { // no easing, no acceleration
            return t;
        },
        easeInQuad: function (t) { // accelerating from zero velocity
            return t * t;
        },
        easeOutQuad: function (t) { // decelerating to zero velocity
            return t * (2 - t);
        },
        easeInOutQuad: function (t) { // acceleration until halfway, then deceleration
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic: function (t) { // accelerating from zero velocity
            return t * t * t;
        },
        easeOutCubic: function (t) { // decelerating to zero velocity
            return --t * t * t + 1;
        },
        easeInOutCubic: function (t) { // acceleration until halfway, then deceleration
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart: function (t) { // accelerating from zero velocity
            return t * t * t * t;
        },
        easeOutQuart: function (t) { // decelerating to zero velocity
            return 1 - (--t) * t * t * t;
        },
        easeInOutQuart: function (t) { // acceleration until halfway, then deceleration
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
        },
        easeInQuint: function (t) { // accelerating from zero velocity
            return t * t * t * t * t;
        },
        easeOutQuint: function (t) { // decelerating to zero velocity
            return 1 + --t * t * t * t * t;
        },
        easeInOutQuint: function (t) { // acceleration until halfway, then deceleration
            return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
        }
    };

    /**
     * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
     * http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
     * requestAnimationFrame polyfill by Erik Möller
     * fixes from Paul Irish and Tino Zijdel
     */
    (function () {
        var lastTime = 0,
            vendors = ['ms', 'moz', 'webkit', 'o'];

        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
                window[vendors[x] + 'CancelRequestAnimationFrame'];
        }

        if (window.requestAnimationFrame) {
            window.requestAnimationFrame = function (callback) {
                var currTime = new Date().getTime(),
                    timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                    id = window.setTimeout(function () {
                        callback(currTime + timeToCall);
                    }, timeToCall);

                lastTime = currTime + timeToCall;
                return id;
            };
        }

        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function (id) {
                clearTimeout(id);
            };
        }
    }());

    return scroll;
}));
