/**
 * Creates an object composed of the picked object properties.
 *
 * @param {Object} object The source object.
 * @param {Array} paths The property paths to pick.
 * @param {Boolean} [pickOwnKeys=true] If `true` will look up only for own keys; otherwise will look up in prototype chain.
 * @throws {TypeError} Throws if `object` is not plain object.
 * @throws {TypeError} Throws if `paths` is not array.
 * @throws {TypeError} Throws if `pickOwnKeys` is not boolean but not undefined.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = Object.create({
 *   foo: 'bar'
 * });
 *
 * Object.defineProperties(object, {
 *   a: { value: 1 },
 *   b: { value: 2 },
 *   c: { value: 3 }
 * });
 *
 * pick(object, ['a', 'c', 'foo']);
 * // -> { a: 1, c: 3 }
 *
 * pick(object, ['a', 'c', 'foo'], false);
 * // -> { a: 1, c: 3, foo: 'bar' }
 *
 * pick(object, ['d']);
 * // -> {}
 */
function pick(object, paths, pickOwnKeys) {
  var result = {};
  var type = Object.prototype.toString.call(object);

  if (
    typeof object !== 'object'
    || object === null
    || Array.isArray(object)
    || type === '[object Set]'
    || type === '[object WeakSet]'
    || type === '[object Map]'
    || type === '[object WeakMap]'
  ) {
    throw new TypeError('Expected a plain object for first argument');
  }

  if (!Array.isArray(paths)) {
    throw new TypeError('Expected an array for second argument');
  }

  if (typeof pickOwnKeys === 'undefined') {
    pickOwnKeys = true;
  }

  if (typeof pickOwnKeys !== 'boolean') {
    throw new TypeError('Expected a boolean for third argument');
  }

  for (var i = 0; i < paths.length; i += 1) {
    var key = paths[i];

    if (pickOwnKeys) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        result[key] = object[key];
      }
    } else {
      if (key in object) {
        result[key] = object[key];
      }
    }
  }

  return result;
}

module.exports = pick;