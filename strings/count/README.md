##count
>Counts the occurrences of substring in a string.

####Syntax
```js
count(str, subStr [, caseInsensitive])
```

- ```js
str
```
The initial string.

- ```js
subStr
```
The string we want to count its occurences in the initial string.

- ```js
caseInsensitive (Optional)
```
If true, the lookup is case insensitive. Default is undefined (falsey).

####Example
```js
var str = 'Lorem ipsum dolor sit | amet, consectetur - adipisicing elit. Aperiam inventore neque doloremque dolor ibus impedit ipsam, incidunt. Doloremque eveniet sit, illo, et incidunt, maiores sequi accusantium impedit aperiam officiis aspernatur nobis.';

count(str, 'dolor')); // 3
count(str, 'dolor', true)); // 4 (case insensitive lookup)
count(str, '|')); // 1
count(str, ',')); // 5
```