/* global colorToRGB */

describe('misc/colorToRGB', function () {
  it('converts a color to RGB(A) format', function () {
    expect(colorToRGB(0xFF0000)).toEqual('rgb(255, 0, 0)');

    expect(colorToRGB('0xFF0000')).toEqual('rgb(255, 0, 0)');

    expect(colorToRGB('#ff0000')).toEqual('rgb(255, 0, 0)');

    expect(colorToRGB(16711680)).toEqual('rgb(255, 0, 0)');

    expect(colorToRGB('16711680')).toEqual('rgb(255, 0, 0)');

    expect(colorToRGB('#ff0000', 0.5)).toEqual('rgba(255, 0, 0, 0.5)');

    expect(colorToRGB('#ff0000', '0.5')).toEqual('rgb(255, 0, 0)');

    expect(colorToRGB('#ff0000', null)).toEqual('rgb(255, 0, 0)');

    expect(colorToRGB()).toEqual('rgb(0, 0, 0)');

    expect(colorToRGB(null)).toEqual('rgb(0, 0, 0)');

    expect(colorToRGB('Hello world')).toEqual('rgb(0, 0, 0)');
  });
});
