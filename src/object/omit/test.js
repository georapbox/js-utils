import { describe, expect, it } from 'vitest';
import { omit } from './omit.js';

describe('Object/omit', () => {
  it('omits the specified properties', () => {
    const object = { a: 'aaa', b: 'bbb', c: 'ccc' };

    expect(omit(object, ['a', 'c'])).toEqual({ b: 'bbb' });
  });

  it('returns an empty object when all properties are omitted', () => {
    expect(omit({ a: 1, b: 2 }, ['a', 'b'])).toEqual({});
  });

  it('returns all properties when none are specified', () => {
    const object = { a: 1, b: 2 };

    expect(omit(object)).toEqual(object);
    expect(omit(object, undefined)).toEqual(object);
    expect(omit(object, [])).toEqual(object);
  });

  it('ignores properties that do not exist', () => {
    expect(omit({ a: 1, b: 2 }, ['missing'])).toEqual({
      a: 1,
      b: 2
    });
  });

  it('handles duplicate property keys', () => {
    expect(omit({ a: 1, b: 2 }, ['a', 'a'])).toEqual({ b: 2 });
  });

  it('supports symbol property keys', () => {
    const key = Symbol('id');
    const other = Symbol('other');

    const object = {
      [key]: 123,
      [other]: 456,
      name: 'John'
    };

    const result = omit(object, [key]);

    expect(result).toEqual({
      [other]: 456,
      name: 'John'
    });
    expect(Object.hasOwn(result, key)).toBe(false);
    expect(result[other]).toBe(456);
  });

  it('does not copy inherited properties', () => {
    const prototype = { inherited: 'value' };
    const object = Object.assign(Object.create(prototype), {
      a: 1,
      b: 2
    });

    const result = omit(object, ['a']);

    expect(result).toEqual({ b: 2 });
    expect(Object.hasOwn(result, 'inherited')).toBe(false);
  });

  it('does not copy non-enumerable properties', () => {
    const object = { a: 1 };

    Object.defineProperty(object, 'hidden', {
      value: 42,
      enumerable: false
    });

    const result = omit(object, []);

    expect(result).toEqual({ a: 1 });
    expect(Object.hasOwn(result, 'hidden')).toBe(false);
  });

  it('only omits top-level properties', () => {
    const object = {
      user: {
        name: 'John',
        age: 30
      },
      active: true
    };

    expect(omit(object, ['user.age'])).toEqual(object);
    expect(omit(object, ['user'])).toEqual({ active: true });
  });

  it('creates a shallow copy of the source object', () => {
    const settings = { theme: 'dark' };
    const object = { name: 'John', settings };

    const result = omit(object, ['name']);

    expect(result).toEqual({ settings });
    expect(result.settings).toBe(settings);
  });

  it('returns a new object without modifying the original', () => {
    const object = { a: 1, b: 2, c: 3 };

    const result = omit(object, ['a', 'c']);

    expect(result).toEqual({ b: 2 });
    expect(result).not.toBe(object);
    expect(object).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('handles empty source objects', () => {
    expect(omit({})).toEqual({});
    expect(omit({}, ['a'])).toEqual({});
  });

  it('throws a TypeError when the first argument is not an object', () => {
    for (const value of [undefined, null, 42, 'hello', true, Symbol('key')]) {
      expect(() => omit(value)).toThrow(new TypeError('Expected an object for first argument'));
    }
  });

  it('throws a TypeError when the second argument is not an array', () => {
    for (const value of [null, 42, 'a', true, {}]) {
      expect(() => omit({ a: 1 }, value)).toThrow(new TypeError('Expected an array for second argument'));
    }
  });
});
