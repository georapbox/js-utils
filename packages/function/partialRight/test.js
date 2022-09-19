const partialRight = require('./partialRight.js');

describe('partialRight', () => {
  const greet = (greeting, title, fname, lname) => `${greeting}, ${title} ${fname} ${lname}.`;
  const greetMrJoeBlack = partialRight(greet, 'Mr.', 'Joe', 'Black');

  it('partially applies provided function to its arguments', () => {
    expect(greetMrJoeBlack('Hello')).toBe('Hello, Mr. Joe Black.');
  });

  it('providing more arguments than expected in the newly created function should affect the result', () => {
    expect(greetMrJoeBlack('Hello', 'there')).toBe('Hello, there Mr. Joe.');
  });

  it('throws error if argument is not function', () => {
    expect(() => {
      return partialRight(null);
    }).toThrow(new TypeError('Expected a function for first argument'));
  });
});
