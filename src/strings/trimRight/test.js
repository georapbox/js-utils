var trimRight = require('./trimRight');

describe('String/trimRight', function () {
  it('trims string from right end', function () {
    expect(trimRight('Hello    ').length).toEqual(5);

    expect(function () {
      return trimRight(null);
    }).toThrow();

    expect(function () {
      return trimRight(123);
    }).toThrow();

    expect(function () {
      return trimRight({});
    }).toThrow();

    expect(function () {
      return trimRight([]);
    }).toThrow();

    expect(function () {
      return trimRight(void 0);
    }).toThrow();
  });
});
