<a name="debounce"></a>

## debounce(fn, [wait], [immediate]) ⇒ <code>function</code>
Creates a debounced function that delays invoking `fn` until `wait`
milliseconds have elapsed since its last call.

By default, `fn` is invoked on the trailing edge with the arguments
and `this` binding of the most recent call.

When `immediate` is truthy, `fn` is invoked on the leading edge instead,
and subsequent calls are ignored until the function has not been called
for `wait` milliseconds.

The debounced function always returns `undefined`.

**Kind**: global function  
**Returns**: <code>function</code> - The new debounced function.  
**Throws**:

- <code>TypeError</code> If `fn` is not a function.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>function</code> |  | The function to debounce. |
| [wait] | <code>number</code> | <code>0</code> | The delay in milliseconds. |
| [immediate] | <code>boolean</code> | <code>false</code> | Whether to invoke `fn` on the leading edge. |

**Example**  
```js
// Trailing-edge debounce
const handleResize = debounce(() => {
  console.log('Window resized');
}, 250);

window.addEventListener('resize', handleResize);

// Leading-edge debounce
const handleClick = debounce(() => {
  console.log('Button clicked');
}, 1000, true);

button.addEventListener('click', handleClick);
```
