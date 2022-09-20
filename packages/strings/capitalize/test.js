const capitalize = require('./capitalize');

describe('String/capitalize', () => {
  it('should capitalize the first character of a string', () => {
    expect(capitalize('hello')).toEqual('Hello');

    expect(capitalize('hElLo')).toEqual('HElLo');

    expect(capitalize('hElLo', true)).toEqual('Hello');

    expect(() => {
      return capitalize(12345);
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
