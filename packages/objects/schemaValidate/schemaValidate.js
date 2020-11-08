'use strict';

/**
 * Validates a plain object against a provided schema object.
 *
 * @NOTE To support legacy browsers, use `Array.prototype.map`, `Array.prototype.reduce` and `Object.keys()` polyfills.
 * @param {Object} object The object to validate.
 * @param {Object.<Function>} [schema] A plain object with validator functions. If `undefined` validation always passes.
 * @throws {TypeError} If any of the schema validators are not function.
 * @return {Object} An object holding a boolean to indicate if object is valid and an array with invalid properties if any.
 * @example
 *
 * var schema = {
 *   name: function (value) {
 *     // Name should be a string (required).
 *     return typeof value === 'string';
 *   },
 *   age: function (value) {
 *     // Age should be a number, not NaN and greater that 18 (required).
 *     return !Number.isNaN(value) && typeof value === 'number' && value >= 18;
 *   },
 *   phone: function (value) {
 *     // Phone should be a string of specific format (required).
 *     return /^(\+?\d{1,2}-)?\d{3}-\d{3}-\d{4}$/.test(value);
 *   },
 *   // Hobbies should be an array (optional).
 *   hobbies: function (value) {
 *     return !value || Array.isArray(value);
 *   },
 *   emails: function (value) {
 *     // Emails should be an array of at least one item (required).
 *     return Array.isArray(value) && value.length > 0;
 *   }
 * };
 *
 * var user_1 = {
 *   name: 'John Doe',
 *   age: 30,
 *   phone: '123-456-7890',
 *   emails: ['john_doe@gmail.com']
 * };
 *
 * var user_2 = {
 *   name: 'George Papas',
 *   age: 15,
 *   phone: '123-456-7890'
 * };
 *
 * schemaValidate(user_1, schema);
 * // -> {valid: true, invalidProperties: []}
 *
 * schemaValidate(user_2, schema);
 * // -> {valid: false, invalidProperties: ['age', 'emails']}
 *
 * schemaValidate(user_1);
 * // -> {valid: true, invalidProperties: []}
 */
function schemaValidate(object, schema) {
  var errorsArray = Object
    .keys(schema || {})
    .map(function (property) {
      var validator = schema[property];

      if (typeof validator !== 'function') {
        throw new TypeError('Schema validators must be functions');
      }

      return {
        property: property,
        valid: validator(object[property])
      };
    })
    .reduce(function (errors, pair) {
      var validationResult = pair.valid;
      var didNotValidate = validationResult === false || typeof validationResult === 'undefined';

      if (didNotValidate) {
        errors.push(pair.property);
      }

      return errors;
    }, []);

  return {
    valid: errorsArray.length === 0,
    invalidProperties: errorsArray
  };
}

module.exports = schemaValidate;