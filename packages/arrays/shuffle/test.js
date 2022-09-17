const shuffle = require('./shuffle');

describe('Array/shuffle', function () {
  it('shuffles an array', function () {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    expect(shuffle(arr)).toHaveLength(8);

    expect(shuffle(arr)).not.toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);

    expect(function () {
      return shuffle({ a: 'a', b: 'b', c: 'c' });
    }).toThrow(new TypeError('Expected an array for first argument'));
  });
});
