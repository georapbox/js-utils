##count
>Counts the occurrences of substring in a string.

####Syntax
```js
count(str, subStr [, caseInsensitive])
```

- <code>str</code>

The initial string.

- <code>subStr</code>

The string we want to count its occurences in the initial string.

- <code>caseInsensitive (Optional)</code>

If true, the lookup is case insensitive. Default is undefined (falsey).

####Example
```js
var str = 'Lorem ipsum dolor sit | amet, consectetur - adipisicing elit. Aperiam inventore neque doloremque dolor ibus impedit ipsam, incidunt. Doloremque eveniet sit, illo, et incidunt, maiores sequi accusantium impedit aperiam officiis aspernatur nobis.';

count(str, 'dolor')); // 3
count(str, 'dolor', true)); // 4 (case insensitive lookup)
count(str, '|')); // 1
count(str, ',')); // 5
```