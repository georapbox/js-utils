var pipe = require('./pipe.js');

describe('Function/pipe', function () {
  function capitalize(a) {
    return a.toUpperCase();
  }

  function head(a) {
    return a[0];
  }

  function reverse(a) {
    return a.split('').reverse().join('');
  }

  function inc(x) {
    return x + 1;
  }

  function double (x) {
    return x * 2;
  }

  it('should perform left-to-right function composition', function () {
    expect(pipe()(1)).toBe(1);

    expect(pipe()(1, 2, 3)).toBe(1);

    expect(pipe(capitalize, reverse)('hello')).toBe('OLLEH');

    expect(pipe(capitalize, head, reverse)('hello')).toBe('H');

    expect(pipe(capitalize, reverse, head)('hello')).toBe('O');

    expect(pipe(capitalize)('hello')).toBe('HELLO');

    expect(pipe(inc, double)(3)).toBe(8);

    expect(pipe(double, inc)(3)).toBe(7);

    var reverseAndHead = pipe(reverse, head);
    var reverseHeadAndCapitalize = pipe(capitalize, reverseAndHead);
    expect(reverseHeadAndCapitalize('hello')).toBe('O');

    var greeting = function (firstName, lastName) {
      return 'Hello, my name is ' + firstName + ' ' + lastName + '.';
    };
    var shoutGreeting = pipe(greeting, capitalize);
    expect(shoutGreeting('John', 'Doe')).toBe('HELLO, MY NAME IS JOHN DOE.');
    expect(pipe(shoutGreeting('John', 'Doe'))).toBe('HELLO, MY NAME IS JOHN DOE.');
  });
});