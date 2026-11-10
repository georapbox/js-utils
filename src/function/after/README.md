<a name="after"></a>

## after(n, fn) ⇒ <code>function</code>
Creates a function that invokes `fn` after it has been called
at least `n` times.

Once the threshold is reached, `fn` is invoked on every subsequent
call with the same `this` binding and arguments.
If `n` is zero or negative, `fn` is invoked on the first call.

**Kind**: global function  
**Returns**: <code>function</code> - The new function.  
**Throws**:

- <code>TypeError</code> If `n` is not an integer or `fn` is not a function.


| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | The call-count boundary. Must be an integer. |
| fn | <code>function</code> | The function to invoke. |

**Example**  
```js
const callback = after(3, () => console.log('Hello'));

callback(); // Nothing
callback(); // Nothing
callback(); // Logs 'Hello'
callback(); // Logs 'Hello'

const doSomething = after(4, () => console.log('Do something...'));

button.addEventListener('click', doSomething);
// Logs 'Do something...' from the fourth click onward.
```
