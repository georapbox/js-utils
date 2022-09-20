const removeSuffix = require('./removeSuffix');

describe('String/removeSuffix', () => {
  it('removes a specific suffix from string', () => {
    expect(removeSuffix('Hello world!', 'world!')).toBe('Hello ');

    expect(removeSuffix('Hello world!', 'Hello')).toBe('Hello world!');

    expect(removeSuffix('Hello world!', '')).toBe('Hello world!');

    expect(removeSuffix('foobar__')).toBe('foobar__');

    expect(() => {
      return removeSuffix('foobar__', {});
    }).toThrow(new TypeError('Expected a string for first and second argument argument'));

    expect(() => {
      return removeSuffix('foobar__', null);
    }).toThrow(new TypeError('Expected a string for first and second argument argument'));
  });
});
