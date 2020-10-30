'use strict';

/**
 * Captures the mouse position on a specific HTML element.
 *
 * @category DOM
 * @param {HTMLElement} element The HTML element to capture mouse position on.
 * @param {function} [callback] A callback function to be executed on mouse move taking the `position` object as argument.
 * @throws {TypeError} If `element` is not a DOM element.
 * @throws {TypeError} If `callback` is defined but is not a function.
 * @return {Object} An object containing the position object (x, y) of mouse and an unbind method.
 * @example
 *
 * var element = document.getElementById('some_element');
 *
 * // Example 1
 * var mouse = captureMouse(element);
 *
 * element.addEventListener('mousemove', function () {
 *   var x = mouse.position.x;
 *   var y = mouse.position.y;
 * }, false);
 *
 * // Example 2 - Utilizing the callback function
 * var mouse = captureMouse(element, function (position) {
 *   var x = position.x;
 *   var y = position.y;
 * });
 *
 * // Unbinding capturing mouse move
 * var mouse = captureMouse(element);
 *
 * mouse.unbind(); // Unbind immediately.
 *
 * mouse.unbind(5000); // Unbind after 5 seconds.
 */
function captureMouse(element, callback) {
  var position, onMouseMove;

  if (!element || element.nodeType !== 1 || element instanceof Element !== true) {
    throw new TypeError('"element" must be a DOM element');
  }

  if (typeof callback !== 'undefined' && typeof callback !== 'function') {
    throw new TypeError('"callback" must be a function');
  }

  position = {x: 0, y: 0};

  onMouseMove = function (event) {
    var x, y;

    if (event.pageX || event.pageY) {
      x = event.pageX;
      y = event.pageY;
    } else {
      x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    x -= element.offsetLeft;
    y -= element.offsetTop;

    position.x = x;
    position.y = y;

    callback && callback.call(this, position);
  };

  element.addEventListener('mousemove', onMouseMove, false);

  return {
    position: position,
    unbind: function (timeout) {
      if (timeout != null && typeof timeout === 'number') {
        setTimeout(function () {
          element.removeEventListener('mousemove', onMouseMove, false);
        }, timeout);
      } else {
        element.removeEventListener('mousemove', onMouseMove, false);
      }

      return this;
    }
  };
}

module.exports = captureMouse;