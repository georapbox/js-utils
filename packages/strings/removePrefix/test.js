const removePrefix = require('./removePrefix');

describe('String/removePrefix', () => {
  it('removes a specific prefix from string', () => {
    expect(removePrefix('Hello world!', 'Hello ')).toBe('world!');

    expect(removePrefix('Hello world!', 'world')).toBe('Hello world!');

    expect(removePrefix('__foobar')).toBe('__foobar');

    expect(() => {
      return removePrefix('Hello world!', {});
    }).toThrow(new TypeError('Expected all arguments to be strings'));

    expect(() => {
      return removePrefix('Hello world!', null);
    }).toThrow(new TypeError('Expected all arguments to be strings'));
  });
});
