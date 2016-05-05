### [Strings](../) > padLeft

```js
pad(subjectString, len [, ch=' '])
```

Pad `subjectString` on **left** side to the given `len`, with optional `chars` defaulting to a space.

#### Arguments

- `subjectString` _(string)_: The string to process.

- `len` _(number)_: The length of the padding.

- `[chars=' ']` _(string)_: Optional. Defaults to space. The character(s) to use for padding.

#### Returns

_(string)_: Returns the result string.

#### Examples
```js
padLeft('Hello', 10);
// -> "     Hello"

padLeft('Hello', 5, '-');
// -> "-----Hello"
```
