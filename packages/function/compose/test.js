var compose = require('./compose.js');

describe('Function/compose', function () {
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

  function double(x) {
    return x * 2;
  }

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

    var reverseAndHead = compose(head, reverse);
    var reverseHeadAndCapitalize = compose(capitalize, reverseAndHead);
    expect(reverseHeadAndCapitalize('hello')).toBe('O');

    var greeting = function (firstName, lastName) {
      return 'Hello, my name is ' + firstName + ' ' + lastName + '.';
    };
    var shoutGreeting = compose(capitalize, greeting);
    expect(shoutGreeting('John', 'Doe')).toBe('HELLO, MY NAME IS JOHN DOE.');
    expect(compose(shoutGreeting('John', 'Doe'))).toBe('HELLO, MY NAME IS JOHN DOE.');
  });
});
