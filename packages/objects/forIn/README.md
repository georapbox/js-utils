<a name="forIn"></a>

## forIn(obj, [callback]) ⇒ <code>Object</code>
Iterates over own and inherited enumerable properties of an object, executing the callback for each property.
The callback is invoked with three arguments (value, key, object)

**Returns**: <code>Object</code> - The original object.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The object to iterate over. |
| [callback] | <code>function</code> | The function called per iteration. |

**Example**  
```js
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
};

forIn(new Shape(), function (value, key, obj) {
  console.log(key);
  // -> "x", "y", "move"
});
```
