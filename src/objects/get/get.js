/**
 * Gets the `value` at path of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.
 *
 * @category Object
 * @param {Object} object The object to query.
 * @param {String|Array} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * get(object, 'a.0.b.c');
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
  var result, index, pathLength, key, sKey;
  var toString = Object.prototype.toString;
  var isSymbol = function (val) {
    // https://stackoverflow.com/questions/46479169/check-if-value-is-a-symbol-in-javascript
    return typeof val === 'symbol' || typeof val === 'object' && toString.call(val) === '[object Symbol]';
  }

  if (typeof path === 'string') {
    path = path.split('.');
  }

  if (toString.call(path) !== '[object Array]' || object == null || typeof object !== 'object') {
    result = defaultValue;
  } else {
    index = 0;
    pathLength = path.length;

    while (object != null && index < pathLength) {
      key = path[index++];

      if (typeof key !== 'string' && !isSymbol(key)) {
        sKey = key + '';
        key = sKey === '0' && 1 / key === -Infinity ? '-0' : sKey;
      }

      object = object[key];
    }

    result = index && index === pathLength ? object : defaultValue;
  }

  return result;
}
