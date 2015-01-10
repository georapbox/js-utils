/**
 * Retrieves the value of a specified property from all elements in an array.
 * @param {Array} array The array to iterate over.
 * @param {String} key The name of the property to pluck.
 * @returns {Array} an array with the values.
 */
function pluck(array, key) {
	var arr = [],
		index = -1,
		len = array.length,
		arrItem;

	while (++index < len) {
		arrItem = array[index];

		if (arrItem.hasOwnProperty(key)) {
			arr[arr.length] = arrItem[key];
		}
	}

	return arr;
}