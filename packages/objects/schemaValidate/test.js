var schemaValidate = require('./schemaValidate');

describe('Object/schemaValidate', function () {
  var schema = {
    name: function (value) {
      // Name should be a string (required).
      return typeof value === 'string';
    },
    age: function (value) {
      // Age should be a number, not NaN and greater that 18 (required).
      return !Number.isNaN(value) && typeof value === 'number' && value >= 18;
    },
    phone: function (value) {
      // Phone should be a string of specific format (required).
      return /^(\+?\d{1,2}-)?\d{3}-\d{3}-\d{4}$/.test(value);
    },
    // Hobbies should be an array (optional).
    hobbies: function (value) {
      return !value || Array.isArray(value);
    },
    emails: function (value) {
      // Emails should be an array of at least one item (required).
      return Array.isArray(value) && value.length > 0;
    }
  };

  it('Object should be validated against provided schema', function () {
    var user = {
      name: 'John Doe',
      age: 30,
      phone: '123-456-7890',
      emails: ['john_doe@gmail.com'],
      hobbies: []
    };

    expect(schemaValidate(user, schema).valid).toBe(true);
  });

  it('"age" property should be a number; thus object is invalid if string is provided', function () {
    var user = {
      name: 'John Doe',
      age: '30',
      phone: '123-456-7890',
      emails: ['john_doe@gmail.com'],
      hobbies: []
    };
    var res = schemaValidate(user, schema);

    expect(res.valid).toBe(false);
    expect(res.invalidProperties[0]).toBe('age');
  });

  it('"emails" property should be an array of at least one item; thus object is invalid if empty array is provided', function () {
    var user = {
      name: 'John Doe',
      age: 30,
      phone: '123-456-7890',
      emails: [],
      hobbies: []
    };
    var res = schemaValidate(user, schema);

    expect(res.valid).toBe(false);
    expect(res.invalidProperties[0]).toBe('emails');
  });

  it('"hobbies" property should be an optional array; thus object is valid if not provided', function () {
    var user = {
      name: 'John Doe',
      age: 30,
      phone: '123-456-7890',
      emails: ['john_doe@gmail.com']
    };
    var res = schemaValidate(user, schema);

    expect(res.valid).toBe(true);
    expect(res.invalidProperties).toHaveLength(0);
  });

  it('"phone" property should be astring of format "123-456-7890"; thus object is invalid if "1234567890" is provided', function () {
    var user = {
      name: 'John Doe',
      age: 30,
      phone: '1234567890',
      emails: ['john_doe@gmail.com'],
      hobbies: []
    };
    var res = schemaValidate(user, schema);

    expect(res.valid).toBe(false);
    expect(res.invalidProperties[0]).toBe('phone');
  });

  it('throws if schema\'s property is not function', function () {
    var user = { name: 'John Doe' };
    var schema = { name: null };

    expect(function () {
      return schemaValidate(user, schema);
    }).toThrow('Schema validators must be functions');
  });
});
