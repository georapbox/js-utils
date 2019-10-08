describe('Array/compact', function () {
  var arr = [0, 1, false, 2, '', 3, null];
  var ca = compact(arr);
  var i, l;

  it('compacts array (removes falsy values)', function () {
    for (i = 0, l = ca.length; i < l; i++) {
      expect(ca[i]).toBeTruthy();
    }
  });
});
