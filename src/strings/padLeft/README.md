### [Strings](../) > padLeft

```js
pad(subjectString, len [, ch=' '])
```

> Pad `subjectString` on **left** side to the given `len`, with optional `chars` defaulting to a space.

- `subjectString {String}`

The string to process.

- `len {Number}`

The length of the padding.

- `[chars=' '] {String}`

The character(s) to use for padding. Default is space.

#### Example
```js
padLeft('Hello', 10); // => "     Hello"
padLeft('Hello', 5, '-'); // => "-----Hello"
```
