### [Strings](../) > count

```js
count(subjectString, subString [, caseInsensitive])
```

Counts the occurrences of substring in a string.

#### Arguments

- `subjectString` _(string)_: The initial string.

- `subString` _(string)_: The string we want to count its occurrences in the initial string.

- `[caseInsensitive]` _(boolean)_: Optional. Defaults to undefined (falsy). If true, the lookup is case insensitive.

#### Returns

_(number)_: Returns the number of occurrences of substring in original string.

#### Examples
```js
var str = 'Lorem ipsum dolor sit | amet, consectetur - adipisicing elit. Aperiam inventore neque doloremque dolor ibus impedit ipsam, incidunt. Doloremque eveniet sit, illo, et incidunt, maiores sequi accusantium impedit aperiam officiis aspernatur nobis.';

count(str, 'dolor'));
// -> 3

count(str, 'dolor', true));
// -> 4 (case insensitive lookup)

count(str, '|'));
// -> 1

count(str, ','));
// -> 5

count(str, '');
// -> 245

count(str, {}));
// -> Throws TypeError
```
