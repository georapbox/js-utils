##beginsWith
>Returns true if string begins with substring (prefix).

####Syntax
```js
beginsWith(str, prefix)
```

- <code>str</code>

The original string

- <code>prefix</code>

The substring (prefix) we want to check against.

####Example
```js
var str = 'Lorem ipsum dolor sit amet';

beginsWith(str, 'Lorem'); // true
beginsWith(str, 'ipsum'); // false
```