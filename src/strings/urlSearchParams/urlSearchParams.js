'use strict';

/**
 * Factory function that returns methods that access the URL search parameters.
 *
 * @category String
 * @param {String} searchString The URL search string. eg "?id=1&fname=Foo&lname=Bar"
 * @throws {TypeError} If `searchString` is not string.
 * @return {Object} A plain object that holds methods to access the URL search parameters.
 * @example
 *
 * urlSearchParams('?id=1&fname=Foo&lname=Bar');
 * // -> {get: get(), keys: keys(), values: values()}
 */
function urlSearchParams(searchString) {
  var queryParams, regex, isValidQuery, tempObj, tokens;

  if (typeof searchString !== 'string') {
    throw new TypeError('Expected a string');
  }

  queryParams = [];
  regex = /[?&]?([^=]+)=([^&]*)/g;
  isValidQuery = typeof searchString === 'string';

  /**
   * Get all search parameters or the value of the one specified.
   *
   * @param {String} [param] The parameter's key we want to access its value.
   * @return {Array} If `param` is `undefined`, returns an array of plain objects that represent
   *         the search parameters as key/value pairs. If `param` is specified, returns an array
   *         of string(s) which is/are the value(s) of the specified parameter key. If the parameter
   *         specified is not found in the original search query string, an empty array is returned.
   * @example
   *
   * urlSearchParams('?id=1&fname=Foo&lname=Bar').get();
   * // -> [{id: '1'}, {fname: 'Foo'}, {lname: 'Bar'}]
   *
   * urlSearchParams('?id=1&fname=Foo&lname=Bar').get('id');
   * // -> ['1']
   *
   * urlSearchParams('?id=1&fname=Foo&lname=Bar').get('fname');
   * // -> ['Foo']
   *
   * urlSearchParams('?id=1&fname=Foo&lname=Bar').get('lname');
   * // -> ['Bar']
   *
   * urlSearchParams('?id=1&fname=Foo&lname=Bar').get('something');
   * // -> []
   */
  function get(param) {
    return typeof param !== 'string' ? queryParams :
      queryParams.filter(function (item) {
        return Object.keys(item)[0] === param;
      }).reduce(function (accum, current) {
        accum.push(current[param]);
        return accum;
      }, []);
  }

  /**
   * Get all "keys" from the URL search string.
   *
   * @return {Array} An array holding the "keys" found in the search string.
   * @example
   *
   * urlSearchParams('?id=1&fname=Foo&lname=Bar').keys();
   * // -> ['id', 'fname', 'lname']
   */
  function keys() {
    return queryParams.reduce(function (accum, current) {
      accum.push(Object.keys(current)[0]);
      return accum;
    }, []);
  }

  /**
   * Get all "values" for each "key" from the URL search string.
   *
   * @return {Array} An array holding the "values" for each "key(s)" that is found in the search string.
   * @example
   *
   * urlSearchParams('?id=1&fname=Foo&lname=Bar').values();
   * // -> ['1', 'Foo', 'Bar']
   */
  function values() {
    return queryParams.reduce(function (accum, current) {
      accum.push(current[Object.keys(current)[0]]);
      return accum;
    }, []);
  }

  searchString = isValidQuery ? searchString.split('+').join(' ') : '';

  while (tokens = regex.exec(searchString)) { // eslint-disable-line no-cond-assign
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

module.exports = urlSearchParams;