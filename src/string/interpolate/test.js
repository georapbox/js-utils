import { describe, expect, it } from 'vitest';
import { interpolate } from './interpolate.js';

describe('String/interpolate', () => {
  const data = {
    person: {
      name: {
        first: 'John',
        last: 'Doe'
      },
      age: 30,
      position: 'Frontend Developer'
    }
  };

  it('replaces simple placeholders', () => {
    expect(interpolate('Hello, {{name}}!', { name: 'John' })).toBe('Hello, John!');
  });

  it('replaces nested object properties', () => {
    expect(interpolate('Hello, {{person.name.first}} {{person.name.last}}!', data)).toBe('Hello, John Doe!');

    expect(interpolate('Position: {{person.position}}', data)).toBe('Position: Frontend Developer');
  });

  it('replaces values from arrays using dot notation', () => {
    const values = {
      users: [{ name: 'John' }, { name: 'Jane' }]
    };

    expect(interpolate('{{users.0.name}} and {{users.1.name}}', values)).toBe('John and Jane');
  });

  it('ignores surrounding whitespace in placeholders', () => {
    expect(interpolate('Hello, {{ person.name.first }}!', data)).toBe('Hello, John!');
  });

  it('replaces multiple occurrences of the same placeholder', () => {
    expect(interpolate('{{name}}, hello {{name}}!', { name: 'John' })).toBe('John, hello John!');
  });

  it('converts number values to strings', () => {
    expect(interpolate('Age: {{person.age}}', data)).toBe('Age: 30');

    expect(
      interpolate('{{zero}}, {{negative}}, {{decimal}}', {
        zero: 0,
        negative: -5,
        decimal: 3.14
      })
    ).toBe('0, -5, 3.14');
  });

  it('replaces placeholders with empty string values', () => {
    expect(interpolate('Hello{{name}}!', { name: '' })).toBe('Hello!');
  });

  it('preserves placeholders for missing properties', () => {
    expect(interpolate('Hello, {{name}}!', {})).toBe('Hello, {{name}}!');

    expect(interpolate('Hello, {{person.nickname}}!', data)).toBe('Hello, {{person.nickname}}!');

    expect(interpolate('{{person.address.city}}', data)).toBe('{{person.address.city}}');
  });

  it('preserves placeholders for unsupported value types', () => {
    const values = {
      active: true,
      missing: null,
      empty: undefined,
      object: {},
      array: [],
      callback: () => 'Hello'
    };

    expect(interpolate('{{active}} {{missing}} {{empty}} {{object}} {{array}} {{callback}}', values)).toBe(
      '{{active}} {{missing}} {{empty}} {{object}} {{array}} {{callback}}'
    );
  });

  it('only resolves own properties', () => {
    const values = Object.create({ inherited: 'Hello' });
    values.name = 'John';

    expect(interpolate('{{name}} {{inherited}} {{toString}}', values)).toBe('John {{inherited}} {{toString}}');
  });

  it('performs substitution in a single pass', () => {
    expect(
      interpolate('{{first}}', {
        first: '{{second}}',
        second: 'John'
      })
    ).toBe('{{second}}');
  });

  it('preserves values containing HTML without escaping them', () => {
    expect(
      interpolate('<p>{{name}}</p>', {
        name: '<strong>John</strong>'
      })
    ).toBe('<p><strong>John</strong></p>');
  });

  it('preserves placeholders with invalid expressions', () => {
    expect(interpolate('{{}} {{person..name}}', data)).toBe('{{}} {{person..name}}');
  });

  it('returns the original string when no placeholders exist', () => {
    expect(interpolate('Hello, world!', data)).toBe('Hello, world!');
  });

  it('returns an empty string for empty input', () => {
    expect(interpolate('', data)).toBe('');
  });

  it('returns the original string when data is missing or not an object', () => {
    for (const value of [undefined, null, 'John', 42, true]) {
      expect(interpolate('Hello, {{name}}!', value)).toBe('Hello, {{name}}!');
    }
  });

  it('throws a TypeError when the first argument is not a string', () => {
    for (const value of [undefined, null, 42, true, {}, []]) {
      expect(() => interpolate(value, data)).toThrow(new TypeError('Expected a string for first argument'));
    }
  });
});
