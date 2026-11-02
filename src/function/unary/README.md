<a name="unary"></a>

## unary(fn) ⇒ <code>function</code>
Creates a function that accepts up to one argument, ignoring any additional arguments.

**Returns**: <code>function</code> - Returns the new capped function.  
**Throws**:

- <code>TypeError</code> Throws if `fn` is not function.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to cap arguments for. |

**Example**
```js
const array = ['1', '2', '3'];

const toInteger = unary(parseInt);

array.map(toInteger); // => [1, 2, 3]
```
