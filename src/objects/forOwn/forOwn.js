/**
 * Iterates over own enumerable properties of an object, executing the callback for each property.
 * The callback is invoked with three arguments (value, key, object)
 *
 * @category Object
 * @param {Object} obj The object to iterate over.
 * @param {function} [callback] The function called per iteration.
 * @returns {Object} The original object.
 * @example
 *
 * function Shape() {
 *   this.x = 0;
 *   this.y = 0;
 * }
 *
 * Shape.prototype.move = function (x, y) {
 *   this.x += x;
 *   this.y += y;
 * };
 *
 * forOwn(new Shape(), function (value, key, obj) {
 *   console.log(key);
 *   // -> "x", "y"
 * });
 */
function forOwn(obj, callback) {
    'use strict';

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            callback && callback(obj[key], key, obj);
        }
    }

    return obj;
}
