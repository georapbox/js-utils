const pickBy = require('./pickBy');

describe('Object/pickBy', () => {
  it('creates an object composed of the object enumerable properties that predicate returns truthy for', () => {
    const o1 = Object.create({
      e: 5
    });

    Object.defineProperties(o1, {
      a: {
        value: 1,
        enumerable: true
      },
      b: {
        value: '2',
        enumerable: true
      },
      c: {
        value: 3,
        enumerable: true
      },
      d: {
        value: 4,
        enumerable: false
      }
    });

    function O(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
    }

    O.prototype.d = 4;

    const o2 = new O(1, '2', 3);

    expect(pickBy(o1, value => {
      return typeof value === 'number';
    })).toStrictEqual({ a: 1, c: 3 });

    expect(pickBy(o1, value => {
      return typeof value === 'number';
    }, false)).toStrictEqual({ a: 1, c: 3, e: 5 });

    expect(pickBy(o2, value => {
      return typeof value === 'number';
    })).toStrictEqual({ a: 1, c: 3 });

    expect(pickBy(o2, value => {
      return typeof value === 'number';
    }, false)).toStrictEqual({ a: 1, c: 3, d: 4 });

    expect(pickBy(o1, value => {
      return typeof value === 'function';
    })).toStrictEqual({});

    expect(pickBy(o1, value => {
      return typeof value === 'function';
    }, false)).toStrictEqual({});

    expect(pickBy(o1, (_, key) => {
      return key === 'a';
    }, false)).toStrictEqual({ a: 1 });

    expect(pickBy(o1, (_, key) => {
      return key === 'd';
    }, false)).toStrictEqual({});

    expect(() => {
      return pickBy(null, value => {
        return typeof value === 'number';
      });
    }).toThrow(new TypeError('Expected a plain object for first argument'));

    expect(() => {
      return pickBy(undefined, value => {
        return typeof value === 'number';
      });
    }).toThrow(new TypeError('Expected a plain object for first argument'));

    expect(() => {
      return pickBy([], value => {
        return typeof value === 'number';
      });
    }).toThrow(new TypeError('Expected a plain object for first argument'));

    expect(() => {
      return pickBy(new Map(), value => {
        return typeof value === 'number';
      });
    }).toThrow(new TypeError('Expected a plain object for first argument'));

    expect(() => {
      return pickBy(new WeakMap(), value => {
        return typeof value === 'number';
      });
    }).toThrow(new TypeError('Expected a plain object for first argument'));

    expect(() => {
      return pickBy(new Set(), value => {
        return typeof value === 'number';
      });
    }).toThrow(new TypeError('Expected a plain object for first argument'));

    expect(() => {
      return pickBy(new WeakSet(), value => {
        return typeof value === 'number';
      });
    }).toThrow(new TypeError('Expected a plain object for first argument'));

    expect(() => {
      return pickBy(o1);
    }).toThrow(new TypeError('Expected a function for second argument'));

    expect(() => {
      return pickBy(o1, value => {
        return typeof value === 'number';
      }, 0);
    }).toThrow(new TypeError('Expected a boolean for third argument'));
  });
});
