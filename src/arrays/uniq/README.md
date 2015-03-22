###[Arrays](../) > uniq

```js
uniq(arr)
```

>Removes duplicate primitive values from an array. Returns a new duplicates-free array.

- <code>arr {array}</code>

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