/**
 * Creates a new object containing the specified own enumerable properties
 * of the source object.
 *
 * Only top-level properties are picked. Inherited and non-enumerable
 * properties are ignored. String and symbol property keys are supported.
 * The original object is not modified.
 *
 * @param {object} object The source object.
 * @param {Array<string|symbol>} paths The property keys to pick.
 * @returns {object} A new object containing the picked properties.
 * @throws {TypeError} If the first argument is not an object or the second argument is not an array.
 * @example
 *
 * pick({ a: 1, b: 2, c: 3 }, ['a', 'c']);
 * // => { a: 1, c: 3 }
 *
 * pick({ a: 1, b: 2 }, ['missing']);
 * // => {}
 *
 * pick({ a: 1, b: 2 }, []);
 * // => {}
 *
 * const key = Symbol('id');
 * pick({ [key]: 123, name: 'John' }, [key]);
 * // => { [key]: 123 }
 */
export function pick(object, paths) {
  if (object === null || typeof object !== 'object') {
    throw new TypeError('Expected an object for first argument');
  }

  if (!Array.isArray(paths)) {
    throw new TypeError('Expected an array for second argument');
  }

  const entries = [];

  for (const key of paths) {
    if (Object.prototype.propertyIsEnumerable.call(object, key)) {
      entries.push([key, object[key]]);
    }
  }

  return Object.fromEntries(entries);
}
