<a name="unary"></a>

## unary(func) ⇒ <code>function</code>
Creates a function that accepts up to one argument, ignoring any additional arguments.

**Returns**: <code>function</code> - Returns the new capped function.  
**Throws**:

- <code>TypeError</code> Throws if `func` is not function.


| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to cap arguments for. |

**Example**  
```js
var array = ['1', '2', '3'];

var toInteger = unary(parseInt);

array.map(toInteger); // -> [1, 2, 3]
```
