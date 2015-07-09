### [Strings](../) > chompLeft

```js
chompLeft(str [, prefix])
```

> Removes a prefix from the beginning of a string.
> If the prefix is not at the beginning of the string, or is ```undefined``` or ```null```, returns the initial string.

- <code>str {string}</code>

The string to be processed.

- <code>[prefix] {string}</code>

The prefix string to be removed from the beginning of a string.

#### Example
```js
chompLeft('Hello world!', 'Hell') // => 'o world!'
chompLeft('Hello world!', 'world') // => 'Hello world!'
chompLeft('Hello world!') // => 'Hello world!'
```