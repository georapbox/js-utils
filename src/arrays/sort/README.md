### [Arrays](../) > sort

```js
sort(array [, ascending=true])
```

Sorts an array (not in place) of **primitive values** of the same type.
Any `null`, `undefined` or `NaN` values are removed from the result array.
If array values are of different type, the result is not guaranteed to be correct.

**NOTE:** For legacy browsers' support use `Array.prototype.map` and `Array.prototype.filter` polyfills.

#### Arguments

- `array` _(array)_: The array to sort.

- `[ascending=true]` _(boolean)_: Optional. Default value is `true` (ascending). The sorting order.

#### Returns

_(array)_: A new sorted array.

#### Examples
```js
sort(['Delta', 'Omega', 'alpha', 'CHARLIE', 'lorem', 'bravo']);
// -> ['alpha', 'bravo', 'CHARLIE', 'Delta', 'lorem', 'Omega']

sort(['Delta', 'Omega', 'alpha', 'CHARLIE', 'lorem', 'bravo'], false);
// -> ['Omega', 'lorem', 'Delta', 'CHARLIE', 'bravo', 'alpha']

sort([4, 6, 2, 9, 100, 321, -2, 99], true);
// -> [-2, 2, 4, 6, 9, 99, 100, 321]

sort([4, 6, 2, 9, 100, 321, -2, 99], false);
// -> [321, 100, 99, 9, 6, 4, 2, -2]

sort([4, 6, undefined, 2, 9, -10, 100, 321, -2, null, 99], true);
// -> [-10, -2, 2, 4, 6, 9, 99, 100, 321]

sort([4, 6, undefined, 2, 9, -10, 100, 321, -2, null, 99], false);
// -> [321, 100, 99, 9, 6, 4, 2, -2, -10]
```
