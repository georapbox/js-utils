/**
 * Creates a new object excluding the specified own enumerable properties
 * of the source object.
 *
 * Only top-level properties are omitted. Inherited and non-enumerable
 * properties are not copied. String and symbol property keys are supported.
 * The original object is not modified.
 *
 * @param {object} obj The source object.
 * @param {Array<string|symbol>} [props=[]] The property keys to omit.
 * @returns {object} A new object containing the remaining properties.
 * @throws {TypeError} If the first argument is not an object or the second argument is not an array.
 * @example
 *
 * omit({ a: 1, b: 2, c: 3 }, ['a', 'c']);
 * // => { b: 2 }
 *
 * omit({ a: 1, b: 2 }, ['a', 'b']);
 * // => {}
 *
 * omit({ a: 1, b: 2 }, ['missing']);
 * // => { a: 1, b: 2 }
 *
 * omit({ a: 1, b: 2 });
 * // => { a: 1, b: 2 }
 *
 * const key = Symbol('id');
 * omit({ [key]: 123, name: 'John' }, [key]);
 * // => { name: 'John' }
 */
export function omit(obj, props = []) {
  if (obj === null || typeof obj !== 'object') {
    throw new TypeError('Expected an object for first argument');
  }

  if (!Array.isArray(props)) {
    throw new TypeError('Expected an array for second argument');
  }

  const result = { ...obj };

  for (const key of props) {
    delete result[key];
  }

  return result;
}
