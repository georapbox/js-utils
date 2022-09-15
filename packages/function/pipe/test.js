const pipe = require('./pipe.js');

describe('pipe', () => {
  const capitalize = a => a.toUpperCase();
  const head = a => a[0];
  const reverse = a => a.split('').reverse().join('');
  const inc = x => x + 1;
  const double = x => x * 2;

  it('should perform left-to-right function composition', () => {
    expect(pipe()(1)).toBe(1);

    expect(pipe()(1, 2, 3)).toBe(1);

    expect(pipe(capitalize, reverse)('hello')).toBe('OLLEH');

    expect(pipe(capitalize, head, reverse)('hello')).toBe('H');

    expect(pipe(capitalize, reverse, head)('hello')).toBe('O');

    expect(pipe(capitalize)('hello')).toBe('HELLO');

    expect(pipe(inc, double)(3)).toBe(8);

    expect(pipe(double, inc)(3)).toBe(7);

    const reverseAndHead = pipe(reverse, head);
    const reverseHeadAndCapitalize = pipe(capitalize, reverseAndHead);
    expect(reverseHeadAndCapitalize('hello')).toBe('O');

    const greeting = (firstName, lastName) => `Hello, my name is ${firstName} ${lastName}.`;
    const shoutGreeting = pipe(greeting, capitalize);
    expect(shoutGreeting('John', 'Doe')).toBe('HELLO, MY NAME IS JOHN DOE.');
    expect(pipe(shoutGreeting('John', 'Doe'))).toBe('HELLO, MY NAME IS JOHN DOE.');
  });
});
