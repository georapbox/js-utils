/**
 * Returns the largest of zero or more numbers.
 * Accepts any number of numbers as parameters, or an array of numbers.
 * @returns {Number} The largest number from the arguments provided.
 */
function max() {
    'use strict';

    return arguments.length === 1 && arguments[0].constructor === Array ?
        Math.max.apply(null, arguments[0]) :
        Math.max.apply(null, arguments);
}
