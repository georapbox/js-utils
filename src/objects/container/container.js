'use strict';

/**
 * Acts as a wrapper/container around the `value` passed in.
 *
 * @module Container
 * @category Object
 * @param {*} value The value to wrap.
 * @return {Object} The wrapper object containing the value.
 * @example
 *
 * container(10);
 * // -> {val: 10}
 *
 * container('Hello world');
 * // -> {val: 'Hello world'}
 *
 * container(['a', 'b', 'c']);
 * // -> {val: ['a', 'b', 'c']}
 */
module.exports = (function () {
  function ContainerType(val) {
    this.val = val;
  }

  function container(x) {
    return new ContainerType(x);
  }

  /**
   * Grabs the value from the container and pass it to the function `func`.
   * When mapping is done the value goes back to the container.
   *
   * @function map
   * @param {function} func The function to use for mapping.
   * @return {Object} The container object.
   * @example
   *
   * var
   *   getFirst = function (item) {
   *     return item[0];
   *   },
   *   capitalize = function (item) {
   *     return item.toUpperCase();
   *   },
   *   reverse = function (arr) {
   *     return arr.reverse();
   *   };
   *
   * var c = container(['a', 'b', 'c']),    // -> {val: ['a', 'b', 'c']}
   *   reversed = c.map(reverse),           // -> {val: ['c', 'b', 'a']}
   *   first = reversed.map(getFirst),      // -> {val: 'c'}
   *   capital = first.map(capitalize),     // -> {val: 'C'}
   *   match = capital.map(function (val) {
   *     return val.match(/cat/gi);
   *   });                                  // -> {val: null}
   *
   * // The above could be also written like this:
   * container(['a', 'b', 'c'])
   *   .map(reverse)
   *   .map(getFirst)
   *   .map(capitalize)
   *   .map(function (val) {
   *     return val.match(/cat/gi);
   *   });
   */
  ContainerType.prototype.map = function (func) {
    return this.val ? container(func(this.val)) : container(null);
  };

  return container;
}());