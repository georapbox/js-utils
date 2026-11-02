<a name="isElement"></a>

## isElement ⇒ <code>Boolean</code>
Checks if a value is a DOM element.

**Returns**: <code>Boolean</code> - `true` if the value is a DOM element; otherwise `false`.

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**
```js
isElement(document.body);
// => true

isElement(document.createElement('div'));
// => true

isElement(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
// => true

isElement(document);
// => false

isElement(document.createTextNode('Hello'));
// => false

isElement(null);
// => false
```
