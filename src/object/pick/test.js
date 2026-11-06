import { describe, expect, it } from 'vitest';
import { pick } from './pick.js';

describe('Object/pick', () => {
  it('picks the specified properties', () => {
    const object = { a: 1, b: 2, c: 3 };

    expect(pick(object, ['a', 'c'])).toStrictEqual({ a: 1, c: 3 });
    expect(pick(object, ['a', 'b', 'c'])).toStrictEqual(object);
  });

  it('returns an empty object when no properties are specified', () => {
    expect(pick({ a: 1, b: 2 }, [])).toStrictEqual({});
  });

  it('ignores properties that do not exist', () => {
    const object = { a: 1, b: 2 };

    expect(pick(object, ['missing'])).toStrictEqual({});
    expect(pick(object, ['a', 'missing'])).toStrictEqual({ a: 1 });
  });

  it('handles duplicate property keys', () => {
    expect(pick({ a: 1, b: 2 }, ['a', 'a'])).toStrictEqual({ a: 1 });
  });

  it('supports symbol property keys', () => {
    const key = Symbol('id');
    const other = Symbol('other');

    const object = {
      [key]: 123,
      [other]: 456,
      name: 'John'
    };

    expect(pick(object, [key, 'name'])).toStrictEqual({
      [key]: 123,
      name: 'John'
    });
  });

  it('does not pick inherited properties', () => {
    const prototype = { inherited: 'value' };
    const object = Object.assign(Object.create(prototype), {
      a: 1,
      b: 2
    });

    expect(pick(object, ['a', 'inherited'])).toStrictEqual({ a: 1 });
  });

  it('does not pick non-enumerable properties', () => {
    const object = { a: 1 };

    Object.defineProperty(object, 'hidden', {
      value: 42,
      enumerable: false
    });

    expect(pick(object, ['a', 'hidden'])).toStrictEqual({ a: 1 });
  });

  it('only picks top-level properties', () => {
    const object = {
      user: {
        name: 'John',
        age: 30
      },
      active: true
    };

    expect(pick(object, ['user.name'])).toStrictEqual({});
    expect(pick(object, ['user'])).toStrictEqual({
      user: { name: 'John', age: 30 }
    });
  });

  it('supports arrays as source objects', () => {
    const array = ['a', 'b', 'c'];

    expect(pick(array, [0, 2])).toStrictEqual({
      0: 'a',
      2: 'c'
    });

    expect(pick(array, ['length'])).toStrictEqual({});
  });

  it('supports class instances', () => {
    class User {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    }

    const user = new User('John', 30);

    expect(pick(user, ['name'])).toStrictEqual({ name: 'John' });
  });

  it('creates a shallow copy of the picked properties', () => {
    const settings = { theme: 'dark' };
    const object = { name: 'John', settings };

    const result = pick(object, ['settings']);

    expect(result).toStrictEqual({ settings });
    expect(result.settings).toBe(settings);
  });

  it('returns a new object without modifying the original', () => {
    const object = { a: 1, b: 2, c: 3 };

    const result = pick(object, ['a', 'c']);

    expect(result).toStrictEqual({ a: 1, c: 3 });
    expect(result).not.toBe(object);
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3 });
  });

  it('handles empty source objects', () => {
    expect(pick({}, ['a'])).toStrictEqual({});
    expect(pick({}, [])).toStrictEqual({});
  });

  it('handles special property names', () => {
    const object = JSON.parse('{"__proto__": 1, "constructor": 2, "name": "John"}');

    const result = pick(object, ['__proto__', 'constructor']);

    expect(Object.hasOwn(result, '__proto__')).toBe(true);
    expect(result['__proto__']).toBe(1);
    expect(result.constructor).toBe(2);
    expect(Object.hasOwn(result, 'name')).toBe(false);
  });

  it('throws a TypeError when the first argument is not an object', () => {
    for (const value of [undefined, null, NaN, 42, 'hello', true, Symbol('key')]) {
      expect(() => pick(value, ['a'])).toThrow(new TypeError('Expected an object for first argument'));
    }
  });

  it('throws a TypeError when the second argument is not an array', () => {
    for (const value of [undefined, null, 'a', 42, true, {}]) {
      expect(() => pick({ a: 1 }, value)).toThrow(new TypeError('Expected an array for second argument'));
    }
  });
});
