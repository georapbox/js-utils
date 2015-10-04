### [Numbers](../) > average

```js
average([value1 [, value2, ...]]);
```

> Calculates the average of a set of numbers.

- <code>value1, value2, ... {number}</code>

A set of numbers.

**or**

```js
average(numArray);
```

- <code>numArray {array}</code>

An array of numbers.

#### Example
```js
average(); // => 0
average(7); // => 7
average([7]); // => 7
average(2, 4); // => 3
average([2, 4]); // => 3
average(5, 10, 50, -45, 6, 7); // => 5.5
average([5, 10, 50, -45, 6, 7]); // => 5.5
average(5, 4, null, true, '12', Infinity); // => 4.5 (Ommits any non number value)
```
