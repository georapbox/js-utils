(function (name, context, definition) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    } else {
        context[name] = definition();
    }
}('CanvasContext', this, function () {
    'use strict';

    /**
     * @constructor
     * A class that provides jQuery-style chained access to 2D context methods and properties.
     * @param {Object|String} canvas The HTML5 canvas element or a string representing the id of a canvas element.
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

    var proto = CanvasContext.prototype;

    /**
     * Creates the chainable methods and properties
     * for each canvas method or property accordingly.
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
                if (value === undefined) {
                    return this.context[prop];
                }
                this.context[prop] = value;
                return this;
            };
        });
    };

    return CanvasContext;
}));
