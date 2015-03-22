###[Arrays](../) > compact

```js
compact(array)
```

>Creates an array with all falsey values removed.
>'false', 'null', '0', '""', 'undefined', and 'NaN' are falsey.

- <code>array {array}</code>

The array to compact.

####Example
```js
compact([0, 1, false, 2, '', 3, null]); // [1, 2, 3]
```