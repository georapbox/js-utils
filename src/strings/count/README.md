### [Strings](../) > count

```js
count(str, subStr [, caseInsensitive])
```

> Counts the occurrences of substring in a string.


- <code>str {string}</code>

The initial string.

- <code>subStr {string}</code>

The string we want to count its occurences in the initial string.

- <code>[caseInsensitive] {boolean}</code>

If true, the lookup is case insensitive. Default is undefined (falsey).

#### Example
```js
var str = 'Lorem ipsum dolor sit | amet, consectetur - adipisicing elit. Aperiam inventore neque doloremque dolor ibus impedit ipsam, incidunt. Doloremque eveniet sit, illo, et incidunt, maiores sequi accusantium impedit aperiam officiis aspernatur nobis.';

count(str, 'dolor')); // 3
count(str, 'dolor', true)); // 4 (case insensitive lookup)
count(str, '|')); // 1
count(str, ',')); // 5
```
