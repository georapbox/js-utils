/**
 * Returns a pseudo-random number (integer or floating-point)
 * between a min (inclusive) and a max (exclusive) value.
 * @param   {Number}  min                The minimum value of the range.
 * @param   {Number}  max                The maximum value of the range.
 * @param   {Boolean} [floatPoint=false] If true the returned number will be floating-point.
 * @returns {Number}  The pseudo-random number.
 */
function randomBetween(min, max, floatPoint) {
    'use strict';

    var isFloatPoint = floatPoint === true;

    min = isFloatPoint ? parseFloat(min) : parseInt(min, 10);
    max = isFloatPoint ? parseFloat(max) : parseInt(max, 10);

    var rInt = Math.random() * (max - min);
    return isFloatPoint ? rInt + min : Math.floor(rInt) + min;
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = randomBetween;
}
