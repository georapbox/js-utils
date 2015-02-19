##min
>Returns the smallest of zero or more numbers.

####Syntax
```js
min([value1 [, value2, ...]]);
```

- <code>value1, value2, ...</code>

Numbers

**or**

```js
min(numArray);
```

- <code>numArray</code>

An array of numbers.

####Example
```js
min(); // => Infinity
min(5); // => 5
min([1, -10, 1024, 1024.5, 29]); // => -10
min(5, 10, 154, 4, 8, 87); // => 4
min(NaN, 10); // => NaN
min('', '1'); // => 0
min(0, true); // => 0
min(false); // => 0
min(true); // => 1
```