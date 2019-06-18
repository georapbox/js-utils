/* global randomString */

describe('String/randomString', function () {
  it('generates a random string of n characters', function () {
    expect(randomString().length).toEqual(0);
    expect(randomString(16).length).toEqual(16);
    expect(randomString(10).length).toEqual(10);
  });
});
