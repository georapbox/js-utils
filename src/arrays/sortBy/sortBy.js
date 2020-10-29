'use strict';

/**
 * Sorts an array of objects (not in place) by property.
 *
 * @category Array
 * @param {Array} array The array to sort.
 * @param {String} field The field to sort the array by.
 * @param {Boolean} [ascending=true] Defines the sort order.
 *        This is not optional if `primer` is required.
 * @param {function} [primer] Manipulates the field to sort by.
 * @throws {TypeError} If `array` is not array.
 * @return {Array} Returns the new sorted array.
 * @example
 *
 * var homes = [
 *   {h_id: 8, city: 'Dallas', price: '162500'},
 *   {h_id: 4, city: 'Beverly Hills', price: '162500.5'},
 *   {h_id: 5, city: 'new York', price: '162500.1'}
 * ];
 *
 * sortBy(homes, 'h_id');
 * // -> "[{"h_id":4,"city":"Bevery Hills","price":"162500.5"},{"h_id":5,"city":"new York","price":"162500.1"},{"h_id":8,"city":"Dallas","price":"162500"}]"
 *
 * sortBy(homes, 'h_id', false);
 * // -> "[{"h_id":8,"city":"Dallas","price":"162500"},{"h_id":5,"city":"new York","price":"162500.1"},{"h_id":4,"city":"Bevery Hills","price":"162500.5"}]"
 *
 * sortBy(homes, 'price', true);
 * // -> "[{"h_id":8,"city":"Dallas","price":"162500"},{"h_id":5,"city":"new York","price":"162500.1"},{"h_id":4,"city":"Bevery Hills","price":"162500.5"}]"
 *
 * sortBy(homes, 'price', true, function (field) {
 *   return parseInt(field);
 * });
 * // -> "[{"h_id":8,"city":"Dallas","price":"162500"},{"h_id":4,"city":"Bevery Hills","price":"162500.5"},{"h_id":5,"city":"new York","price":"162500.1"}]"
 */
function sortBy(array, field, ascending, primer) {
  var key;

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  key = function (x) {
    return primer ? primer(x[field]) : x[field];
  };

  return array.slice().sort(function (a, b) {
    var A = key(a),
      B = key(b);

    if (typeof ascending !== 'boolean') {
      ascending = true;
    }

    return (A < B ? -1 : A > B ? 1 : 0) * [-1, 1][+!!ascending];
  });
}

module.exports = sortBy;