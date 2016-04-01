/**
 * Factory function that returns methods that access the URL search parameters.
 * @param {String} query The URL `search` string.
 * @return {Object} Aplain object of methods.
 */
function urlParams(query) {
    'use strict';

    var queryParams = [],
        regex = /[?&]?([^=]+)=([^&]*)/g,
        isValidQuery = query && typeof query === 'string',
        tempObj,
        tokens;

    /**
     * Get all search parameters or the value of the one specified.
     * @param {String} [param=undefined] The parameter's key we want to access its value.
     * @return {Array} If `param` is `undefined`, returns an array of plain objects that represent
     *         the search parameters as key/value pairs. If `param` is specified, returns an array
     *         of string(s) which is/are the value(s) of the specified parameter key. If the parameter
     *         specified is not found in the original search query string, an empty array is returned.
     */
    function get(param) {
        if (!param || typeof param !== 'string') {
            return queryParams;
        }

        return queryParams.filter(function (item) {
            return Object.keys(item)[0] === param;
        }).reduce(function (accum, current) {
            accum.push(current[param]);
            return accum;
        }, []);
    }

    /**
     * Get all "keys" from the query string.
     * @return {Array} An array holding the "keys" found in the query string.
     */
    function keys() {
        return queryParams.reduce(function (accum, current) {
            accum.push(Object.keys(current)[0]);
            return accum;
        }, []);
    }

    /**
     * Get all "values" for each "key" from the query string.
     * @return {Array} An array holding the "values" for each "key(s)" that is found in the query string.
     */
    function values() {
        return queryParams.reduce(function (accum, current) {
            accum.push(current[Object.keys(current)[0]]);
            return accum;
        }, []);
    }

    query = isValidQuery ? query.split('+').join(' ') : '';

    while (tokens = regex.exec(query)) {
        tempObj = {};
        tempObj[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        queryParams.push(tempObj);
    }

    return {
        get: get,
        keys: keys,
        values: values
    };
}

// var search = '?id=1&fname=Foo&lname=Bar';
// var params = urlParams(search);
//
// console.log(params.get());
// console.log(params.get('id'));
// console.log(params.keys());
// console.log(params.values());
