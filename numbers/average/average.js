/**
 * Calculates the average of a set of numbers.
 * Accepts any number of numbers as parameters, or an array of numbers.
 * Ommits any non number value.
 * @returns {Number} The average number of the set of data provided.
 */
function average() {
    var sum = 0,
        count = 0,
        argsLen = arguments.length,
        index,
        len,
        args,
        argItem;

    // Check if arguments is a set of numbers or an array of numbers.
    if (argsLen > 1 || (argsLen === 1 && typeof arguments[0] === 'number')) {
        args = arguments;
        len = argsLen;
    } else if (argsLen === 1 && arguments[0].constructor === Array) {
        args = arguments[0];
        len = args.length;
    }

    while (len--) {
        argItem = args[len];

        // Ommit any non number value.
        if (isFinite(argItem) && typeof argItem === 'number') {
            sum += argItem;
            count += 1;
        }
    }

    return count > 0 ? sum / count : 0;
}