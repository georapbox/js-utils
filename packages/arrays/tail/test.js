var tail = require('./tail');

describe('Array/tail', function () {
  it('Gets all but the first element of array', function () {
    expect(tail([1, 2, 3])).toEqual([2, 3]);

    expect(tail([1])).toEqual([]);

    expect(tail([])).toEqual([]);

    expect(function () {
      return tail({});
    }).toThrow();
  });
});
