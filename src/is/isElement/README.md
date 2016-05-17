<a name="isElement"></a>

## isElement(value) ⇒ <code>Boolean</code>
Checks if 'value' is a DOM element.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if 'value' is a DOM element, else false.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isElement('Lorem ipusm dolr sit amet.');
// -> false

isElement(document.body);
// -> true

isElement(document.getElementsByTagName('head')[0])
// -> true
```
