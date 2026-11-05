import { describe, expect, it } from 'vitest';
import { compose } from './compose.js';

describe('Function/compose', () => {
  const capitalize = (value) => value.toUpperCase();
  const head = (value) => value[0];
  const reverse = (value) => value.split('').reverse().join('');
  const inc = (value) => value + 1;
  const double = (value) => value * 2;

  it('performs right-to-left function composition', () => {
    expect(compose(inc, double)(3)).toBe(7);
    expect(compose(double, inc)(3)).toBe(8);
  });

  it('composes multiple functions in the correct order', () => {
    expect(compose(capitalize, reverse)('hello')).toBe('OLLEH');
    expect(compose(capitalize, head, reverse)('hello')).toBe('O');
    expect(compose(capitalize, reverse, head)('hello')).toBe('H');
  });

  it('forwards all arguments to the rightmost function', () => {
    const greeting = (firstName, lastName) => `Hello, my name is ${firstName} ${lastName}.`;
    const shoutGreeting = compose(capitalize, greeting);

    expect(shoutGreeting('John', 'Doe')).toBe('HELLO, MY NAME IS JOHN DOE.');
  });

  it('passes a single argument to each remaining function', () => {
    const collect = (...args) => args;
    const callback = compose(collect, collect, (...args) => args.length);

    expect(callback(1, 2, 3)).toStrictEqual([[3]]);
  });

  it('returns an identity function when no functions are provided', () => {
    const identity = compose();

    expect(identity()).toBeUndefined();
    expect(identity(1)).toBe(1);
    expect(identity(1, 2, 3)).toBe(1);
  });

  it('returns the original function when only one function is provided', () => {
    expect(compose(capitalize)).toBe(capitalize);
    expect(compose(capitalize)('hello')).toBe('HELLO');
  });

  it('supports nested composition', () => {
    const reverseAndHead = compose(head, reverse);
    const reverseHeadAndCapitalize = compose(capitalize, reverseAndHead);

    expect(reverseHeadAndCapitalize('hello')).toBe('O');
  });

  it('preserves the this binding for all composed functions', () => {
    const object = {
      multiplier: 2,
      offset: 10,
      callback: compose(
        function (value) {
          return value + this.offset;
        },
        function (value) {
          return value * this.multiplier;
        }
      )
    };

    expect(object.callback(5)).toBe(20);
  });

  it('returns the result of the leftmost function', () => {
    const callback = compose((value) => ({ result: value }), double, inc);

    expect(callback(3)).toStrictEqual({ result: 8 });
  });

  it('throws a TypeError when any argument is not a function', () => {
    for (const value of [undefined, null, 67, 'hello', true, {}]) {
      expect(() => compose(value)).toThrow(new TypeError('Expected all arguments to be functions'));
      expect(() => compose(inc, value, double)).toThrow(new TypeError('Expected all arguments to be functions'));
    }
  });
});
