###[Strings](../) > beginsWith

```js
beginsWith(str, prefix)
```

>Returns true if string begins with substring (prefix).

- <code>str {string}</code>

The original string

- <code>prefix {string}</code>

The substring (prefix) we want to check against.

####Example
```js
var str = 'Lorem ipsum dolor sit amet';

beginsWith(str, 'Lorem'); // true
beginsWith(str, 'ipsum'); // false
```