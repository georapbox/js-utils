<a name="isPromise"></a>

## isPromise(value) ⇒ <code>Boolean</code>
Check if a value is a native ES2015 Promise.

**Returns**: <code>Boolean</code> - Returns `true` if value is a native ES2015 Promise; otherwise `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isPromise(new Promise(resolve, reject));
// => true

isPromise(Promise.resolve('Success'));
// => true

isPromise(Promise.reject('Error'));
// => true

isPromise(function () {
  return Promise.resolve('Success');
});
// => false
```
