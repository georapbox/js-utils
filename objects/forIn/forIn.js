/**
 * Iterates over own and inherited enumerable properties of an object, executing the callback for each property.
 * The callback is invoked with three arguments (value, key, object)
 * @param {Object} obj The object to iterate over.
 * @param {Function} callback The function called per iteration.
 * @returns {Object} The original object.
 */
function forIn(obj, callback) {
    'use strict';

	for (var key in obj) { // jshint ignore:line
		callback && callback(obj[key], key, obj);
	}

	return obj;
}