/**
 * Captures the mouse position on a specific HTML element.
 *
 * @category DOM
 * @param {HTMLElement} element The HTML element to capture mouse position on.
 * @throws {TypeError} If `element` is not a DOM element.
 * @return {Object} An object representing the position (x, y) of mouse.
 * @example
 *
 * var element = document.getElementById('some_element');
 * var mousePosition = captureMousePosition(element);
 *
 * element.addEventListener('mousemove', function () {
 *   console.log(mousePosition);
 * }, false);
 */
function captureMousePosition(element) {
  'use strict';

  var position = {x: 0, y: 0};

  if (!element || element.nodeType !== 1 || element instanceof Element !== true) {
    throw new TypeError('"element" must be a DOM element');
  }

  element.addEventListener('mousemove', function (event) {
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
  }, false);

  return position;
}
