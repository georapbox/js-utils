### [Strings](../) > pad

```js
pad(str, len [, ch])
```

> Pad <code>str</code> on **both** sides to the given <code>len</code>, with optional <code>ch</code> defaulting to a space.

- <code>str {string}</code>

The string to process.

- <code>len {number}</code>

The length of the padding.

- <code>[ch] {string|number}</code>

The character(s) to use for padding. Default is space.

#### Example
```js
pad('Hello', 9); // => "  Hello  "
pad('Hello', 9, '-'); // => "--Hello--"
pad('Hello', 6, '-'); // => "-Hello"
pad('Hello', 5, '-'); // => "Hello" (len is the same as str.length)
```

---

### [Strings](../) > padLeft

```js
pad(str, len [, ch])
```

> Pad <code>str</code> on **left** side to the given <code>len</code>, with optional <code>ch</code> defaulting to a space.

- <code>str {string}</code>

The string to process.

- <code>len {number}</code>

The length of the padding.

- <code>[ch] {string|number}</code>

The character(s) to use for padding. Default is space.

#### Example
```js
padLeft('Hello', 10); // => "     Hello"
padLeft('Hello', 5, '-'); // => "-----Hello"
```

---

### [Strings](../) > padRight

```js
pad(str, len [, ch])
```

> Pad <code>str</code> on **right** side to the given <code>len</code>, with optional <code>ch</code> defaulting to a space.

- <code>str {string}</code>

The string to process.

- <code>len {number}</code>

The length of the padding.

- <code>[ch] {string|number}</code>

The character(s) to use for padding. Default is space.

#### Example
```js
padRight('Hello', 10); // => "Hello     "
padRight('Hello', 5, '-'); // => "Hello-----"
```
