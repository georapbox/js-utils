/**
 * Executes a provided callback function once per array element.
 * @param {array} arr The array to iterate over.
 * @callback {function} callback Function to execute for each element.
 * @param {object} [thisArg] Value to use as "this" when executing callback.
 */
function forEach(arr, callback, thisArg) {
	if (arr == null) {
		throw new TypeError('forEach expects an array as first parameter.');
	}

	if (typeof callback !== 'function') {
		throw new TypeError('forEach expects a callback function.');
	}

	var i = 0,
		len = arr.length;

	for (i; i < len; i++) {
		if (callback.call(thisArg, arr[i], i, arr) === false) {
			return;
		}
	}
}