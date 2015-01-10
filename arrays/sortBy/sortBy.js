/**
 * http://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
 * Sorts an array of objects by property.
 * @param   {Array}    arr       The array to sort.
 * @param   {String}   field     The field to sort the array by.
 * @param   {Boolean}  ascending [Optional] Defines the sort order. Default is true (ascending).
 * @param   {Function} primer    [Optional] Manipulates the field to sort by.
 * @returns {Array}    The sorted array.
 */
function sortBy(arr, field, ascending, primer) {
	var key = function (x) {
		return primer ? primer(x[field]) : x[field];
	};

	return arr.sort(function (a, b) {
		var A = key(a),
            B = key(b);

        if (typeof ascending === 'undefined') {
            ascending = true;
        }

		return ((A < B) ? -1 : ((A > B) ? 1 : 0)) * [-1, 1][+!!ascending];
	});
}