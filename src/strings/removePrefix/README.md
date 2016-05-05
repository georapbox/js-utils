### [Strings](../) > removePrefix

```js
removePrefix(subjectString, prefix)
```
Removes substring from start of a string.

#### Arguments

- `subjectString` _(string)_: The string to process.

- `prefix` _(string)_: The substring to remove from the original string.

#### Returns

_(string)_: Returns the result string.

#### Examples
```js
removePrefix('foobar', 'foo');
// -> 'bar'

removePrefix('foobar', 'bar');
// -> 'foobar'

removePrefix('foobar', {});
// -> TypeError
```
