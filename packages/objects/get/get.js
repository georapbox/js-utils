'use strict';

/**
 * Gets the `value` at path of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {Object} object The object to query.
 * @param {String|Array} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * get(object, 'a[0]b.c');
 * // -> 3
 *
 * get(object, ['a', '0', 'b', 'c']);
 * // -> 3
 *
 * get(object, 'a.b.c');
 * // -> undefined
 *
 * get(object, 'a.b.c', 'DEFAULT');
 * // -> 'DEFAULT'
 */
function get(object, path, defaultValue) {
  var result = String.prototype.split.call(path, /[,[\].]+?/)
    .filter(Boolean)
    .reduce(function (res, key) {
      return res != null ? res[key] : res;
    }, object);

  return result === void 0 || result === object ? defaultValue : result;
}

module.exports = get;
