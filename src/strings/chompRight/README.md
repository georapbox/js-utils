### [Strings](../) > chompRight

```js
chompRight(str [, suffix])
```

> Removes a suffix from the end of a string.
> If the suffix is not at the end of the string, or is ```undefined``` or ```null```, returns the initial string.

- <code>str {string}</code>

The string to be processed.

- <code>[suffix] {string}</code>

The suffix string to be removed from the end of a string.

#### Example
```js
chompRight('Hello world!', 'world!') // => 'Hello '
chompRight('Hello world!', 'Hello') // => 'Hello world!'
chompRight('Hello world!') // => 'Hello world!'
```