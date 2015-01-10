/**
 * Merges (deep copy) the contents of two or more objects together into the first object.
 * @param {Object} target The object to extend. It will receive the new properties.
 * @param {Object} object1 An object containing additional properties to merge in.
 * @param {Object} objectN Additional objects containing properties to merge in.
 * @use extend({}, obj1, objN)
*/
function extend() {
	'use strict';

	for (var i = 1, l = arguments.length; i < l; i++) {
		for (var key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                if (arguments[i][key] && arguments[i][key].constructor && arguments[i][key].constructor === Object) {
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