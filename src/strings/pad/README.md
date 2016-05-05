### [Strings](../) > pad

```js
pad(subjectString, len [, chars=' '])
```

Pad `subjectString` on **both** sides to the given `len`, with optional `chars` defaulting to a space.

#### Arguments

- `subjectString` _(string)_: The string to process.

- `len` _(number)_: The length of the padding.

- `[chars=' ']` _(string)_: Optional. The character(s) to use for padding. Default is space.

#### Returns

_(string)_: Returns the result string.

#### Examples
```js
pad('Hello', 9);
// -> "  Hello  "

pad('Hello', 9, '-');
// -> "--Hello--"

pad('Hello', 6, '-');
// -> "-Hello"

pad('Hello', 5, '-');
// -> "Hello" (len is the same as str.length)
```
