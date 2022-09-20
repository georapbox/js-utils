const compose = require('./compose.js');

describe('compose', () => {
  const capitalize = a => a.toUpperCase();
  const head = a => a[0];
  const reverse = a => a.split('').reverse().join('');
  const inc = x => x + 1;
  const double = x => x * 2;

  it('should perform right-to-left function composition', () => {
    expect(compose()()).toBeUndefined();

    expect(compose()(1)).toBe(1);

    expect(compose()(1, 2, 3)).toBe(1);

    expect(compose(capitalize, reverse)('hello')).toBe('OLLEH');

    expect(compose(capitalize, head, reverse)('hello')).toBe('O');

    expect(compose(capitalize, reverse, head)('hello')).toBe('H');

    expect(compose(capitalize)('hello')).toBe('HELLO');

    expect(compose(inc, double)(3)).toBe(7);

    expect(compose(double, inc)(3)).toBe(8);

    const reverseAndHead = compose(head, reverse);
    const reverseHeadAndCapitalize = compose(capitalize, reverseAndHead);
    expect(reverseHeadAndCapitalize('hello')).toBe('O');

    const greeting = (firstName, lastName) => `Hello, my name is ${firstName} ${lastName}.`;
    const shoutGreeting = compose(capitalize, greeting);
    expect(shoutGreeting('John', 'Doe')).toBe('HELLO, MY NAME IS JOHN DOE.');
    expect(compose(shoutGreeting('John', 'Doe'))).toBe('HELLO, MY NAME IS JOHN DOE.');
  });
});
