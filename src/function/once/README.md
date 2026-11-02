<a name="once"></a>

## once(fn) ⇒ <code>function</code>
Ensure a given functionality only runs once.

**Returns**: <code>function</code> - Returns the new restricted function.  
**Throws**:

- <code>TypeError</code> If `fn` is not function.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to restrict. |

**Example**
```js
let num = 0;
const canOnlyFireOnce = once(() => num += 1);

canOnlyFireOnce(); // => 1
canOnlyFireOnce(); // => 1
```
