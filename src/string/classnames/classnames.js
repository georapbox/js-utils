/**
 * Creates a string by conditionally joining class names with spaces.
 *
 * String arguments are included directly. Arrays are flattened recursively.
 * For plain objects, each own enumerable property whose value is truthy
 * contributes its key as a class name. All other values are ignored.
 *
 * @param {...any} args The class names, arrays, and objects to combine.
 * @returns {string} The concatenated class names.
 * @example
 *
 * classnames('foo', 'bar');
 * // => 'foo bar'
 *
 * classnames('foo', { bar: true, baz: false });
 * // => 'foo bar'
 *
 * classnames('foo', ['bar', 'baz']);
 * // => 'foo bar baz'
 *
 * classnames('foo', ['bar', ['baz', { active: true }]]);
 * // => 'foo bar baz active'
 *
 * classnames('foo', null, false, 0, { active: true });
 * // => 'foo active'
 */
export function classnames(...args) {
  const classes = [];

  for (const arg of args) {
    add(arg, classes);
  }

  return classes.join(' ');
}

function add(value, result) {
  if (typeof value === 'string') {
    if (value) {
      result.push(value);
    }
  } else if (Array.isArray(value)) {
    for (const item of value) {
      add(item, result);
    }
  } else if (value && Object.prototype.toString.call(value) === '[object Object]') {
    for (const key of Object.keys(value)) {
      if (value[key]) {
        result.push(key);
      }
    }
  }
}
