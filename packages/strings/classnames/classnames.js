'use strict';

/**
 * Creates a string by conditionally joining classNames together.
 *
 * @param {...string|...object} ...args List of classes to be joined. Falsy arguments or arguments of unsupported type are ignored.
 * @returns {string} Returns the final concatenated string.
 * @example
 *
 * classnames('foo', 'bar');
 * // => 'foo bar'
 *
 * classnames('foo', { bar: true });
 * // => 'foo bar'
 *
 * classnames('foo', { bar: false });
 * // => 'foo'
 *
 * classnames({ foo: true }, { bar: true });
 * // => 'foo bar'
 *
 * classnames({ foo: true, bar: true });
 * // => 'foo bar'
 *
 * classnames('foo', 0, false, undefined, null, { bar: 1 }, NaN, { baz: 0 }); // falsy values are ignored
 * // => 'foo bar'
 */
const classnames = (...args) => {
  const len = args.length;
  const separator = ' ';
  let result = '';

  if (!len) {
    return result;
  }

  for (let i = 0; i < len; i += 1) {
    const arg = args[i];

    if (!arg) {
      continue;
    }

    if (typeof arg === 'string') {
      result += (result ? separator : '') + arg;
    } else if (typeof arg === 'object' && Object.prototype.toString.call(arg) === '[object Object]') {
      for (const key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
          result += (result ? separator : '') + key;
        }
      }
    }
  }

  return result;
};

module.exports = classnames;
