'use strict';

/**
 * Checks if a value is classified as a Symbol primitive.
 *
 * @param {*} value The value to check.
 * @return {Boolean} True if value is classified as a Symbol primitive, else false.
 * @example
 *
 * isSymbol(Symbol());
 * // -> true
 *
 * isSymbol(Symbol('foo'));
 * // -> true
 *
 * isSymbol(Symbol.for('foo'));
 * // -> true
 *
 * isSymbol(Symbol.iterator);
 * // -> true
 *
 * isSymbol('foo');
 * // -> false
 */
function isSymbol(value) {
  return typeof value === 'symbol' || Object.prototype.toString.call(value) === '[object Symbol]';
}

module.exports = isSymbol;
