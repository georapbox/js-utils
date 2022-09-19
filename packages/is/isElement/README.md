<a name="isElement"></a>

## isElement(value) ⇒ <code>Boolean</code>
Checks if a value is a DOM element.

**Returns**: <code>Boolean</code> - True if 'value' is a DOM element, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isElement('Lorem ipusm dolr sit amet.');
// => false

isElement(document.body);
// => true

isElement(document.getElementsByTagName('head')[0])
// => true
```
