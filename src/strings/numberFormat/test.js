var numberFormat = require('./numberFormat');

describe('String/numberFormat', function () {
  it('formats a number based on the number of decimal points, the decimal separator and the thousands separator', function () {
    expect(numberFormat(123456789.12345)).toEqual('123,456,789');

    expect(numberFormat(123456789.12345, 3, '.', ',')).toEqual('123,456,789.123');

    expect(numberFormat(123456789.12345, 3, ',', '.')).toEqual('123.456.789,123');

    expect(numberFormat(123456, 0, ',', '.')).toEqual('123.456');
  });
});
