var pickBy = require('./pickBy');

describe('Object/pickBy', function () {
  it('creates an object composed of the object enumerable properties that predicate returns truthy for', function () {
    var o1 = Object.create({
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

    var o2 = new O(1, '2', 3);

    expect(pickBy(o1, function (value) {
      return typeof value === 'number';
    })).toStrictEqual({ a: 1, c: 3 });

    expect(pickBy(o1, function (value) {
      return typeof value === 'number';
    }, false)).toStrictEqual({ a: 1, c: 3, e: 5 });

    expect(pickBy(o2, function (value) {
      return typeof value === 'number';
    })).toStrictEqual({ a: 1, c: 3 });

    expect(pickBy(o2, function (value) {
      return typeof value === 'number';
    }, false)).toStrictEqual({ a: 1, c: 3, d: 4 });

    expect(pickBy(o1, function (value) {
      return typeof value === 'function';
    })).toStrictEqual({});

    expect(pickBy(o1, function (value) {
      return typeof value === 'function';
    }, false)).toStrictEqual({});

    expect(pickBy(o1, function (_, key) {
      return key === 'a';
    }, false)).toStrictEqual({ a: 1 });

    expect(pickBy(o1, function (_, key) {
      return key === 'd';
    }, false)).toStrictEqual({});

    expect(function () {
      return pickBy(null, function (value) {
        return typeof value === 'number';
      });
    }).toThrow('Expected a plain object for first argument');

    expect(function () {
      return pickBy(undefined, function (value) {
        return typeof value === 'number';
      });
    }).toThrow('Expected a plain object for first argument');

    expect(function () {
      return pickBy([], function (value) {
        return typeof value === 'number';
      });
    }).toThrow('Expected a plain object for first argument');

    expect(function () {
      return pickBy(new Map(), function (value) {
        return typeof value === 'number';
      });
    }).toThrow('Expected a plain object for first argument');

    expect(function () {
      return pickBy(new WeakMap(), function (value) {
        return typeof value === 'number';
      });
    }).toThrow('Expected a plain object for first argument');

    expect(function () {
      return pickBy(new Set(), function (value) {
        return typeof value === 'number';
      });
    }).toThrow('Expected a plain object for first argument');

    expect(function () {
      return pickBy(new WeakSet(), function (value) {
        return typeof value === 'number';
      });
    }).toThrow('Expected a plain object for first argument');

    expect(function () {
      return pickBy(o1);
    }).toThrow('Expected a function for second argument');

    expect(function () {
      return pickBy(o1, function (value) {
        return typeof value === 'number';
      }, 0);
    }).toThrow('Expected a boolean for third argument');
  });
});
