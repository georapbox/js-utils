'use strict';

/**
 * Checks if value is classified as a Symbol primitive.
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if `value` is classified as a Symbol primitive, else false.
 * @example
 *
 * isSymbol(Symbol());
 * // -> true
 *
 * isSymbol(Symbol('abc'));
 * // -> true
 *
 * isSymbol(Symbol.for('abc'));
 * // -> true
 *
 * isSymbol(Symbol.iterator);
 * // -> true
 *
 * isSymbol('abc');
 * // -> false
 */
function isSymbol(value) {
  return typeof value === 'symbol' || Object.prototype.toString.call(value) === '[object Symbol]';
}

module.exports = isSymbol;