var cookie = require('./cookie');

describe('misc/cookie', function () {
  it('should create, read and delete cookies', function () {
    cookie.set('my-cookie', 'test1');

    expect(cookie.get('my-cookie')).toBe('test1');

    cookie.delete('my-cookie');

    expect(cookie.get('my-cookie')).toBe('');
  });
});
