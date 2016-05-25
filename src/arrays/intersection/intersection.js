/**
 * Creates an array of unique values that are included in all given arrays.
 * The order of result values is determined by the order they occur in the first array.
 *
 * @NOTE To support legacy browsers use `Array.prototype.reduce`, `Array.prototype.filter` and `Array.prototype.indexOf` polyfills.
 * @category Array
 * @param {Array} ...arrays The arrays to process.
 * @return {Array} The array of intersecting values.
 * @example
 *
 * var arrA = [NaN, 3, 8, 'foo', 'bar'];
 * var arrB = [2, 7, 'foo', NaN, 3];
 *
 * intersection(arrA, arrB);
 * // -> [NaN, 3, 'foo']
 */
function intersection(/*...arrays*/) {
    'use strict';

    var arrayProto = Array.prototype,
        objectProto = Object.prototype,
        toString = objectProto.toString,
        slice = arrayProto.slice,
        args = slice.call(arguments, 0),
        argsLength = args.length,
        includes;

    while (argsLength--) {
        if (toString.call(args[argsLength]) !== '[object Array]') {
            throw new TypeError('Expected an array');
        }
    }

    includes = function (searchElement, arr) {
        var O = Object(arr);
        var len = parseInt(O.length) || 0;
        if (len === 0) {
            return false;
        }
        var n = parseInt(arguments[1]) || 0;
        var k;
        if (n >= 0) {
            k = n;
        } else {
            k = len + n;
            if (k < 0) {k = 0;}
        }
        var currentElement;
        while (k < len) {
            currentElement = O[k];
            if (
                searchElement === currentElement ||
                searchElement !== searchElement && currentElement !== currentElement
            ) { // NaN !== NaN
                return true;
            }
            k++;
        }
        return false;
    };

    return args.reduce(function (accum, current) {
        return accum.filter(function (item) {
            return includes(item, current);
        });
    });
}
