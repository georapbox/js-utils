###[Strings](../) > removeSuffix

```js
removeSuffix(subjectString, suffix)
```

Removes substring from end of a string.

#### Arguments

- `subjectString` _(string)_: The string to process.

- `suffix` _(string)_: The substring to remove from the original string.

#### Returns

_(string)_: Returns the result string.

#### Examples
```js
removeSuffix('foobar', 'bar');
// -> 'foo'

removeSuffix('foobar', 'foo');
// -> 'foobar'

removeSuffix('foobar', {});
// -> TypeError
```
