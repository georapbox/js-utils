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
 * const object = { a: [{ b: { c: 3 } }] };
 *
 * get(object, 'a[0]b.c');
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * get(object, 'a[1].b.c');
 * // => undefined
 *
 * get(object, 'a[1].b.c', 'DEFAULT');
 * // => 'DEFAULT'
 */
const get = (object, path, defaultValue) => {
  const keys = String.prototype.split.call(path, /[,[\].]+?/);

  const result = keys.reduce((accum, key) => {
    if (key) {
      return accum != null ? accum[key] : void 0;
    } else {
      return accum;
    }
  }, object);

  return result === void 0 || result === object ? defaultValue : result;
};

module.exports = get;
