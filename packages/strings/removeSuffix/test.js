var removeSuffix = require('./removeSuffix');

describe('String/removeSuffix', function () {
  it('removes a specific suffix from string', function () {
    expect(removeSuffix('Hello world!', 'world!')).toBe('Hello ');

    expect(removeSuffix('Hello world!', 'Hello')).toBe('Hello world!');

    expect(removeSuffix('Hello world!', '')).toBe('Hello world!');

    expect(removeSuffix('foobar__')).toBe('foobar__');

    expect(function () {
      return removeSuffix('foobar__', {});
    }).toThrow();

    expect(function () {
      return removeSuffix('foobar__', null);
    }).toThrow();
  });
});
