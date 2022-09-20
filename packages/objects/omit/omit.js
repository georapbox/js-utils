'use strict';

/**
 * Creates an object composed of the own enumerable (not inherited) property paths of object that are not omitted.
 *
 * @param {Object} obj The source object.
 * @param {Array} props The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * const obj = {
 *   a: 'aaa',
 *   b: 'bbb',
 *   c: 'ccc'
 * };
 *
 * omit(obj, ['a', 'c']);
 * // => { b: 'bbb' }
 *
 * omit(obj, ['a', 'b', 'c']);
 * // => {}
 *
 * omit(obj);
 * // => { a: 'aaa', b: 'bbb', c: 'ccc' }
 *
 * omit(obj, []);
 * // => { a: 'aaa', b: 'bbb', c: 'ccc' }
 *
 * omit(obj, ['key_not_exists']);
 * // => { a: 'aaa', b: 'bbb', c: 'ccc' }
 */
const omit = (obj, props) => {
  if (!Array.isArray(props) || props.length === 0) {
    props = [];
  }

  return Object.keys(obj).reduce((accum, key) => {
    if (props.indexOf(key) === -1) {
      accum[key] = obj[key];
    }
    return accum;
  }, {});
};

module.exports = omit;
