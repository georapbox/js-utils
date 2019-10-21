describe('Function/compose', function () {
  function capitalize(item) {
    return item.toUpperCase();
  }

  function head(item) {
    return item[0];
  }

  function reverse(item) {
    return item.split('').reverse().join('');
  }

  it('should compose function to a new one', function () {
    var convert, converted;

    convert = compose(capitalize, reverse);
    converted = convert('hello');
    expect(converted).toEqual('OLLEH');

    convert = compose(capitalize, head, reverse);
    converted = convert('hello');
    expect(converted).toEqual('O');

    convert = compose(capitalize, reverse, head);
    converted = convert('hello');
    expect(converted).toEqual('H');

    convert = compose(capitalize);
    converted = convert('hello');
    expect(converted).toEqual('HELLO');

    convert = compose();
    converted = convert('hello');
    expect(converted).toEqual('hello');
  });
});
