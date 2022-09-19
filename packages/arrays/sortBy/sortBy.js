'use strict';

/**
 * Sorts an array of plain objects (not in place) by property.
 *
 * @param {Array} array The array to sort.
 * @param {String} field The field to sort the array by.
 * @param {Boolean} [ascending=true] Defines the sort order. Falsy values will assume descending. This is not optional if `primer` is required.
 * @param {function} [primer] Manipulates the field to sort by.
 * @throws {TypeError} If `array` is not array.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * const homes = [
 *   {h_id: 8, city: 'Dallas', price: '162500'},
 *   {h_id: 4, city: 'Beverly Hills', price: '162500.5'},
 *   {h_id: 5, city: 'new York', price: '162500.1'}
 * ];
 *
 * sortBy(homes, 'h_id');
 * // => "[{"h_id":4,"city":"Bevery Hills","price":"162500.5"},{"h_id":5,"city":"new York","price":"162500.1"},{"h_id":8,"city":"Dallas","price":"162500"}]"
 *
 * sortBy(homes, 'h_id', false);
 * // => "[{"h_id":8,"city":"Dallas","price":"162500"},{"h_id":5,"city":"new York","price":"162500.1"},{"h_id":4,"city":"Bevery Hills","price":"162500.5"}]"
 *
 * sortBy(homes, 'price', true);
 * // => "[{"h_id":8,"city":"Dallas","price":"162500"},{"h_id":5,"city":"new York","price":"162500.1"},{"h_id":4,"city":"Bevery Hills","price":"162500.5"}]"
 *
 * sortBy(homes, 'price', true, function (field) {
 *   return parseInt(field);
 * });
 * // => "[{"h_id":8,"city":"Dallas","price":"162500"},{"h_id":4,"city":"Bevery Hills","price":"162500.5"},{"h_id":5,"city":"new York","price":"162500.1"}]"
 */
const sortBy = (array, field, ascending = true, primer) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  const key = x => typeof primer === 'function' ? primer(x[field]) : x[field];

  const isPlainObject = value => {
    if (Object.prototype.toString.call(value) !== '[object Object]') {
      return false;
    }

    const proto = Object.getPrototypeOf(value);

    return proto === null || proto === Object.prototype;
  };

  return array.filter(isPlainObject).sort((a, b) => {
    const A = key(a);
    const B = key(b);

    return (A < B ? -1 : A > B ? 1 : 0) * [-1, 1][+!!ascending];
  });
};

module.exports = sortBy;
