const get = require('./get');

describe('Object/get', () => {
  it('Gets the value at path of object. If the resolved value is undefined, the "defaultValue" is returned in its place.', () => {
    const o1 = {
      'a': [
        {
          'b': {
            'c': 3
          }
        }
      ]
    };

    const o2 = {
      a: {
        b: null,
        c: 'C'
      }
    };

    const o3 = {
      0: {
        1: 'foo'
      }
    };

    const o4 = ['a', 'b'];

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

    expect(get(o2, ['a', '', null, 'b', void 0])).toBeNull();
    expect(get(o2, ['a', '', null, 'c', void 0])).toBe('C');

    expect(get(o3, '0.1')).toBe('foo');
    expect(get(o3, ['0', '1'])).toBe('foo');
    expect(get(o3, [0, 1])).toBe('foo');

    expect(get(o4, 0)).toBe('a');
    expect(get(o4, '1')).toBe('b');

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
