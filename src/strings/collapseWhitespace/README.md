### [Strings](../) > collapseWhitespace

```js
collapseWhitespace(subjectString)
```

Converts all adjacent whitespace characters to a single space.

#### Arguments

- `subjectString` _(string)_: The initial string to process.

#### Returns

_(string)_: Returns the result string.

#### Example
```js
collapseWhitespace('  Lorem   \t ispum dolor sit      \t amet.  ');
// -> 'Lorem ispum dolor sit amet.'
```
