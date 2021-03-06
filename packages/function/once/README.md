<a name="once"></a>

## once(func, [thisArg]) ⇒ <code>function</code>
Ensure a given functionality only runs once.

**Returns**: <code>function</code> - Returns the new restricted function.  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to restrict. |
| [thisArg] | <code>Object</code> | Value to use as this when executing <code>func</code>. |

**Example**  
```js
var num = 0;
var canOnlyFireOnce = once(function () {
  return 'Number is now ' + (num += 1);
});

canOnlyFireOnce();
// -> "Number is now 1"

canOnlyFireOnce();
// -> "Number is now 1"
```
