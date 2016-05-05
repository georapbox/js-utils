### [Strings](../) > lines

```js
lines(subjectString)
```

Returns an array with the lines of a a string.

#### Arguments

- `subjectString` _(string)_: The string to process.

#### Returns

_(array)_: The result array.

#### Examples
```js
var str = 'You can\'t make\nan omelet without\r\nbreaking a few eggs.';
var str2 = `You can\'t make
an omelet without
breaking a few eggs.`;

lines(str);
// -> ['You can't make', 'an omelet without', 'breaking a few eggs.']

lines(str2);
// -> ['You can't make', 'an omelet without', 'breaking a few eggs.']
```
