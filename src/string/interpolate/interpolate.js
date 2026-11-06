/**
 * Replaces placeholders in a string with values from an object.
 *
 * Placeholders use `{{key}}` syntax and support nested properties
 * through dot notation, such as `{{person.name.first}}`.
 *
 * Only string and number values are substituted. Missing properties
 * and other value types leave the original placeholder unchanged.
 * Substitution is performed in a single pass.
 *
 * Values are inserted as plain strings without HTML escaping.
 * This utility does not parse or sanitize HTML.
 *
 * @param {string} str The string containing placeholders.
 * @param {object} [data] The object containing replacement values.
 * @returns {string} The interpolated string.
 * @throws {TypeError} If `str` is not a string.
 * @example
 *
 * const data = {
 *   person: {
 *     name: {
 *       first: 'John',
 *       last: 'Doe'
 *     },
 *     age: 30,
 *     position: 'Frontend Developer'
 *   }
 * };
 *
 * interpolate('Hello, {{person.name.first}} {{person.name.last}}!', data);
 * // => 'Hello, John Doe!'
 *
 * interpolate('Age: {{person.age}}', data);
 * // => 'Age: 30'
 *
 * interpolate('Position: {{ person.position }}', data);
 * // => 'Position: Frontend Developer'
 *
 * interpolate('Hello, {{person.nickname}}!', data);
 * // => 'Hello, {{person.nickname}}!'
 *
 * interpolate('Hello, {{name}}!');
 * // => 'Hello, {{name}}!'
 */
export function interpolate(str, data) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  if (data === null || typeof data !== 'object') {
    return str;
  }

  return str.replace(/\{\{([^{}]+)\}\}/g, (match, expression) => {
    const keys = expression.trim().split('.');
    let value = data;

    for (const key of keys) {
      if (value === null || typeof value !== 'object' || !Object.hasOwn(value, key)) {
        return match;
      }

      value = value[key];
    }

    return typeof value === 'string' || typeof value === 'number' ? String(value) : match;
  });
}
