##endsWith
> Returns true if string ends with substring (suffix).

####Syntax
```js
endsWith(str, suffix)
```

- ```js
str
```
The original string.

- ```js
suffix
```
The substring (suffix) we want to check against.

####Example
```js
var str = 'Lorem ipsum dolor sit amet';

endsWith(str, 'amet'); // true
endsWith(str, 'Lorem'); //false
```