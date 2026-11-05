<a name="throttle"></a>

## throttle(fn, [wait]) ⇒ <code>function</code>
Creates a throttled function that invokes `fn` at most once per `wait`
milliseconds, apart from an initial leading-edge invocation.

The first call invokes `fn` immediately. Additional calls during the
interval schedule a trailing-edge invocation with the arguments and
`this` binding of the most recent call.

During continuous calls, `fn` executes at approximately the specified
interval. The throttled function always returns `undefined`.

**Kind**: global function  
**Returns**: <code>function</code> - The new throttled function.  
**Throws**:

- <code>TypeError</code> If `fn` is not a function.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>function</code> |  | The function to throttle. |
| [wait] | <code>number</code> | <code>0</code> | The minimum interval between invocations, in milliseconds. |

**Example**  
```js
// Limit scroll updates to approximately once every 250 milliseconds.
const handleScroll = throttle(() => {
  console.log(window.scrollY);
}, 250);

window.addEventListener('scroll', handleScroll);

// The most recent arguments are used for trailing calls.
const log = throttle(value => {
  console.log(value);
}, 100);

log('first');  // Logs 'first' immediately
log('second'); // Schedules 'second' for the trailing edge
```
