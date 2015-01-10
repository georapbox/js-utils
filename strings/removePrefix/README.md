##removePrefix
>Removes substring from start of a string.

####Syntax
```js
removePrefix(str, prefix)
```

- ```js
str
```
The initial string.

- ```js
prefix
```
The substring to remove from the original string.

####Example
```js
removePrefix('foobar', 'foo'); // 'bar'
removePrefix('foobar', 'bar'); // 'foobar'
```