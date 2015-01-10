##beginsWith
>Returns true if string begins with substring (prefix).

####Syntax
```js
beginsWith(str, prefix)
```

- ```js
str
```
The original string

- ```js
prefix
```
The substring (prefix) we want to check against.

####Example
```js
var str = 'Lorem ipsum dolor sit amet';

beginsWith(str, 'Lorem'); // true
beginsWith(str, 'ipsum'); // false
```