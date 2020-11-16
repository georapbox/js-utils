var partialRight = require('./partialRight.js');

describe('Function/partialRight', function () {
  var greet = function (greeting, title, fname, lname) {
    return greeting + ', ' + title + ' ' + fname + ' ' + lname + '.';
  };
  var greetMrJoeBlack = partialRight(greet, 'Mr.', 'Joe', 'Black');

  it('partially applies provided function to its arguments', function () {
    expect(greetMrJoeBlack('Hello')).toBe('Hello, Mr. Joe Black.');
  });

  it('providing more arguments than expected in the newly created function should affect the result', function () {
    expect(greetMrJoeBlack('Hello', 'there')).toBe('Hello, there Mr. Joe.');
  });

  it('throws if first argument is not a function', function () {
    expect(function () {
      return partialRight(null, 'foo', 'bar');
    }).toThrow('Expected a function for first argument');
  });
});