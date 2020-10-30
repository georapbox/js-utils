/**
 * Move an array element to a different position.
 *
 * @param {Array} array The array to process.
 * @param {Number} fromIndex Index of the element to move. If negative, will begin that many elements from the end.
 * @param {Number} toIndex Index of the position the element should move to. If negative, will begin that many elements from the end.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `fromIndex` or `toIndex` is not number.
 * @returns {Array} The new array with the element moved to a new position.
 * @example
 *
 * var array = ['A', 'B', 'C', 'D', 'E'];
 *
 * move(array, 0, 1);
 * // -> ['B', 'A', 'C', 'D', 'E']
 *
 * move(array, 0, array.length - 1);
 * // -> ['B', 'C', 'D', 'E', 'A']
 *
 * move(array, -1, 3);
 * // -> ['A', 'B', 'C', 'E', 'D']
 *
 * move(array, -1, -3);
 * // -> ['A', 'B', 'E', 'C', 'D']
 */
function move(array, fromIndex, toIndex) {
  var resultArray, startIndex, endIndex, elementToMove;

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof fromIndex !== 'number' || typeof toIndex !== 'number') {
    throw new TypeError('Expected a number for second and third arguments');
  }

  resultArray = Array.prototype.slice.call(array, 0);

  if (fromIndex === toIndex) {
    return resultArray;
  }

  startIndex = fromIndex < 0 ? resultArray.length + fromIndex : fromIndex;

  if (startIndex >= 0 && startIndex < resultArray.length) {
    endIndex = toIndex < 0 ? resultArray.length + toIndex : toIndex;
    elementToMove = resultArray.splice(fromIndex, 1)[0];
    resultArray.splice(endIndex, 0, elementToMove);
  }

  return resultArray;
}

module.exports = move;