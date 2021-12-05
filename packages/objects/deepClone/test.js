var deepClone = require('./deepClone');

describe('Object/deepClone', function () {
  it('Clones deeply arrays, objects and dates.', function () {
    var original = {
      obj: { a: 'a' },
      arr: [ { n: 1 } ],
      date: new Date('2021-05-28')
    };

    original.obj._proto_ = { foo: 'bar' };
    original.arr.foobar = 'foobar';

    var copy = deepClone(original);

    expect(original.obj === copy.obj).toBe(false);
    expect(original.arr === copy.arr).toBe(false);
    expect(original.arr[0] === copy.arr[0]).toBe(false);
    expect(original.date === copy.date).toBe(false);
  });
});
