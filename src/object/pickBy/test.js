import { describe, expect, it, vi } from 'vitest';
import { pickBy } from './pickBy.js';

describe('Object/pickBy', () => {
  it('picks properties whose values satisfy the predicate', () => {
    const object = { a: 1, b: '2', c: 3 };

    expect(pickBy(object, (value) => typeof value === 'number')).toStrictEqual({
      a: 1,
      c: 3
    });
  });

  it('passes the value and key to the predicate', () => {
    const object = { a: 1, b: 2, c: 3 };

    expect(pickBy(object, (_, key) => key !== 'b')).toStrictEqual({
      a: 1,
      c: 3
    });
  });

  it('uses the truthiness of the predicate result', () => {
    const object = { a: 0, b: false, c: 3, d: 'hello' };

    expect(pickBy(object, (value) => value)).toStrictEqual({
      c: 3,
      d: 'hello'
    });
  });

  it('returns an empty object when no properties match', () => {
    const object = { a: 1, b: 2 };

    expect(pickBy(object, (value) => typeof value === 'function')).toStrictEqual({});
  });

  it('ignores inherited properties', () => {
    const prototype = { inherited: 10 };
    const object = Object.assign(Object.create(prototype), {
      a: 1,
      b: '2',
      c: 3
    });

    expect(pickBy(object, (value) => typeof value === 'number')).toStrictEqual({
      a: 1,
      c: 3
    });
  });

  it('ignores non-enumerable properties', () => {
    const object = { a: 1 };

    Object.defineProperty(object, 'hidden', {
      value: 42,
      enumerable: false
    });

    expect(pickBy(object, () => true)).toStrictEqual({ a: 1 });
  });

  it('supports symbol property keys', () => {
    const key = Symbol('id');
    const other = Symbol('other');

    const object = {
      [key]: 123,
      [other]: 'hello',
      name: 'John'
    };

    expect(pickBy(object, (value) => typeof value === 'number')).toStrictEqual({
      [key]: 123
    });

    expect(pickBy(object, (_, propertyKey) => propertyKey === other)).toStrictEqual({
      [other]: 'hello'
    });
  });

  it('supports arrays as source objects', () => {
    const array = [1, '2', 3];

    expect(pickBy(array, (value) => typeof value === 'number')).toStrictEqual({
      0: 1,
      2: 3
    });
  });

  it('supports class instances', () => {
    class User {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    }

    const user = new User('John', 30);

    expect(pickBy(user, (value) => typeof value === 'number')).toStrictEqual({
      age: 30
    });
  });

  it('creates a shallow copy of matching properties', () => {
    const settings = { theme: 'dark' };
    const object = { name: 'John', settings };

    const result = pickBy(object, (value) => typeof value === 'object');

    expect(result).toStrictEqual({ settings });
    expect(result.settings).toBe(settings);
  });

  it('returns a new object without modifying the original', () => {
    const object = { a: 1, b: '2', c: 3 };

    const result = pickBy(object, (value) => typeof value === 'number');

    expect(result).toStrictEqual({ a: 1, c: 3 });
    expect(result).not.toBe(object);
    expect(object).toStrictEqual({ a: 1, b: '2', c: 3 });
  });

  it('handles empty source objects', () => {
    expect(pickBy({}, () => true)).toStrictEqual({});
  });

  it('handles special property names', () => {
    const object = JSON.parse('{"__proto__": 1, "constructor": 2, "name": "John"}');

    const result = pickBy(object, (value) => typeof value === 'number');

    expect(Object.hasOwn(result, '__proto__')).toBe(true);
    expect(result['__proto__']).toBe(1);
    expect(result.constructor).toBe(2);
    expect(Object.hasOwn(result, 'name')).toBe(false);
  });

  it('reads each property value only once', () => {
    const getter = vi.fn(() => 42);
    const object = {};

    Object.defineProperty(object, 'value', {
      get: getter,
      enumerable: true
    });

    expect(pickBy(object, (value) => value > 10)).toStrictEqual({
      value: 42
    });

    expect(getter).toHaveBeenCalledOnce();
  });

  it('throws a TypeError when the first argument is not an object', () => {
    for (const value of [undefined, null, NaN, 42, 'hello', true, Symbol('key')]) {
      expect(() => pickBy(value, () => true)).toThrow(new TypeError('Expected an object for first argument'));
    }
  });

  it('throws a TypeError when the predicate is not a function', () => {
    for (const predicate of [undefined, null, 42, 'test', true, {}]) {
      expect(() => pickBy({ a: 1 }, predicate)).toThrow(new TypeError('Expected a function for second argument'));
    }
  });
});
