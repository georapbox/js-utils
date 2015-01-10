##strip
>Returns a new string with all occurrences of [string1], [string2], ... removed.

####Syntax
```js
strip(str, [string1], [string2], ...)
```

- ```js
str
```
The initial string.

- ```js
[string1], [string2], ...
```
The substrings to remove from the original string.

####Example
```js
var str = 'Lorem_ipsum_dolor_sit_amet. Lorem+ipsum+dolor+sit+amet. 123456789';

strip(str, '_'); // 'Loremipsumdolorsitamet. Lorem+ipsum+dolor+sit+amet. 123456789'
strip(str, '+'); // 'Lorem_ipsum_dolor_sit_amet. Loremipsumdolorsitamet. 123456789'
strip(str, '123'); // 'Lorem_ipsum_dolor_sit_amet. Lorem+ipsum+dolor+sit+amet. 456789'
strip(str, 'Lorem'); // '_ipsum_dolor_sit_amet. +ipsum+dolor+sit+amet. 123456789'
```