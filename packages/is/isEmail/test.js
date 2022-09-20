const isEmail = require('./isEmail');

describe('is/isEmail', () => {
  it('should validate various strings as emails', () => {
    expect(isEmail('me@example.com')).toBe(true);

    expect(isEmail('a.nonymous@example.com')).toBe(true);

    expect(isEmail('name+tag@example.com')).toBe(true);

    expect(isEmail('name\@tag@example.com')).toBe(true); // eslint-disable-line no-useless-escape

    expect(isEmail('name@tag@example.com')).toBe(true);

    expect(isEmail('spaces are allowed@example.com')).toBe(true);

    expect(isEmail("!#$%&'+-/=.?^`{|}~@[1.0.0.127]")).toBe(true); // eslint-disable-line quotes

    expect(isEmail("!#$%&'+-/=.?^`{|}~@[IPv6:0123:4567:89AB:CDEF:0123:4567:89AB:CDEF]")).toBe(false); // eslint-disable-line quotes

    expect(() => {
      return isEmail(123);
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
