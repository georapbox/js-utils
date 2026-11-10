/**
 * Creates a new object containing the own enumerable properties
 * of the source object for which the predicate returns a truthy value.
 *
 * Inherited and non-enumerable properties are ignored.
 * String and symbol property keys are supported.
 * The original object is not modified.
 *
 * @param {object} object The source object.
 * @param {function} predicate The function invoked with `(value, key)` for each property.
 * @returns {object} A new object containing the matching properties.
 * @throws {TypeError} If the first argument is not an object or the second argument is not a function.
 * @example
 *
 * pickBy({ a: 1, b: '2', c: 3 }, (value) => typeof value === 'number');
 * // => { a: 1, c: 3 }
 *
 * pickBy({ a: 1, b: 2, c: 3 }, (_, key) => key !== 'b');
 * // => { a: 1, c: 3 }
 *
 * pickBy({ a: 0, b: false, c: 3 }, (value) => Boolean(value));
 * // => { c: 3 }
 *
 * pickBy({ a: 1, b: 2 }, (value) => value > 10);
 * // => {}
 */
export function pickBy(object, predicate) {
  if (object === null || typeof object !== 'object') {
    throw new TypeError('Expected an object for first argument');
  }

  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  const entries = [];

  for (const key of Reflect.ownKeys(object)) {
    if (!Object.prototype.propertyIsEnumerable.call(object, key)) {
      continue;
    }

    const value = object[key];

    if (predicate(value, key)) {
      entries.push([key, value]);
    }
  }

  return Object.fromEntries(entries);
}
