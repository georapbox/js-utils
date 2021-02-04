'use strict';

/**
 * Creates a string by conditionally joining classNames together.
 *
 * @param {String | Object} ...arguments List of classes to be joined. Falsy arguments or arguments of unsupported type are ignored.
 * @returns {String} Returns the final concatenated string.
 * @example
 *
 * classnames('foo', 'bar');
 * // -> 'foo bar'
 *
 * classnames('foo', { bar: true });
 * // -> 'foo bar'
 *
 * classnames('foo', { bar: false });
 * // -> 'foo'
 *
 * classnames({ foo: true }, { bar: true });
 * // -> 'foo bar'
 *
 * classnames({ foo: true, bar: true });
 * // -> 'foo bar'
 *
 * classnames('foo', 0, false, undefined, null, { bar: 1 }, NaN, { baz: 0 }); // falsy values are ignored
 * // -> 'foo bar'
 */
function classnames(/* ...arguments */) {
  var argsLength = arguments.length;
  var separator = ' ';
  var result = '';
  var i, key, arg;

  if (!argsLength) {
    return result;
  }

  for (i = 0; i < argsLength; i += 1) {
    arg = arguments[i];

    if (!arg) {
      continue;
    }

    if (typeof arg === 'string') {
      result += (result ? separator : '') + arg;
    } else if (typeof arg === 'object' && Object.prototype.toString.call(arg) === '[object Object]') {
      for (key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
          result += (result ? separator : '') + key;
        }
      }
    }
  }

  return result;
}

module.exports = classnames;
