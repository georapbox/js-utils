/**
 * Does variable substitution on a string.
 * It scans through the string looking for expressions enclosed in {{ }} braces.
 * If an expression is found, use it as a key on the object,
 * and if the key has a string value or number value, it is substituted for the bracket expression and it repeats.
 * @param {String} subjectString  The initial string to substitude its expressions.
 * @param {Object} data A plain object that acts as our model.
 * @return {String} Returns the result string.
 */
function supplant(subjectString, data) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    if (data == null) {
        return subjectString;
    }

    if (typeof data !== 'object') {
        throw new TypeError('Expected a plain object');
    }

    return subjectString.replace(/{{([^{{}}]*)}}/g, function (a, b) {
        var p = b.split(/\./), // Split the variable into its dot notation parts.
            c = data,          // The c variable becomes our cursor that will traverse the object.
            i = 0,
            l = p.length;

        // Loop over the steps in the dot notation path.
        for (i; i < l; i += 1) {
            // If the key doesn't exist in the object do not process.
            // Mirrors how the function worked for bad values.
            if (c[p[i]] == null) {
                return a;
            }

            // Move the cursor up to the next step.
            c = c[p[i]];
        }

        // If the data is a string or number return it,
        // otherwise do not process, return the value it was, i.e. {x}
        return typeof c === 'string' || typeof c === 'number' ? c : a;
    });
}
