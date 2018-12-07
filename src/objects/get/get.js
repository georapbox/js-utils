/**
 * Gets the `value` at path of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.
 *
 * @category Object
 * @param {Object} object The object to query.
 * @param {String} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * get(object, 'a.0.b.c');
 * // -> 3
 *
 * get(object, 'a.b.c');
 * // -> undefined
 *
 * get(object, 'a.b.c', 'DEFAULT');
 * // -> 'DEFAULT'
 */
function get(object, path, defaultValue) {
  'use strinct';

  var result, index, length;

  if (typeof path !== 'string' || object == null || typeof object !== 'object') {
    result = defaultValue;
  } else {
    path = path.split('.');
    index = 0;
    length = path.length;

    while (object != null && index < length) {
      object = object[path[index++]];
    }

    result = index && index === length ? object : defaultValue;
  }

  return result;
}
