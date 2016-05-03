### [Arrays](../) > compact

```js
compact(array)
```

Creates an array with all falsy values removed.
`false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsy.

#### Arguments

- `array` _(array)_: The array to compact.

#### Returns

_(array)_: Returns the new array of filtered values.

#### Example
```js
compact([0, 1, false, 2, '', 3, null]);
// -> [1, 2, 3]
```
