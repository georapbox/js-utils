/**
 * Creates an array excluding all values of the provided arrays.
 * NOTE: For older browsers support (ie IE7, 8), also include the polyfills below:
 * - Array.prototype.filter()  (https://github.com/georapbox/smallsJS/tree/master/arrays/polyfills#arrayprototypefilter)
 * - Array.prototype.indexOf() (https://github.com/georapbox/smallsJS/tree/master/arrays/polyfills#arrayprototypeindexof)
 *
 * @param   {Array} array  The array to process.
 * @param   {Array} values The values to exclude from "array".
 * @returns {Array} Array of values not included in the exclusion set.
 */
function difference(array, values) {
    return array && array.filter(function (i) {
        return values && values.indexOf(i) < 0;
    });
}