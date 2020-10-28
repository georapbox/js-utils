<a name="debounce"></a>

## debounce(func, [n], [immediate]) ⇒ <code>function</code>
Returns a function, that, as long as it continues to be invoked, will not
be triggered. The function will be called after it stops being called for
'n' milliseconds. If `immediate` is passed, trigger the function on the
leading edge, instead of the trailing.

**Returns**: <code>function</code> - A new debounced function.  
**Category**: Function  
**Throws**:

- <code>TypeError</code> If `func` is not function.

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be executed. |
| [wait] | <code>Number</code> | Time of delay in milliseconds. It is required if `immediate` is used. |
| [immediate] | <code>Boolean</code> | If true or any truthy value, triggers the function on the leading edge. |

**Example**  
```js
var debouncedHandler = debounce(function () {
  // Do your thing here...
}, 250);

window.addEventListener('resize', debouncedHandler, false);
```
