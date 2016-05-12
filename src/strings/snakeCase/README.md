### [Strings](../) > snakeCase

```js
snakeCase(subjectString)
```

Converts string into string delimited by underscores.

#### Arguments

- `subjectString` _(string)_: The string to process.

#### Returns

_(string)_: Returns the result string.

#### Examples
```js
snakeCase('Foo Bar');
// -> 'foo_bar'

snakeCase('fooBar');
// -> 'foo_bar'

snakeCase('--FOO-BAR--');
// -> 'foo_bar'

snakeCase('__FOO_BAR__');
// -> 'foo_bar'

snakeCase('foo_bar');
// -> 'foo_bar'

snakeCase('foo bar');
// -> 'foo_bar'

snakeCase('foo???bar');
// -> 'foo_bar'

snakeCase('foo!@#$%^&*()bar');
// -> 'foo_bar'

snakeCase('-f-o-o-b-a-r-');
// -> f-o-o-b-a-r

snakeCase(' f o o b a r ');
// -> f-o-o-b-a-r
```
