##removePrefix
>Removes substring from start of a string.

####Syntax
```js
removePrefix(str, prefix)
```

- <code>str</code>

The initial string.

- <code>prefix</code>

The substring to remove from the original string.

####Example
```js
removePrefix('foobar', 'foo'); // 'bar'
removePrefix('foobar', 'bar'); // 'foobar'
```