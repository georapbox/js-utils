/**
 * Factory function that returns methods that access the URL search parameters.
 * @param {String} searchString The URL search string.
 * @return {Object} A plain object of methods.
 */
function urlSearchParams(searchString) {
    'use strict';

    var queryParams = [],
        regex = /[?&]?([^=]+)=([^&]*)/g,
        isValidQuery = typeof searchString === 'string',
        tempObj, tokens;

    /**
     * Get all search parameters or the value of the one specified.
     * @param {String} [param] The parameter's key we want to access its value.
     * @return {Array} If `param` is `undefined`, returns an array of plain objects that represent
     *         the search parameters as key/value pairs. If `param` is specified, returns an array
     *         of string(s) which is/are the value(s) of the specified parameter key. If the parameter
     *         specified is not found in the original search query string, an empty array is returned.
     */
    function get(param) {
        return (typeof param !== 'string') ? queryParams :
            queryParams.filter(function (item) {
                return Object.keys(item)[0] === param;
            }).reduce(function (accum, current) {
                accum.push(current[param]);
                return accum;
            }, []);
    }

    /**
     * Get all "keys" from the URL search string.
     * @return {Array} An array holding the "keys" found in the search string.
     */
    function keys() {
        return queryParams.reduce(function (accum, current) {
            accum.push(Object.keys(current)[0]);
            return accum;
        }, []);
    }

    /**
     * Get all "values" for each "key" from the URL search string.
     * @return {Array} An array holding the "values" for each "key(s)" that is found in the search string.
     */
    function values() {
        return queryParams.reduce(function (accum, current) {
            accum.push(current[Object.keys(current)[0]]);
            return accum;
        }, []);
    }

    searchString = isValidQuery ? searchString.split('+').join(' ') : '';

    while (tokens = regex.exec(searchString)) { // @NOTE Assignment intended
        tempObj = {};
        tempObj[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        queryParams.push(tempObj);
    }

    tokens = tempObj = regex = isValidQuery = null;

    return {
        get: get,
        keys: keys,
        values: values
    };
}
