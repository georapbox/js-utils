<a name="isFunction"></a>

## isFunction(value) ⇒ <code>Boolean</code>
Checks if a value is a function.

**Returns**: <code>Boolean</code> - True if value is a function, else returns false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isFunction(function test() {
  return 'This is test function.';
});
// => true

isFunction('This is a test function.');
// => false
```
