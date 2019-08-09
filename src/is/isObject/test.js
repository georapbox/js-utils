describe('is/isObject', function () {
  it('checks if a value is object', function () {
    expect(isObject({})).toBe(true);

    expect(isObject(function test() {})).toBe(true);

    expect(isObject([1, 2, 3])).toBe(true);

    expect(isObject(new String('Hello world'))).toBe(true);

    expect(isObject('Hello world')).toBe(false);
  });
});
