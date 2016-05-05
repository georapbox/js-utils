### [Strings](../) > startsWith

```js
startsWith(subjectString, searchString [, position=0])
```

Determines whether a string begins with the characters of another string, returning true or false as appropriate.

#### Arguments

- `subjectString` _(string)_: The string to process.

- `searchString` _(string)_: The characters to be searched for at the start of the string.

- `[position=0]` _(number)_: The position in the original string at which to begin searching for `prefix`.

#### Returns

_(boolean)_: Returns true if `subjectString` starts with `searchString`, else false.

#### Examples
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
