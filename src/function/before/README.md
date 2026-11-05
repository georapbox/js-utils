<a name="before"></a>

## before(n, fn) ⇒ <code>function</code>
Creates a function that invokes `fn` while the number of calls
is less than `n`.

The returned function preserves the caller's `this` binding and
arguments. Once the threshold is reached, subsequent calls return
the result of the last invocation without calling `fn` again.
If `n` is zero or negative, `fn` is never invoked.

**Kind**: global function  
**Returns**: <code>function</code> - The new restricted function.  
**Throws**:

- <code>TypeError</code> If `n` is not an integer or `fn` is not a function.


| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | The call-count boundary. Must be an integer. |
| fn | <code>function</code> | The function to restrict. |

**Example**  
```js
let count = 0;
const callback = before(3, () => ++count);

callback(); // => 1
callback(); // => 2
callback(); // => 2
callback(); // => 2

const doSomething = before(4, () => console.log('Do something...'));

button.addEventListener('click', doSomething);
// Logs 'Do something...' on the first 3 clicks only.
```
