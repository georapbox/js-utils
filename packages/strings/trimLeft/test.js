var trimLeft = require('./trimLeft');

describe('String/trimLeft', function () {
  it('trims string from left end', function () {
    expect(trimLeft('    Hey').length).toEqual(3);

    expect(function () {
      return trimLeft(null);
    }).toThrow();

    expect(function () {
      return trimLeft(123);
    }).toThrow();

    expect(function () {
      return trimLeft({});
    }).toThrow();

    expect(function () {
      return trimLeft([]);
    }).toThrow();

    expect(function () {
      return trimLeft(void 0);
    }).toThrow();
  });
});
