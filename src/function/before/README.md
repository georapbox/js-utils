<a name="before"></a>

## before(n, func) ⇒ <code>function</code>
Creates a function that invokes `fn` while it’s called less than `n` times.
`fn` is invoked with the this binding and arguments of the created function.

**Returns**: <code>function</code> - Returns the new restricted function.  
**Throws**:

- <code>TypeError</code> If `n` is not number.
- <code>TypeError</code> If `fn` is not function.


| Param | Type | Description |
| --- | --- | --- |
| n | <code>Number</code> | The number of calls before `fn` is no longer invoked. A positive integer is expected. If a negative number or 0, `fn` is never invoked. If `NaN`, `-Infinity` or `Infinity`, `fn` is never invoked. |
| func | <code>function</code> | The function to restrict. |

**Example**
```js
const doSomething = before(6, () => console.log('Do something...'));

button.addEventListener('click', doSomething);
// => logs "Do something..." up to 5 times.
```
