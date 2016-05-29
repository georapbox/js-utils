/**
 * Creates an array of unique values that are included in all given arrays.
 * The order of result values is determined by the order they occur in the first array.
 *
 * @NOTE To support legacy browsers use `Array.prototype.reduce` and `Array.prototype.filter` polyfills.
 * @NOTE Internal usage of Array > `includes` function.
 * @category Array
 * @param {Array} ...arrays The arrays to intersect.
 * @throws {TypeError} If any of the arguments is not array.
 * @return {Array} The array of intersecting values.
 * @example
 *
 * var arrA = [NaN, 3, 8, 'foo', 'bar'];
 * var arrB = [2, 7, 'foo', NaN, 3];
 * var arrC = [1, 2, 3, NaN];
 *
 * intersection(arrA, arrB);
 * // -> [NaN, 3, 'foo']
 *
 * intersection(arrA, arrB, arrC);
 * // -> [NaN, 3]
 */
function intersection(/*...arrays*/) {
    'use strict';

    var arrayProto = Array.prototype,
        objectProto = Object.prototype,
        toString = objectProto.toString,
        slice = arrayProto.slice,
        args = slice.call(arguments, 0),
        argsLength = args.length;

    function includes(array, searchElement, fromIndex) {
        var arrayLength, currentIndex, currentElement;

        if (Object.prototype.toString.call(array) !== '[object Array]') {
            throw new TypeError('Expected an array');
        }

        arrayLength = array.length;

        if (arrayLength === 0) {
            return false;
        }

        if (Array.prototype.includes) {
            return array.includes(searchElement, fromIndex);
        }

        fromIndex = parseInt(fromIndex, 10) || 0;

        if (fromIndex >= 0) {
            currentIndex = fromIndex;
        } else {
            currentIndex = arrayLength + fromIndex;

            if (currentIndex < 0) {
                currentIndex = 0;
            }
        }

        while (currentIndex < arrayLength) {
            currentElement = array[currentIndex];

            if (
                searchElement === currentElement ||
                searchElement !== searchElement && // NaN !== NaN
                currentElement !== currentElement  // NaN !== NaN
            ) {
                return true;
            }

            currentIndex += 1;
        }

        return false;
    }

    while (argsLength--) {
        if (toString.call(args[argsLength]) !== '[object Array]') {
            throw new TypeError('Expected an array');
        }
    }

    return args.reduce(function (accum, current) {
        return accum.filter(function (item) {
            return includes(current, item);
        });
    });
}
