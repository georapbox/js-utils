## trim
>Removes whitespace from both ends of a string.

####Syntax
```js
trim(str)
```

- <code>string</code>

The string to be trimmed

####Example
```js
var str = '    Lorem ipsum dolor si amet.    ';
var trimmed = trim(str); // Lorem ipsum dolor si amet.
```

---

## trimLeft
>Removes whitespace from the left end of a string.

####Syntax
```js
trimLeft(str)
```

- <code>string</code>

The string to be trimmed

####Example
```js
var str = '    Lorem ipsum dolor si amet.';
var trimmed = trimLeft(str); // Lorem ipsum dolor si amet.
```

---

## trimRight
>Removes whitespace from the right end of a string.

####Syntax
```js
trimRight(str)
```

- <code>string</code>

The string to be trimmed

####Example
```js
var str = 'Lorem ipsum dolor si amet.    ';
var trimmed = trimLeft(str); // Lorem ipsum dolor si amet.
```