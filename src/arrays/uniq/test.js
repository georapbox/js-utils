describe('Array/uniq', function () {
  var arr = ['a', 'a', 'b', true, '2', 2, false, true];

  it('removes duplicate primitive values from an array', function () {
    var result = uniq(arr);

    expect(result).toEqual(['a', 'b', true, '2', 2, false]);

    expect(function () {
      return uniq({});
    }).toThrow();
  });
});
