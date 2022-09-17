const compact = require('./compact');

describe('Array/compact', function () {
  const arr = [0, 1, false, 2, '', 3, null];
  const ca = compact(arr);

  it('compacts array (removes falsy values)', function () {
    for (let i = 0; i < ca.length; i += 1) {
      expect(ca[i]).toBeTruthy();
    }

    expect(function () {
      return compact({}, '2');
    }).toThrow(new TypeError('Expected an array for first argument'));
  });
});
