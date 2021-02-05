<a name="ary"></a>

## ary(func, n) ⇒ <code>function</code>
Creates a function that accepts up to `n` arguments, ignoring any additional arguments.

**Returns**: <code>function</code> - Returns the new capped function.  
**Throws**:

- <code>TypeError</code> Throws if `func` is not function.
- <code>TypeError</code> Throws if `n` is not number.


| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to cap arguments for. |
| n | <code>Number</code> | The arity cap. |

**Example**
```js
var array = ['1', '2', '3'];

var toInteger = ary(parseInt, 1);

array.map(toInteger); // -> [1, 2, 3]
```
