### [Strings](../) > startsWith

```js
startsWith(subjectString, searchString, [position=0])
```

> Determines whether a string begins with the characters of another string, returning true or false as appropriate.

- `subjectString {String}`

The string to process.

- `searchString {String}`

The characters to be searched for at the start of the string.

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
