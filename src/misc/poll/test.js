/* global poll */

describe('misc/poll', function () {
  it('periodically check for status updates and stop if done', function (done) {
    var num = 0;
    poll(function () {
      num += 1;
      if (num === 4) {
        return num;
      }
    }, 100, function (res) {
      expect(res).toEqual(4);
      done();
    });
  });

  it('periodically check for status updates and times out', function (done) {
    var num = 0;
    var timeoutError = false;
    var noop = function () {
      return;
    };

    poll(function () {
      num += 1;
      if (num === 4) {
        return num;
      }
    }, 100, noop, 200, function () {
      timeoutError = true;
      expect(timeoutError).toBe(true);
      done();
    });
  });
});
