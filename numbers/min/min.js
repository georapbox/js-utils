/**
 * Returns the smallest of zero or more numbers.
 * Accepts any number of numbers as parameters, or an array of numbers.
 * @returns {Number} The smallest number from the arguments provided.
 */
function min() {
    return arguments.length === 1 && arguments[0].constructor === Array ?
        Math.min.apply(null, arguments[0]) :
        Math.min.apply(null, arguments);
}