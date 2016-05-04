### [Numbers](../) > max

```js
max([value1 [, value2, ...]]);
```

Find the largest of zero or more numbers.

#### Argumets

- `value1, value2, ...` _(number)_: A set of numbers.

**or**

```js
max(numArray);
```

#### Arguments

- `numArray` _(array)_: An array of numbers.

#### Returns

_(number)_: Returns the largest of zero or more numbers.

#### Example
```js
max();
// -> -Infinity

max(5);
// -> 5

max([1, -10, 1024, 1024.5, 29]);
// -> 1024.5

max(5, 10, 154, 4, 8, 87);
// -> 154

max(NaN, 10);
// -> NaN

max('', '1');
// -> 1

max(0, true);
// -> 1

max(false);
// -> 0
```
