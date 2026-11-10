/**
 * Retrieves the value at a specified path within an object.
 *
 * The path can be a string using dot or bracket notation, or an array
 * of property keys. Array paths support keys containing dots or brackets.
 *
 * If the resolved value is `undefined`, the default value is returned.
 * Null values are preserved, and inherited properties can be accessed.
 *
 * @param {object} object The object to query.
 * @param {string|Array} path The property path to resolve.
 * @param {any} [defaultValue] The value returned when the resolved value is `undefined`.
 * @returns {any} The resolved value or the default value.
 * @throws {TypeError} If `path` is not a string or an array.
 * @example
 *
 * const object = { a: [{ b: { c: 3 } }] };
 *
 * get(object, 'a[0].b.c');
 * // => 3
 *
 * get(object, ['a', 0, 'b', 'c']);
 * // => 3
 *
 * get(object, 'a[1].b.c', 'DEFAULT');
 * // => 'DEFAULT'
 *
 * get({ a: null }, 'a', 'DEFAULT');
 * // => null
 *
 * get({ 'a.b': 10 }, ['a.b']);
 * // => 10
 */
export function get(object, path, defaultValue) {
  if (typeof path !== 'string' && !Array.isArray(path)) {
    throw new TypeError('Expected a string or array for second argument');
  }

  const keys = Array.isArray(path) ? path : path.split(/[.[\]]+/).filter(Boolean);

  if (keys.length === 0) {
    return defaultValue;
  }

  let result = object;

  for (const key of keys) {
    if (result == null) {
      return defaultValue;
    }

    result = result[key];
  }

  return result === undefined ? defaultValue : result;
}
