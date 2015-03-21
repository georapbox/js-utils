###[Strings](../) > removePrefix

```js
removePrefix(str, prefix)
```

>Removes substring from start of a string.

- <code>str {string}</code>

The string to process.

- <code>prefix {string}</code>

The substring to remove from the original string.

####Example
```js
removePrefix('foobar', 'foo'); // 'bar'
removePrefix('foobar', 'bar'); // 'foobar'
```