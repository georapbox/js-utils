/**
 * Creates an object composed of the object enumerable properties that predicate returns truthy for.
 * The predicate is invoked with two arguments: (value, key).
 *
 * @param {Object} object The source object.
 * @param {function} predicate The function invoked per property.
 * @param {Boolean} [pickOwnKeys=true] If `true` will look up only for own enumerable keys; otherwise will look up in prototype chain.
 * @throws {TypeError} Throws if `object` is not plain object.
 * @throws {TypeError} Throws if `predicate` is not function.
 * @throws {TypeError} Throws if `pickOwnKeys` is not boolean but not undefined.
 * @returns {Object} Returns the new object.
 * @example
 *
 * const object = Object.create({
 *   e: 5
 * });
 *
 * Object.defineProperties(object, {
 *   a: {
 *     value: 1,
 *     enumerable: true
 *   },
 *   b: {
 *     value: '2',
 *     enumerable: true
 *   },
 *   c: {
 *     value: 3,
 *     enumerable: true
 *   },
 *   d: {
 *     value: 4,
 *     enumerable: false
 *   }
 * });
 *
 * pickBy(object, function (value) {
 *   return typeof value === 'number';
 * });
 * // => { a: 1, c: 3 }
 *
 * pickBy(object, function (value) {
 *   return typeof value === 'number';
 * }, false);
 * // => { a: 1, c: 3, e: 5 }
 *
 * pickBy(object, function (value) {
 *   return typeof value === 'function';
 * });
 * // => {}
 *
 * pickBy(object, function (_, key) {
 *   return key === 'a';
 * });
 * // => { a: 1 }
 *
 * pickBy(object, function (_, key) {
 *   return key === 'd'; // property "d" is not enumerable
 * });
 * // => {}
 */
const pickBy = (object, predicate, pickOwnKeys = true) => {
  const result = {};
  const type = Object.prototype.toString.call(object);

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

  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  if (typeof pickOwnKeys !== 'boolean') {
    throw new TypeError('Expected a boolean for third argument');
  }

  for (const key in object) {
    const meetsCriteria = pickOwnKeys
      ? Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key], key)
      : predicate(object[key], key);

    if (meetsCriteria) {
      result[key] = object[key];
    }
  }

  return result;
};

module.exports = pickBy;
