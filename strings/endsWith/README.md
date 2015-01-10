##endsWith
> Returns true if string ends with substring (suffix).

####Syntax
```js
endsWith(str, suffix)
```

- <code>str</code>

The original string.

- <code>suffix</code>

The substring (suffix) we want to check against.

####Example
```js
var str = 'Lorem ipsum dolor sit amet';

endsWith(str, 'amet'); // true
endsWith(str, 'Lorem'); //false
```