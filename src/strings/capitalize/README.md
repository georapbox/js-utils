##capitalize
>Capitalizes the first character of a string.

####Syntax
```js
capitalize(str [, lowerCaseRest])
```

- <code>string</code>

The string to capitalize its first character.

- <code>lowerCaseRest (Optional)</code>

Boolean that indicates if the rest of the string will be converted to lower case. Default is undefined (falsey).

####Example
```js
capitalize('hello'); // 'Hello'
capitalize('hElLo'); // 'HElLo'
capitalize('hElLo', true); // 'Hello'
```