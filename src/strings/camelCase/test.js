describe('String/camelCase', function () {
  it('should convert a string to camel case', function () {
    expect(camelCase('Foo Bar')).toEqual('fooBar');

    expect(camelCase('--foo-bar--')).toEqual('fooBar');

    expect(camelCase('__FOO_BAR__')).toEqual('fooBar');

    expect(camelCase('__FOO BAR__')).toEqual('fooBar');

    expect(camelCase('FOO BAR')).toEqual('fooBar');

    expect(camelCase('FOO?BAR')).toEqual('fooBar');

    expect(camelCase('FOO!#$%^&?BAR')).toEqual('fooBar');

    expect(function () {
      return camelCase({});
    }).toThrow();
  });
});
