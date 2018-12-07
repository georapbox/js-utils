<a name="forOwn"></a>

## forOwn(obj, [callback]) ⇒ <code>Object</code>

Iterates over own enumerable properties of an object, executing the callback for each property.
The callback is invoked with three arguments (value, key, object)he callback for each property.

**Kind**: global function  
**Returns**: <code>Object</code> - The original object.  
**Category**: Object

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

forOwn(new Shape(), function (value, key, obj) {
  console.log(key);
   // -> "x", "y"
});
```
