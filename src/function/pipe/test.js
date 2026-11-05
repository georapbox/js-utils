import { describe, expect, it } from 'vitest';
import { pipe } from './pipe.js';

describe('Function/pipe', () => {
  const capitalize = (value) => value.toUpperCase();
  const head = (value) => value[0];
  const reverse = (value) => value.split('').reverse().join('');
  const inc = (value) => value + 1;
  const double = (value) => value * 2;

  it('performs left-to-right function composition', () => {
    expect(pipe(inc, double)(3)).toBe(8);
    expect(pipe(double, inc)(3)).toBe(7);
  });

  it('composes multiple functions in the correct order', () => {
    expect(pipe(capitalize, reverse)('hello')).toBe('OLLEH');
    expect(pipe(capitalize, head, reverse)('hello')).toBe('H');
    expect(pipe(capitalize, reverse, head)('hello')).toBe('O');
  });

  it('forwards all arguments to the leftmost function', () => {
    const greeting = (firstName, lastName) => `Hello, my name is ${firstName} ${lastName}.`;
    const shoutGreeting = pipe(greeting, capitalize);

    expect(shoutGreeting('John', 'Doe')).toBe('HELLO, MY NAME IS JOHN DOE.');
  });

  it('passes a single argument to each remaining function', () => {
    const collect = (...args) => args;
    const callback = pipe((...args) => args.length, collect, collect);

    expect(callback(1, 2, 3)).toStrictEqual([[3]]);
  });

  it('returns an identity function when no functions are provided', () => {
    const identity = pipe();

    expect(identity()).toBeUndefined();
    expect(identity(1)).toBe(1);
    expect(identity(1, 2, 3)).toBe(1);
  });

  it('returns the original function when only one function is provided', () => {
    expect(pipe(capitalize)).toBe(capitalize);
    expect(pipe(capitalize)('hello')).toBe('HELLO');
  });

  it('supports nested composition', () => {
    const reverseAndHead = pipe(reverse, head);
    const reverseHeadAndCapitalize = pipe(capitalize, reverseAndHead);

    expect(reverseHeadAndCapitalize('hello')).toBe('O');
  });

  it('preserves the this binding for all composed functions', () => {
    const object = {
      multiplier: 2,
      offset: 10,
      callback: pipe(
        function (value) {
          return value * this.multiplier;
        },
        function (value) {
          return value + this.offset;
        }
      )
    };

    expect(object.callback(5)).toBe(20);
  });

  it('returns the result of the rightmost function', () => {
    const callback = pipe(inc, double, (value) => ({ result: value }));

    expect(callback(3)).toStrictEqual({ result: 8 });
  });

  it('throws a TypeError when any argument is not a function', () => {
    for (const value of [undefined, null, 67, 'hello', true, {}]) {
      expect(() => pipe(value)).toThrow(new TypeError('Expected all arguments to be functions'));
      expect(() => pipe(inc, value, double)).toThrow(new TypeError('Expected all arguments to be functions'));
    }
  });
});
