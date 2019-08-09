describe('Array/fromPairs', function () {
  it('creates an object composed from key-value pairs', function () {
    var pairs = [
      ['Javascript', 10],
      ['PHP', 3],
      ['Java', 4]
    ];

    expect(fromPairs(pairs)).toEqual({
      'Javascript': 10,
      'PHP': 3,
      'Java': 4
    });

    expect(function () {
      return fromPairs({
        'Javascript': 10,
        'PHP': 3,
        'Java': 4
      });
    }).toThrow();
  });
});
