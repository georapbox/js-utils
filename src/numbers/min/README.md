### [Numbers](../) > min

```js
min([value1 [, value2, ...]]);
```

Find the smallest of zero or more numbers.

#### Arguments

- `value1, value2, ...` _(number)_: A set of numbers.

**or**

```js
min(numArray);
```

#### Arguments

- `numArray` _(array)_: An array of numbers.

#### Returns

_(number)_: Returns the smallest of zero or more numbers.

#### Examples
```js
min();
// -> Infinity

min(5);
// -> 5

min([1, -10, 1024, 1024.5, 29]);
// -> -10

min(5, 10, 154, 4, 8, 87);
// -> 4

min(NaN, 10);
// -> NaN

min('', '1');
// -> 0

min(0, true);
// -> 0

min(false);
// -> 0

min(true);
// -> 1
```
