### [Misc](../) > cookie

```js
cookie.create(name, value [, expiresOn=''] [, path='/'])
```

> Creates a new cookie.

- `name {String}`

The name of the cookie to create.

- `value {String}`

The value of the cookie to create.

- `[expiresOn=''] {String}`

Optional. Denotes when the cookie expires.<br/>
If is of type `number`, denotes the number of days the cookie is active.<br/>
If is set to 0 cookie's expiration is set to Session.<br/>
If is of type `string` the provided string must be of UTC/GMT format
eg. "Mon, 25 Apr 2016 02:47:11 UTC", else expirations is set to Session.

- `[path='/'] {String}`

Optional. The directory where the cookie is active.

#### Example
```js
// Create a cookie with name "my-cookie1" and value "test1" that expires 3 days from now.
cookie.create('my-cookie1', 'test1', 3);

// Create a cookie with name "my-cookie2" and value "test2" that expires with session.
cookie.create('my-cookie2', 'test2');

// Create a cookie with name "my-cookie3" and value "test3" that expires with session.
cookie.create('my-cookie3', 'test3', 0);

// Create a cookie with name "my-cookie4" and value "test4" that expires on "Mon, 25 Apr 2016 02:47:11 UTC".
cookie.create('my-cookie4', 'test4', 'Mon, 25 Apr 2016 02:47:11 UTC');

// Create a cookie with name "my-cookie5" and value "test5" that expires 2 days from now and the path is "/my-page".
cookie.create('my-cookie5', 'test5', 2, '/my-page');

// Create a cookie with name "my-cookie6" and value "test6" that expires on "Mon, 20 Jun 2016 00:30:20 UTC" and the path is "/my-page".
cookie.create('my-cookie6', 'test6', new Date(2016, 5, 20, 3, 30, 20, 20).toUTCString(), '/my-page');
```

---

```js
cookie.read([name])
```
> Reads a cookie by its name.

- `[name] {String}`

The name of the cookie to read.<br/>
If not provided or is not of type `string` the whole cookie string is returned.

#### Example
```js
/* From the example above and supposing we are on root directory. */

cookie.read('my-cookie1');
// -> "test1"

cookie.read('my-cookie2');
// -> "test2"

cookie.read('my-cookie5');
// -> null

cookie.read('non-existent-cookie');
// -> null

cookie.read();
// -> "my-cookie1=test1; my-cookie2=test2; my-cookie3=test3; my-cookie4=test4"
```

---

```js
cookie.remove(name)
```

> Deletes a cookie by its name.

- `name {String}`

The name of the cookie to delete.

#### Example
```js
/* From the examples above and supposing we are on root directory. */

cookie.remove('my-cookie1');

cookie.read();
// -> "my-cookie2=test2; my-cookie3=test3; my-cookie4=test4"
```
