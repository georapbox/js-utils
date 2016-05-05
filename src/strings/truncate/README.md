### [Strings](../) > truncate

```js
truncate(subjectString, characterCount [, delimiter])
```

Truncates a string based on character count.

#### Arguments

- `subjectString` _(string)_: The string to truncate.

- `characterCount` _(number)_: The number of characters the truncated string will contain. If ommitted or falsey, the default string is returned.

- `[delimiter]` _(string)_: Optional. Defaults to empty string `''`. The delimiter to add at the end of the truncated string.

#### Returns

_(string)_: Returns the truncated string.

#### Examples
```js
var str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptas tempora nihil commodi laborum sit eum atque iusto temporibus, odit natus odio accusantium id, labore, possimus laboriosam. Eos, ducimus, blanditiis.';

truncate(str, 50, '...');
// -> 'Lorem ipsum dolor sit amet, consectetur adipisicin...'

truncate(str, 30, '---');
// -> 'Lorem ipsum dolor sit amet, co---'

truncate(str, 30);
// -> 'Lorem ipsum dolor sit amet, co'

truncate(str, 0);
// -> ''

truncate(str, 0, '...');
// -> '...'

truncate(str, 3.7);
// -> 'Lor'

truncate(str, -1);
// -> Returns the original string

truncate(str, NaN);
// -> Returns the original string

truncate({item: str}, 10);
// Throws TypeError

truncate(str, '10');
// Throws TypeError
```
