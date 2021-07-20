var get = require('./get');

describe('Object/get', function () {
  it('Gets the value at path of object. If the resolved value is undefined, the "defaultValue" is returned in its place.', function () {
    var o1 = {
      'a': [
        {
          'b': {
            'c': 3
          }
        }
      ]
    };

    var o2 = {
      a: {
        b: null
      }
    };

    expect(get(o1, 'a[0].b.c')).toBe(3);
    expect(get(o1, ['a', '0', 'b', 'c'])).toBe(3);

    expect(get(o1, 'a.1.b.c')).toBeUndefined();
    expect(get(o1, ['a', '1', 'b', 'c'])).toBeUndefined();

    expect(get(o1, 'a.1.b.c', 'DEFAULT')).toBe('DEFAULT');
    expect(get(o1, ['a', '1', 'b', 'c'], 'DEFAULT')).toBe('DEFAULT');

    expect(get(o2, 'a.b')).toBeNull();
    expect(get(o2, ['a', 'b'])).toBeNull();

    expect(get(o2, 'a.b', 'DEFAULT')).toBeNull();
    expect(get(o2, ['a', 'b'], 'DEFAULT')).toBeNull();

    expect(get(o2, 'a.b.c')).toBeUndefined();
    expect(get(o2, ['a', 'b', 'c'])).toBeUndefined();

    expect(get(o2, 'a.b.c', 'DEFAULT')).toBe('DEFAULT');
    expect(get(o2, ['a', 'b', 'c'], 'DEFAULT')).toBe('DEFAULT');

    expect(get('string', 'a.b.c')).toBeUndefined();
    expect(get('string', ['a', 'b', 'c'], 'DEFAULT')).toBe('DEFAULT');

    expect(get(12345, 'a.b.c')).toBeUndefined();
    expect(get(12345, ['a', 'b', 'c'], 'DEFAULT')).toBe('DEFAULT');

    expect(get(null, 'a.b.c')).toBeUndefined();
    expect(get(null, ['a', 'b', 'c'], 'DEFAULT')).toBe('DEFAULT');

    expect(get(void 0, 'a.b.c')).toBeUndefined();
    expect(get(void 0, ['a', 'b', 'c'], 'DEFAULT')).toBe('DEFAULT');

    expect(get(new Set(), 'a.b.c')).toBeUndefined();
    expect(get(new Set(), ['a', 'b', 'c'], 'DEFAULT')).toBe('DEFAULT');
  });
});
