/* global removeSuffix */

describe('String/removeSuffix', function () {
  it('removes a specific suffix from string', function () {
    expect(removeSuffix('Hello world!', 'world!')).toEqual('Hello ');

    expect(removeSuffix('Hello world!', 'Hello')).toEqual('Hello world!');

    expect(removeSuffix('Hello world!', '')).toEqual('Hello world!');

    expect(removeSuffix('foobar__')).toEqual('foobar__');

    expect(function () {
      return removeSuffix('foobar__', {});
    }).toThrow();
  });
});
