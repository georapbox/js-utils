/**
 * Merges (deep copy) the contents of two or more objects together into the first object.
 *
 * @category Object
 * @param {Object} target The object to extend. It will receive the new properties.
 * @param {Object} object1 An object containing additional properties to merge in.
 * @param {Object} [...objectN] Additional objects containing properties to merge in.
 * @return {Object} The merged object.
 * @example
 *
 * var object1 = {
 *   apple: 0,
 *   banana: {
 *     weight: 52,
 *     price: 100
 *   },
 *   cherry: 97
 * };
 *
 * var object2 = {
 *   banana: {
 *     price: 200
 *   },
 *   durian: 100
 * };
 *
 * extend({}, object1, object2);
 * // -> {apple: 0, banana: {weight: 52, price: 200}, cherry: 97, durian: 100}
 */
function extend() {
    'use strict';

    for (var i = 1, l = arguments.length; i < l; i++) {
        for (var key in arguments[i]) {
            if ({}.hasOwnProperty.call(arguments[i], key)) {
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
