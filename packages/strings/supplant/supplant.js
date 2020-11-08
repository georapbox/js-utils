'use strict';

/**
 * Does variable substitution on a string.
 * It scans through the string looking for expressions enclosed in {{ }} braces.
 * If an expression is found, use it as a key on the object,
 * and if the key has a string value or number value, it is substituted for the bracket expression and it repeats.
 *
 * @param {String} subjectString  The initial string to substitude its expressions.
 * @param {Object} [data] A plain object that acts as our model. If `data` omitted, returns the original string.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {String} The result string.
 * @example
 *
 * var str = '' +
 *   '<p>My name is {{person.fName}} {{person.lName}} and my job is {{person.position}}.</p>' +
 *    '<p>' +
 *      'My hobbies are:' +
 *      '<ul>' +
 *        '<li>{{hobbies.0}}</li>' +
 *        '<li>{{hobbies.1}}</li>' +
 *        '<li>{{hobbies.2}}</li>' +
 *      '</ul>' +
 *    '</p>';
 *
 * var data = {
 *   person: {
 *     fName: 'John',
 *     lName: 'Doe',
 *     position: 'Frontend Developer'
 *   },
 *   hobbies: ['coding', 'music', 'gaming']
 * };
 *
 * supplant(str, data);
 * // -> My name is John Doe and my job is Frontend Developer.
 * // -> My hobbies are:
 * // -> - coding
 * // -> - music
 * // -> - gaming
 */
function supplant(subjectString, data) {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  if (data == null || typeof data !== 'object') {
    return subjectString;
  }

  return subjectString.replace(/{{([^{{}}]*)}}/g, function (a, b) {
    var p = b.split(/\./); // Split the variable into its dot notation parts.
    var c = data; // The c variable becomes our cursor that will traverse the object.
    var i = 0;
    var l = p.length;

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

module.exports = supplant;