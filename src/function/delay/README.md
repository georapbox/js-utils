<a name="delay"></a>

## delay(func, [wait], [args]) ⇒ <code>Number</code>
Invokes `func` after `wait` milliseconds.
Any additional arguments are provided to `func` when it’s invoked.

**Kind**: global function  
**Returns**: <code>Number</code> - Returns the timer's id.  
**Category**: Function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| func | <code>function</code> |  | The function to delay. |
| [wait] | <code>Number</code> | <code>0</code> | The number of milliseconds to delay invokation. |
| [args] | <code>\*</code> |  | The arguments to invoke `func` with. |

**Example**  
```js
var say = function (a, b) {
  console.log(a + ' ' + b);
};

var delayed = delay(say, 2000, 'hello', 'world');
// -> Logs 'hello world' after two seconds.
```
