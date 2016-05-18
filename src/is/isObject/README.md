<a name="isObject"></a>

## isObject(value) ⇒ <code>Boolean</code>
Checks if "value" is the language type of "Object".

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if "value" is an object, else false.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isObject({});
// -> true

isObject(function test() {});
// -> true

isObject([1, 2, 3]);
// -> true

isObject('Hello World!');
// -> false

isObject(false);
// -> false

isObject(new String('Hello world'));
// -> true

isObject();
// -> false
```
