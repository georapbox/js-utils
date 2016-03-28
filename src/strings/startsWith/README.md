### [Strings](../) > startsWith

```js
startsWith(str, prefix)
```

> Returns true if string begins with substring (prefix).

- `str {String}`

The original string

- `prefix {String}`

The substring (prefix) we want to check against.

- `[position=0] {Number}`

The position in the original string at which to begin searching for `prefix`.

#### Example
```js
var str = 'Lorem ipsum dolor sit amet';

startsWith(str, 'Lorem');
// -> true

startsWith(str, 'Lorem', 0);
// -> true

startsWith(str, 'ipsum');
// -> false

startsWith(str, 'orem', 1);
// -> true
```
