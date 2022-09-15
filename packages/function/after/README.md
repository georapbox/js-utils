<a name="after"></a>

## after(n, fn) ⇒ <code>function</code>
Creates a function that invokes `fn` once it's called `n` or more times.
`fn` is invoked with the this binding and arguments of the created function.

**Returns**: <code>function</code> - The new restricted function.  
**Throws**:

- <code>TypeError</code> If `n` is not number.
- <code>TypeError</code> If `fn` is not function.


| Param | Type | Description |
| --- | --- | --- |
| n | <code>Number</code> | The number of calls before `fn` is invoked. A positive integer is expected. If a negative number or 0, `fn` is invoked immediately. If `NaN`, `-Infinity` or `Infinity`, `fn` is never invoked. |
| fn | <code>function</code> | The function to restrict. |

**Example**
```js
const doSomething = after(4, () => console.log('Do something...');

button.addEventListener('click', doSomething);
// => logs "Do something..." after button is clicked at least 4 times.
```
