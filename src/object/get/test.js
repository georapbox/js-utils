import { describe, expect, it } from 'vitest';
import { get } from './get.js';

describe('Object/get', () => {
  it('retrieves nested values using dot notation', () => {
    const object = { a: { b: { c: 3 } } };

    expect(get(object, 'a.b.c')).toBe(3);
    expect(get(object, 'a.b')).toBe(object.a.b);
  });

  it('retrieves array elements using bracket notation', () => {
    const object = { a: [{ b: 1 }, { b: 2 }] };

    expect(get(object, 'a[0].b')).toBe(1);
    expect(get(object, 'a[1].b')).toBe(2);
  });

  it('retrieves nested values using an array path', () => {
    const object = { a: [{ b: { c: 3 } }] };

    expect(get(object, ['a', 0, 'b', 'c'])).toBe(3);
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  it('retrieves properties with numeric keys', () => {
    const object = { 0: { 1: 'foo' } };

    expect(get(object, '0.1')).toBe('foo');
    expect(get(object, [0, 1])).toBe('foo');
  });

  it('retrieves values from an array', () => {
    const array = ['a', 'b', 'c'];

    expect(get(array, '0')).toBe('a');
    expect(get(array, [1])).toBe('b');
    expect(get(array, 'length')).toBe(3);
  });

  it('supports property names containing dots or brackets in array paths', () => {
    const object = {
      'a.b': 10,
      'settings[theme]': { color: 'blue' },
      a: { b: 20 }
    };

    expect(get(object, 'a.b')).toBe(20);
    expect(get(object, ['a.b'])).toBe(10);
    expect(get(object, ['settings[theme]', 'color'])).toBe('blue');
  });

  it('supports symbol property keys in array paths', () => {
    const key = Symbol('id');
    const object = { user: { [key]: 123 } };

    expect(get(object, ['user', key])).toBe(123);
  });

  it('returns undefined when a property does not exist', () => {
    const object = { a: { b: 1 } };

    expect(get(object, 'a.c')).toBeUndefined();
    expect(get(object, 'a.c.d')).toBeUndefined();
    expect(get(object, ['a', 'c'])).toBeUndefined();
  });

  it('returns the default value when a property does not exist', () => {
    const object = { a: { b: 1 } };

    expect(get(object, 'a.c', 'DEFAULT')).toBe('DEFAULT');
    expect(get(object, 'a.c.d', 'DEFAULT')).toBe('DEFAULT');
    expect(get(object, ['a', 'c'], 'DEFAULT')).toBe('DEFAULT');
  });

  it('returns the default value when the resolved value is undefined', () => {
    const object = { a: { b: undefined } };

    expect(get(object, 'a.b', 'DEFAULT')).toBe('DEFAULT');
    expect(get(object, ['a', 'b'], 'DEFAULT')).toBe('DEFAULT');
  });

  it('preserves null values instead of returning the default', () => {
    const object = { a: { b: null } };

    expect(get(object, 'a.b', 'DEFAULT')).toBeNull();
    expect(get(object, ['a', 'b'], 'DEFAULT')).toBeNull();
  });

  it('returns the default value when traversing a nullish property', () => {
    const object = {
      a: { b: null },
      c: { d: undefined }
    };

    expect(get(object, 'a.b.c', 'DEFAULT')).toBe('DEFAULT');
    expect(get(object, ['a', 'b', 'c'], 'DEFAULT')).toBe('DEFAULT');
    expect(get(object, 'c.d.e', 'DEFAULT')).toBe('DEFAULT');
  });

  it('handles nullish root values', () => {
    expect(get(null, 'a.b')).toBeUndefined();
    expect(get(undefined, 'a.b', 'DEFAULT')).toBe('DEFAULT');
    expect(get(null, ['a', 'b'], 'DEFAULT')).toBe('DEFAULT');
  });

  it('supports property access on primitive values', () => {
    expect(get('hello', 'length')).toBe(5);
    expect(get('hello', [1])).toBe('e');
    expect(get(12345, 'a.b', 'DEFAULT')).toBe('DEFAULT');
  });

  it('supports inherited properties', () => {
    const prototype = { name: 'John' };
    const object = Object.create(prototype);

    expect(get(object, 'name')).toBe('John');
  });

  it('preserves object references', () => {
    const user = { name: 'John' };
    const object = { user };

    expect(get(object, 'user')).toBe(user);
  });

  it('handles circular references', () => {
    const object = { name: 'John' };
    object.self = object;

    expect(get(object, 'self', 'DEFAULT')).toBe(object);
    expect(get(object, 'self.name')).toBe('John');
  });

  it('returns the default value for an empty path', () => {
    const object = { a: 1 };

    expect(get(object, '', 'DEFAULT')).toBe('DEFAULT');
    expect(get(object, [], 'DEFAULT')).toBe('DEFAULT');
    expect(get(object, '')).toBeUndefined();
  });

  it('throws a TypeError when the path is not a string or array', () => {
    for (const path of [undefined, null, 0, 1, true, {}, Symbol('key')]) {
      expect(() => get({}, path)).toThrow(new TypeError('Expected a string or array for second argument'));
    }
  });
});
