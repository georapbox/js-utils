/**
 * Captures the touch position on a specific HTML element.
 *
 * @category DOM
 * @param {HTMLElement} element The HTML element to capture touch position on.
 * @param {function} [callback] A callback function to be executed on touch move taking the `position` object as argument.
 * @throws {TypeError} If `element` is not a DOM element.
 * @throws {TypeError} If `callback` is defined but is not a function.
 * @return {Object} An object containing the position object (x, y) of touch and an unbind method.
 * @example
 *
 * var element = document.getElementById('some_element');
 *
 * // Example 1
 * var touch = captureTouch(element);
 *
 * element.addEventListener('touchmove', function () {
 *   var x = touch.position.x;
 *   var y = touch.position.y;
 * }, false);
 *
 * // Example 2 - Utilizing the callback function
 * var touch = captureTouch(element, function (position) {
 *   var x = position.x;
 *   var y = position.y;
 * });
 *
 * // Unbinding capturing touch move
 * var touch = captureTouch(element);
 *
 * touch.unbind(); // Unbind immediately.
 *
 * touch.unbind(5000); // Unbind after 5 seconds.
 */
function captureTouch(element, callback) {
  'use strict';

  var position, state, onTouchStart, onTouchEnd, onTouchMove;

  if (!element || element.nodeType !== 1 || element instanceof Element !== true) {
    throw new TypeError('"element" must be a DOM element');
  }

  if (callback != null && typeof callback !== 'function') {
    throw new TypeError('"callback" must be a function');
  }

  position = {x: null, y: null};
  state = {isPressed: false};

  onTouchStart = function () {
    state.isPressed = true;
  };

  onTouchEnd = function () {
    state.isPressed = false;
    position.x = null;
    position.y = null;
  };

  onTouchMove = function (event) {
    var touch_event = event.touches[0],
      x, y;

    if (touch_event.pageX || touch_event.pageY) {
      x = touch_event.pageX;
      y = touch_event.pageY;
    } else {
      x = touch_event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = touch_event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    x -= element.offsetLeft;
    y -= element.offsetTop;

    position.x = x;
    position.y = y;

    callback && callback.call(this, position);
  };

  element.addEventListener('touchstart', onTouchStart, false);
  element.addEventListener('touchend', onTouchEnd, false);
  element.addEventListener('touchmove', onTouchMove, false);

  return {
    position: position,
    unbind: function (timeout) {
      if (timeout != null && typeof timeout === 'number') {
        setTimeout(function () {
          element.removeEventListener('touchstart', onTouchStart, false);
          element.removeEventListener('touchend', onTouchEnd, false);
          element.removeEventListener('touchmove', onTouchMove, false);
        }, timeout);
      } else {
        element.removeEventListener('touchstart', onTouchStart, false);
        element.removeEventListener('touchend', onTouchEnd, false);
        element.removeEventListener('touchmove', onTouchMove, false);
      }

      return this;
    }
  };
}
