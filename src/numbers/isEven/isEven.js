/**
 * Checks if a number is even.
 * @param {number} value The number to check.
 * @returns {boolean} Returns true if number is even, else false.
 */
function isEven(value) {
	'use strict';

	if (value == null || (Object.prototype.toString.call(value) !== '[object Number]' && typeof value !== 'number')) { // jshint ignore:line
		console.info(value);
		throw new TypeError('isEven expects a parameter of type "Number", instead saw "' + typeof value + '"');
	}

	return value & 1 ? false : true;
}