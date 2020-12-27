var urlSearchParams = require('./urlSearchParams');

describe('String/urlSearchParams', function () {
  it('accesses parameters of a URL search string', function () {
    var search = '?id=1&fname=Foo&lname=Bar';
    var params = urlSearchParams(search);

    expect(params.get()).toHaveLength(3);
    expect(params.get('id')[0]).toEqual('1');
    expect(params.get('fname')[0]).toEqual('Foo');
    expect(params.get('lname')[0]).toEqual('Bar');

    expect(params.keys()).toHaveLength(3);
    expect(params.keys()[0]).toEqual('id');
    expect(params.keys()[1]).toEqual('fname');
    expect(params.keys()[2]).toEqual('lname');

    expect(params.values()).toHaveLength(3);
    expect(params.values()[0]).toEqual('1');
    expect(params.values()[1]).toEqual('Foo');
    expect(params.values()[2]).toEqual('Bar');

    expect(function () {
      return urlSearchParams();
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
