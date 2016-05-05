### [Strings](../) > padRight

```js
pad(subjectString, len [, chars=' '])
```

Pad `subjectString` on **right** side to the given `len`, with optional `chars` defaulting to a space.

#### Arguments

- `subjectString` _(string)_: The string to process.

- `len` _(number)_: The length of the padding.

- `[chars=' ']` _(string)_: Optional. Defaults to space. The character(s) to use for padding.

#### Examples
```js
padRight('Hello', 10);
// -> "Hello     "

padRight('Hello', 5, '-');
// -> "Hello-----"
```
