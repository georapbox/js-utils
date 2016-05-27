<a name="flip"></a>

## flip(func, [thisArg]) ⇒ <code>function</code>
Creates a function that invokes `func` with arguments reversed.

**Kind**: global function  
**Returns**: <code>function</code> - The new function with arguments reversed.
**Category**: Function  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to flip arguments for. |
| [thisArg] | <code>\*</code> | Value to use as <code>this</code> when executing <code>func</code>. |

**Example**  
```js
var argsToArray = function () {
  return Array.prototype.slice.call(arguments, 0);
};

var flipArgsToArray = flip(argsToArray);

flipArgsToArray(1, 2, 3);
// -> [3, 2, 1]

var subtract = function (a, b) {
  return a - b;
};

var flipSubtract = flip(subtract);

flipSubtract(1, 2);
// -> 1
```
