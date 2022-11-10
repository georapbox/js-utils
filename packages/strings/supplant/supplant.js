/**
 * Performs variable substitution on a string.
 * It scans through the string looking for expressions enclosed in `{{ }}` braces.
 * If an expression is found, use it as a key on the object,
 * and if the key has a string value or number value, it is substituted for the bracket expression and it repeats.
 *
 * @param {String} subjectString The initial string to substitude its expressions.
 * @param {Object} [data] A plain object that acts as our model. If `data` omitted, returns the original string.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {String} The result string.
 * @example
 *
 * const str = `<p>My name is {{person.fName}} {{person.lName}} and my job is {{person.position}}.</p>`;
 *
 * const data = {
 *   person: {
 *     fName: 'John',
 *     lName: 'Doe',
 *     position: 'Frontend Developer'
 *   }
 * };
 *
 * supplant(str, data);
 * // => '<p>My name is John Doe and my job is Frontend Developer.</p>'
 */
const supplant = (subjectString, data) => {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  if (data == null || typeof data !== 'object') {
    return subjectString;
  }

  const regexp = /{{([^{{}}]*)}}/g;

  return RegExp(regexp.source).test(subjectString) ? subjectString.replace(regexp, (a, b) => {
    const p = b.trim().split(/\./); // Split the variable into its dot notation parts.
    let c = data; // The c variable becomes our cursor that will traverse the object.

    // Loop over the steps in the dot notation path.
    for (let i = 0; i < p.length; i += 1) {
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
  }) : subjectString;
};

module.exports = supplant;
