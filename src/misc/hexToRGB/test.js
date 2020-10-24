var hexToRGB = require('./hexToRGB');

describe('misc/hexToRGB', function () {
  it('converts a color to RGB(A) format', function () {
    expect(hexToRGB(0xFF0000)).toEqual('rgb(255, 0, 0)');

    expect(hexToRGB('0xFF0000')).toEqual('rgb(255, 0, 0)');

    expect(hexToRGB('#ff0000')).toEqual('rgb(255, 0, 0)');

    expect(hexToRGB(16711680)).toEqual('rgb(255, 0, 0)');

    expect(hexToRGB('16711680')).toEqual('rgb(255, 0, 0)');

    expect(hexToRGB('#ff0000', 0.5)).toEqual('rgba(255, 0, 0, 0.5)');

    expect(hexToRGB('#ff0000', '0.5')).toEqual('rgb(255, 0, 0)');

    expect(hexToRGB('#ff0000', null)).toEqual('rgb(255, 0, 0)');

    expect(hexToRGB()).toEqual('rgb(0, 0, 0)');

    expect(hexToRGB(null)).toEqual('rgb(0, 0, 0)');

    expect(hexToRGB('Hello world')).toEqual('rgb(0, 0, 0)');
  });
});
