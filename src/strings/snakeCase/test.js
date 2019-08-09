describe('String/snakeCase', function () {
  it('should convert string into string delimited by underscores', function () {
    expect(snakeCase('Foo Bar')).toEqual('foo_bar');

    expect(snakeCase('fooBar')).toEqual('foo_bar');

    expect(snakeCase('--FOO-BAR--')).toEqual('foo_bar');

    expect(snakeCase('__FOO_BAR__')).toEqual('foo_bar');

    expect(snakeCase('foo_bar')).toEqual('foo_bar');

    expect(snakeCase('foo bar')).toEqual('foo_bar');

    expect(snakeCase('foo???bar')).toEqual('foo_bar');

    expect(snakeCase('foo!@#$%^&*()bar')).toEqual('foo_bar');

    expect(snakeCase('foo?Bar2')).toEqual('foo_bar2');

    expect(snakeCase('-f-o-o-b-a-r-')).toEqual('f_o_o_b_a_r');

    expect(snakeCase(' f o o b a r ')).toEqual('f_o_o_b_a_r');

    expect(function () {
      return snakeCase({});
    }).toThrow();
  });
});
