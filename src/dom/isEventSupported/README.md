<a name="module_isEventSupported"></a>

## isEventSupported ⇒ <code>Boolean</code>
Checks if an event is supported in a browser environment.

**Returns**: <code>Boolean</code> - True if event is supported, else false.  
**Category**: DOM  
**Throws**:

- <code>TypeError</code> If `eventName` is not string.


| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | The event to check if is supported. |
| [element] | <code>Object</code> | An HTML node to check if an event is supported on.        Some events are supported on specific elements, eg `online` is supported on `window` but not on a `div` element.        If omitted the results are cached and next calls with the same `eventName` will return the results from cache. |

**Example**  
```js
isEventSupported('submit');
// -> true - Checks on a `form` element

isEventSupported('click');
// -> true - Checks on a `div` element

isEventSupported('resize');
// -> false - Checks on a `div` element

isEventSupported('resize', window);
// -> true - Checks on a `window`

isEventSupported('keyup');
// -> true - Checks on a `div` element

isEventSupported('keyup', document.createElement('input'));
// -> true - Checks on an `input` element
```
