### [Strings](../) > replaceAll

```js
replaceAll(subjectString, subString, replaceString [, caseInsensitive])
```

Creates a new string with all occurrences of `subString` replaced with `replaceString`.

#### Arguments

- `subjectString` _(string)_: The string to process.

- `subString` _(string)_: The substring to replace.

- `replaceString` _(string)_: The substring to replace with.

- `[caseInsensitive]` _(boolean)_: If true, the lookup is case insensitive. Default is undefined (falsy).

#### Returns

_(string)_: Returns the result string.

#### Examples
```js
var str = 'Lorem ispum 5 dolor sit amet.';

replaceAll(str, ' ', '_'));
// -> 'Lorem_ispum_5_dolor_sit_amet'

replaceAll(str, '', '-'));
// -> 'L-o-r-e-m- -i-s-p-u-m- -5- -d-o-l-o-r- -s-i-t- -a-m-e-t-.'

replaceAll(str, '5', '15'));
// -> 'Lorem ispum 15 dolor sit amet.'

replaceAll(str, 'Lorem', '***'));
// -> '*** ispum 5 dolor sit amet.'

replaceAll(str, 'LOREM', '_lorem_', true));
// -> '_lorem_ ispum 5 dolor sit amet.'
```
