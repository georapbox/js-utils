### [Strings](../) > pad

```js
pad(subjectString, len [, chars=' '])
```

> Pad `subjectString` on **both** sides to the given `len`, with optional `chars` defaulting to a space.

- `subjectString {String}`

The string to process.

- `len {Number}`

The length of the padding.

- `[chars=' '] {String}`

The character(s) to use for padding. Default is space.

#### Example
```js
pad('Hello', 9); // => "  Hello  "
pad('Hello', 9, '-'); // => "--Hello--"
pad('Hello', 6, '-'); // => "-Hello"
pad('Hello', 5, '-'); // => "Hello" (len is the same as str.length)
```
