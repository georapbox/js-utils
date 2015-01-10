##compact
>Creates an array with all falsey values removed.
>'false', 'null', '0', '""', 'undefined', and 'NaN' are falsey.

####Syntax
```js
compact(array)
```

- ```js
array
```
The array to compact.

####Example
```js
compact([0, 1, false, 2, '', 3, null]); // [1, 2, 3]
```