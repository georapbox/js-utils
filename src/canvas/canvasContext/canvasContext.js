'use strict';

/**
 * A class that provides jQuery-style chained access to 2D context methods and properties.
 *
 * https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Canvas
 *
 * @module CanvasContext
 * @category HTML5 Canvas
 * @param {Object|String} canvas The HTML5 canvas element or a string representing the id of a canvas element.
 * @return {Object} Returns the canvas context object.
 * @example
 *
 * // Use context to get access to underlying context
 * var canvas = document.getElementById('canvas');
 *
 * var ctx = CanvasContext(canvas)
 *   .rect(0, 0, canvas.width, canvas.height)
 *   .lineWidth(20)
 *   .strokeStyle('dodgerblue')
 *   .fillStyle('rgba(14, 152, 230, 0.3)')
 *   .fill()
 *   .stroke()
 *   .context;
 *
 * // Use property name as a function (but without arguments) to get the value
 * var strokeStyle = CanvasContext(canvas)
 *   .strokeStyle('rgb(50, 110, 210)')
 *   .strokeStyle();
 */
(function (name, context, definition) {
  if (typeof define === 'function' && define.amd) {
    define(definition);
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = definition();
  } else {
    context[name] = definition();
  }
}('CanvasContext', this, function () {
  var proto;

  /**
   * A class that provides jQuery-style chained access to 2D context methods and properties.
   * @param {Object|String} canvas The HTML5 canvas element or a string representing the id of a canvas element.
   * @return {CanvasContext|undefined} Instance of CanvasContext or undefined.
   */
  function CanvasContext(canvas) {
    if (typeof canvas === 'string') {
      canvas = document.getElementById(canvas);
    }

    if (!(this instanceof CanvasContext)) {
      return new CanvasContext(canvas);
    }

    this.context = canvas.getContext('2d');

    if (!CanvasContext.prototype.arc) {
      CanvasContext.setup.call(this, this.context);
    }
  }

  proto = CanvasContext.prototype;

  /**
   * Creates the chainable methods and properties
   * for each canvas method or property accordingly.
   * @this {CanvasContext}
   * @return {undefined}
   */
  CanvasContext.setup = function () {
    var methods = [
      'arc', 'arcTo', 'beginPath', 'bezierCurveTo', 'clearRect', 'clip',
      'closePath', 'drawImage', 'fill', 'fillRect', 'fillText', 'lineTo', 'moveTo',
      'quadraticCurveTo', 'rect', 'restore', 'rotate', 'save', 'scale', 'setTransform',
      'stroke', 'strokeRect', 'strokeText', 'transform', 'translate'
    ];

    var getterMethods = [
      'createPattern', 'drawFocusRing', 'isPointInPath', 'measureText', // drawFocusRing not currently supported
      // The following might instead be wrapped to be able to chain their child objects
      'createImageData', 'createLinearGradient',
      'createRadialGradient', 'getImageData', 'putImageData'
    ];

    var props = [
      'canvas', 'fillStyle', 'font', 'globalAlpha', 'globalCompositeOperation',
      'lineCap', 'lineJoin', 'lineWidth', 'miterLimit', 'shadowOffsetX', 'shadowOffsetY',
      'shadowBlur', 'shadowColor', 'strokeStyle', 'textAlign', 'textBaseline'
    ];

    methods.forEach(function (method) {
      proto[method] = function () {
        this.context[method].apply(this.context, arguments);
        return this;
      };
    });

    getterMethods.forEach(function (method) {
      proto[method] = function () {
        return this.context[method].apply(this.context, arguments);
      };
    });

    props.forEach(function (prop) {
      proto[prop] = function (value) {
        if (typeof value === 'undefined') {
          return this.context[prop];
        }
        this.context[prop] = value;
        return this;
      };
    });
  };

  return CanvasContext;
}));
