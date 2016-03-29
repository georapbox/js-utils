### [Strings](../) > padRight

```js
pad(subjectString, len [, chars=' '])
```

> Pad `subjectString` on **right** side to the given `len`, with optional `chars` defaulting to a space.

- `subjectString {String}`

The string to process.

- `len {Number}`

The length of the padding.

- `[chars=' '] {String}`

The character(s) to use for padding. Default is space.

#### Example
```js
padRight('Hello', 10); // => "Hello     "
padRight('Hello', 5, '-'); // => "Hello-----"
```
