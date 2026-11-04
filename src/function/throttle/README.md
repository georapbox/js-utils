<a name="throttle"></a>

## throttle(fn, [wait]) ⇒ <code>function</code>
Limits the number of times a function can be called in a given period.

**Returns**: <code>function</code> - The throttled function.  
**Throws**:

- <code>TypeError</code> If `fn` is not function.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>function</code> |  | The function to be executed. |
| [wait] | <code>Number</code> | <code>0</code> | Optional. Default value is 0. Time of delay in milliseconds. |

**Example**
```js
// A method that should be called no more than 4 times per second.
const throttledHandler = throttle(() => {
  // Do your thing here...
}, 250);

window.addEventListener('resize', throttledHandler, false);
```
