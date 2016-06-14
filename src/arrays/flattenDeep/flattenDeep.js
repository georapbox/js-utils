/**
 * Flattens array recursively.
 *
 * @category Array
 * @param {Array} array the array to flatten.
 * @throws {TypeError} If `array` is not array.
 * @return {Array} the new flattened array.
 * @example
 *
 * flattenDeep([1, [2, [3, [4]], 5], [6]]);
 * // -> [1, 2, 3, 4, 5, 6]
 *
 * function dummy() {
 *   var arr = [1, [2, [3, [4]], 5]];
 *   arr.push(arguments);
 *   arr.push({foo: 'bar', length: 23});
 *   return arr;
 * }
 *
 * flattenDeep(dummy('a', 'b'));
 * // -> [1, 2, 3, 4, 5, 'a', 'b', {foo: 'bar', length: 23}]
 */
function flattenDeep(array) {
    'use strict';

    var toString = Object.prototype.toString,
        arrayTag = '[object Array]',
        copy, result, tail;

    function isArguments(value) {
        var argsTag = '[object Arguments]';

        // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
        return hasOwnProperty.call(value, 'callee') &&
            (!propertyIsEnumerable.call(value, 'callee') || toString.call(value) === argsTag);
    }

    if (toString.call(array) !== arrayTag) {
        throw new TypeError('Expected an array');
    }

    if (array.length === 0) {
        return array;
    }

    result = [];
    copy = array.slice();
    tail = copy.pop();

    do {
        if (toString.call(tail) === arrayTag || isArguments(tail)) {
            copy.push.apply(copy, tail);
        } else {
            result.push(tail);
        }
    } while (copy.length && (tail = copy.pop()) !== undefined);

    result.reverse();

    return result;
}
