### [Strings](../) > removePrefix

```js
removePrefix(subjectString [, prefix])
```
Removes substring from start of a string.

#### Arguments

- `subjectString` _(string)_: The string to process.

- `[prefix]` _(string)_: Optional. The substring to remove from the original string.

#### Returns

_(string)_: Returns the result string.

#### Examples
```js
removePrefix('__foo', '__');
// -> 'foo'

removePrefix('__foobar', '??');
// -> 'foobar'

removePrefix('__foobar');
// -> 'foobar'

removePrefix('__foobar', {});
// -> TypeError
```
