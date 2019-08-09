describe('misc/cookie', function () {
  it('should create a new cookie with name "my-cookie" and value "test1", read it and finally remove it', function () {
    cookie.create('my-cookie', 'test1');
    expect(cookie.read('my-cookie')).toEqual('test1');

    cookie.remove('my-cookie');
    expect(cookie.read('my-cookie')).toBeNull();
  });
});
