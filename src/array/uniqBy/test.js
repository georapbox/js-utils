import { describe, expect, it } from 'vitest';
import { uniqBy } from './uniqBy.js';

describe('Array/uniqBy', () => {
  it('Keeps the first occurrence of each unique key', () => {
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'George' },
      { id: 1, name: 'Helen' },
      { id: 3, name: 'Helen' }
    ];

    expect(uniqBy(users, (user) => user.id)).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'George' },
      { id: 3, name: 'Helen' }
    ]);

    expect(uniqBy(users, (user) => user.name)).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'George' },
      { id: 1, name: 'Helen' }
    ]);
  });

  it('Supports computed keys', () => {
    const values = [{ v: 1.6 }, { v: 2.1 }, { v: 1.1 }];

    expect(uniqBy(values, (item) => Math.floor(item.v))).toEqual([{ v: 1.6 }, { v: 2.1 }]);
  });

  it('Supports keys derived from multiple properties', () => {
    const values = [
      { x: '0', y: '1', z: '2' },
      { x: '1', y: '0', z: '2' },
      { x: '0', y: '1', z: '2' },
      { x: '2', y: '1', z: '0' }
    ];

    expect(uniqBy(values, (item) => `${item.x}:${item.y}:${item.z}`)).toEqual([
      { x: '0', y: '1', z: '2' },
      { x: '1', y: '0', z: '2' },
      { x: '2', y: '1', z: '0' }
    ]);
  });

  it('Handles NaN and falsy keys', () => {
    const values = [
      { key: NaN, value: 'first NaN' },
      { key: 0, value: 'first zero' },
      { key: NaN, value: 'second NaN' },
      { key: -0, value: 'second zero' },
      { key: false, value: 'first false' },
      { key: false, value: 'second false' },
      { key: null, value: 'first null' },
      { key: null, value: 'second null' }
    ];

    expect(uniqBy(values, (item) => item.key)).toEqual([values[0], values[1], values[4], values[6]]);
  });

  it('Returns an empty array when given an empty array', () => {
    expect(uniqBy([], (item) => item)).toEqual([]);
  });

  it('Throws if the first argument is not an array', () => {
    const iteratee = (item) => item;

    expect(() => uniqBy({}, iteratee)).toThrow(new TypeError('Expected an array for first argument'));
    expect(() => uniqBy(null, iteratee)).toThrow(new TypeError('Expected an array for first argument'));
    expect(() => uniqBy(undefined, iteratee)).toThrow(new TypeError('Expected an array for first argument'));
  });

  it('Throws if the second argument is not a function', () => {
    expect(() => uniqBy([], 'id')).toThrow(new TypeError('Expected a function for second argument'));
    expect(() => uniqBy([], null)).toThrow(new TypeError('Expected a function for second argument'));
    expect(() => uniqBy([], undefined)).toThrow(new TypeError('Expected a function for second argument'));
  });
});
