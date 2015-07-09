### [Strings](../) > chompLeft

```js
chompLeft(str [, prefix])
```

> Removes a prefix from the beginning of a string.
> If the prefix is not in the beginning of the string, or is undefined or null, returns the initial string.

- <code>str {string}</code>

The string to be processed.

- <code>[prefix] {string}</code>

The prefix string to be removed from start of a string.

#### Example
```js
chomp('Hello world!', 'Hell') // => 'o world!'
chomp('Hello world!', 'world') // => 'Hello world!'
chomp('Hello world!') // => 'Hello world!'
```