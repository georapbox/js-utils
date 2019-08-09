describe('Function/partial', function () {
  var greet = function (greeting, name) {
    return greeting + ' ' + name;
  };

  var sayHelloTo = partial(greet, 'Hello');

  it('partially applied arguments are prepended to the arguments', function () {
    expect(sayHelloTo('George')).toEqual('Hello George');
  });
});
