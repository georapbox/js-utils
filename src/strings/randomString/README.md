### [Strings](../) > randomString

```js
randomString(n, chars)
```

Generates a random string of n characters, from the `chars` string.

#### Arguments

- `n` _(number)_: The length of the final random  string.

- `[chars]` _(string)_: The characters to use in order to generate the string. Defaults to 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.

#### Returns

_(string)_: Returns the random string.

#### Examples
```js
randomString(10);
// -> "RvXYUH6Swm"

randomString(10, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// -> "SFUNKJHYDH"

randomString(10, '0123456789');
// -> "2394127333"

randomString();
// -> ""
```
