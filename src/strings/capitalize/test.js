/* global capitalize */

describe('String/capitalize', function () {
  it('should capitalize the first character of a string', function () {
    expect(capitalize('hello')).toEqual('Hello');

    expect(capitalize('hElLo')).toEqual('HElLo');

    expect(capitalize('hElLo', true)).toEqual('Hello');

    expect(function () {
      return capitalize({});
    }).toThrow();
  });
});
