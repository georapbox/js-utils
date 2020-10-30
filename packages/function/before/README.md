<a name="before"></a>

## before(n, func) ⇒ <code>function</code>
Creates a function that invokes `func` while it’s called less than `n` times.
`func` is invoked with the this binding and arguments of the created function.

**Returns**: <code>function</code> - Returns the new restricted function.  
**Category**: Function  
**Throws**:

- <code>TypeError</code> If `n` is not number.
- <code>TypeError</code> If `func` is not function.

| Param | Type | Description |
| --- | --- | --- |
| n | <code>Number</code> | The number of calls before `func` is no longer invoked.        A positive integer is expected.        If a negative number or 0, `func` is never invoked.        If `NaN`, `-Infinity` or `Infinity`, `func` is never invoked. |
| func | <code>function</code> | The function to restrict. |

**Example**  
```js
var doSomething = before(6, function () {
  console.log('Do something...');
});

button.addEventListener('click', doSomething);
// -> logs "Do something..." up to 5 times.
```
