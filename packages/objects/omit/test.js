const omit = require('./omit');

describe('Object/omit', () => {
  it('Creates an object composed of the own enumerable property paths of object that are not omitted', () => {
    const obj1 = {
      a: 'aaa',
      b: 'bbb',
      c: 'ccc'
    };

    expect(omit(obj1, ['a', 'c'])).toEqual({
      b: 'bbb'
    });

    expect(omit(obj1, ['a', 'b', 'c'])).toEqual({});

    expect(omit(obj1)).toEqual({
      a: 'aaa',
      b: 'bbb',
      c: 'ccc'
    });

    expect(omit(obj1, [])).toEqual({
      a: 'aaa',
      b: 'bbb',
      c: 'ccc'
    });

    expect(omit(obj1, ['key_not_exists'])).toEqual({
      a: 'aaa',
      b: 'bbb',
      c: 'ccc'
    });
  });
});
