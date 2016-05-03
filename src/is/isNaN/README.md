### [is](../) > isNaN

```js
isNaN(value)
```

Checks if `value` is `NaN` or not.

***NOTE:*** `NaN` is of type "number" and it is also the only primitive value which does not equal itself.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is `NaN`, else returns `false`.

#### Examples
```js
isNaN(5);
// -> false

isNaN('hello world');
// -> false

isNaN(undefined);
// -> false

isNaN(null);
// -> false

isNaN({});
// -> false

isNaN(NaN);
// -> true

var a, b = a + 5;
isNaN(b);
// -> true (undefined + 5 = NaN)

var a = null, b = a + 5;
isNaN(b);
// -> false (null + 5 = 5)
```
