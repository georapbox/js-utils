describe('misc/parseColor', function () {
  it('Converts a color number value to a hexadecimal formatted string, or a hexadecimal formatted string to a number.', function () {
    expect(parseColor('#ff0000', true)).toEqual(16711680);

    expect(parseColor('ff0000', true)).toEqual(16711680);

    expect(parseColor('#ff0000')).toEqual('#ff0000');

    expect(parseColor('ff0000')).toEqual('ff0000');

    expect(parseColor(16711680)).toEqual('#ff0000');

    expect(parseColor(16711680, true)).toEqual(16711680);

    expect(parseColor(0xff0000)).toEqual('#ff0000');

    expect(parseColor(0xff0000, true)).toEqual(16711680);
  });
});
