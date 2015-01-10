##uniq
>Removes duplicate primitive values from an array. Returns a new duplicates-free array.

####Syntax
```js
uniq(arr)
```

- <code>arr</code>

The array to iterate over.

####Example
```js
var arr = [
	'a',
	'a',
	'b',
	true,
	'2',
	2,
	false,
	true
];

uniq(arr); // ["a", "b", true, "2", 2, false]
```