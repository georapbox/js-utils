### [Objects](../) > forOwn

```js
forOwn(object [, callback])
```

Iterates over **own** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)

#### Arguments

- `object` _(object)_: The object to iterate over.

- `[callback]` _(function)_: The function called per iteration.

#### Example
```js
function Shape() {
	this.x = 0;
	this.y = 0;
}

Shape.prototype.move = function(x, y) {
	this.x += x;
	this.y += y;
};

forOwn(new Shape, function(value, key, obj) {
	console.log(key);
	// -> "x", "y"
});
```
