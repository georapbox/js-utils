### [Strings](../) > randomString

```js
randomString(n, chars)
```

> Generates a random string of n characters, from the "chars" string.

- <code>n {number}</code>

The length of the final random  string.

- <code>[chars] {string}</code>

The characters to use in order to generate the string.

Default value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.

#### Example
```js
randomString(10); // => "RvXYUH6Swm"
randomString(10, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'); // => "SFUNKJHYDH"
randomString(10, '0123456789'); // => "2394127333"
randomString(); // => ""
```
