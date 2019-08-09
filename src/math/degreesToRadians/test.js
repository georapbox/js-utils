describe('Math/degreesToRadians', function () {
  it('converts degrees to radians', function () {
    expect(degreesToRadians(0)).toEqual(0);

    expect(degreesToRadians(90)).toEqual(Math.PI / 2);

    expect(degreesToRadians(180)).toEqual(Math.PI);

    expect(degreesToRadians(270)).toEqual(3 * Math.PI / 2);

    expect(degreesToRadians(360)).toEqual(2 * Math.PI);

    expect(degreesToRadians(NaN)).toEqual(NaN);

    expect(function () {
      return degreesToRadians('180');
    }).toThrow();
  });
});
