'use strict';

/**
 * Creates a deep clone of a given value. It supports cloning arrays, objects and dates.
 * All other types are just passed by reference. For more sophisticated deep cloning, use
 * [structuredClone()](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone) that
 * creates a deep clone using the structured clone algorithm and covers more cases.
 *
 * @param {*} obj The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @example
 *
 * var original = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var clone = deeClone(original);
 *
 * console.log(clone[0] === original[0]);
 * // -> false
 */
function deepClone(obj) {
  var key, copy;

  if (Array.isArray(obj)) {
    copy = [];
    for (key in obj) {
      copy[key] = deepClone(obj[key]);
    }
    return copy;
  } else if (Object.prototype.toString.call(obj) === '[object Object]') {
    copy = {};
    for (key in obj) {
      copy[key] = deepClone(obj[key]);
    }
    return copy;
  } else if (Object.prototype.toString.call(obj) === '[object Date]') {
    return new Date(obj.getTime());
  } else {
    return obj;
  }
}

module.exports = deepClone;
