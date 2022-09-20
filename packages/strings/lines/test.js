const lines = require('./lines');

describe('String/lines', () => {
  const str = 'You can\'t make\nan omelet without\r\nbreaking a few eggs.';

  it('should return an array with the lines from a string', () => {
    expect(lines(str)).toHaveLength(3);

    expect(lines(str)[0]).toBe('You can\'t make');

    expect(lines(str)[1]).toBe('an omelet without');

    expect(lines(str)[2]).toBe('breaking a few eggs.');

    expect(() => {
      return lines(null);
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
