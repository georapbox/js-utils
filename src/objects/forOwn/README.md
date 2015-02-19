##forOwn
>Iterates over **own** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)

####Syntax
forOwn(object, [callback])

- <code>object</code>

The object to iterate over.

- <code>callback (Optional)</code>

The function called per iteration.

####Example
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
});

// "x", "y"
```