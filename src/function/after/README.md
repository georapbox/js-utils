<a name="after"></a>

## after(n, func) ⇒ <code>function</code>
Creates a function that invokes `func` once it's called `n` or more times.
`func` is invoked with the this binding and arguments of the created function.

**Kind**: global function  
**Returns**: <code>function</code> - The new restricted function.  
**Category**: Function  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>Number</code> | The number of calls before `func` is invoked.        A positive integer is expected.        If a negative number or 0, `func` is invoked immediately.        If `NaN`, `-Infinity` or `Infinity`, `func` is never invoked. |
| func | <code>function</code> | The function to restrict. |

**Example**  
```js
var doSomething = after(4, function () {
  console.log('Do something...');
});

button.addEventListener('click', doSomething);
// -> logs "Do something..." after button is clicked at least 4 times.
```
