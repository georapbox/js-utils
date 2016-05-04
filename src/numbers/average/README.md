### [Numbers](../) > average

```js
average([value1 [, value2, ...]]);
```

Calculates the average of a set of numbers.

#### Arguments

- `value1, value2, ...` _(number)_: A set of numbers.

**or**

```js
average(numArray);
```

#### Arguments

- `numArray` _(array)_: An array of numbers.

#### Returns

_(number)_: Returns the average of numbers provided.

#### Examples
```js
average();
// -> 0

average(7);
// -> 7

average([7]);
// -> 7

average(2, 4);
// -> 3

average([2, 4]);
// -> 3

average(5, 10, 50, -45, 6, 7);
// -> 5.5

average([5, 10, 50, -45, 6, 7]);
// -> 5.5

average(5, 4, null, true, '12', Infinity);
// -> 4.5 (Omits any non number value)
```
