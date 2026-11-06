import { describe, expect, it } from 'vitest';
import { classnames } from './classnames.js';

describe('String/classnames', () => {
  it('returns an empty string when no arguments are provided', () => {
    expect(classnames()).toBe('');
  });

  it('joins string arguments with spaces', () => {
    expect(classnames('foo', 'bar', 'baz')).toBe('foo bar baz');
  });

  it('ignores empty strings', () => {
    expect(classnames('', '', '')).toBe('');
    expect(classnames('foo', '', 'bar')).toBe('foo bar');
  });

  it('preserves whitespace and duplicate class names', () => {
    expect(classnames(' foo ', 'bar')).toBe(' foo  bar');
    expect(classnames('foo', 'foo')).toBe('foo foo');
    expect(classnames('  ')).toBe('  ');
  });

  it('includes object keys with truthy values', () => {
    expect(
      classnames({
        foo: true,
        bar: 1,
        baz: 'hello',
        active: [],
        visible: {}
      })
    ).toBe('foo bar baz active visible');
  });

  it('ignores object keys with falsy values', () => {
    expect(
      classnames({
        foo: false,
        bar: 0,
        baz: '',
        qux: null,
        quux: undefined,
        corge: NaN
      })
    ).toBe('');
  });

  it('includes only own enumerable object properties', () => {
    const prototype = { inherited: true };
    const object = Object.create(prototype);

    object.foo = true;
    object.bar = false;

    Object.defineProperty(object, 'hidden', {
      value: true,
      enumerable: false
    });

    expect(classnames(object)).toBe('foo');
  });

  it('supports objects with a null prototype', () => {
    const object = Object.create(null);

    object.foo = true;
    object.bar = false;

    expect(classnames(object)).toBe('foo');
  });

  it('joins class names from arrays', () => {
    expect(classnames(['foo', 'bar', 'baz'])).toBe('foo bar baz');
    expect(classnames('foo', ['bar', 'baz'])).toBe('foo bar baz');
  });

  it('supports nested arrays', () => {
    expect(classnames(['foo', ['bar', ['baz']]])).toBe('foo bar baz');
  });

  it('supports objects inside arrays', () => {
    expect(classnames(['foo', { bar: true, baz: false }, ['qux', { active: true }]])).toBe('foo bar qux active');
  });

  it('ignores falsy and unsupported values inside arrays', () => {
    expect(classnames(['foo', null, undefined, false, 0, 42, ['bar', NaN]])).toBe('foo bar');
  });

  it('ignores empty arrays and objects', () => {
    expect(classnames([], {}, [[]], [{}])).toBe('');
    expect(classnames('foo', [], {}, [[]])).toBe('foo');
  });

  it('combines strings, objects, and arrays in order', () => {
    expect(classnames('a', ['b', { c: true }], { d: false, e: true }, 'f')).toBe('a b c e f');
  });

  it('ignores unsupported argument types', () => {
    expect(
      classnames(
        'foo',
        100,
        false,
        null,
        undefined,
        NaN,
        Symbol('bar'),
        () => 'baz',
        new Map(),
        new Set(),
        new WeakSet()
      )
    ).toBe('foo');
  });

  it('does not modify input arrays or objects', () => {
    const object = { active: true };
    const nested = ['bar', object];
    const array = ['foo', nested];

    expect(classnames(array)).toBe('foo bar active');

    expect(array).toStrictEqual(['foo', ['bar', { active: true }]]);
    expect(nested).toStrictEqual(['bar', { active: true }]);
    expect(object).toStrictEqual({ active: true });
  });

  it('supports conditional class names', () => {
    const isActive = true;
    const isDisabled = false;

    expect(
      classnames(
        'btn',
        isActive && 'active',
        isDisabled && 'disabled',
        { visible: isActive, hidden: isDisabled },
        isActive && ['px-4', 'py-2']
      )
    ).toBe('btn active visible px-4 py-2');
  });
});
