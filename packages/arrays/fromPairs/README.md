<a name="fromPairs"></a>

## fromPairs(array) ⇒ <code>Object</code>
Creates an object composed from key-value pairs.

**Returns**: <code>Object</code> - Returns the result object.  
**Throws**:

- <code>TypeError</code> If `array` is not array.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;Array&gt;</code> | The key-value pairs array. |

**Example**  
```js
fromPairs([['Javascript', 10], ['PHP', 3], ['Java', 4]]);
// -> { 'Javascript': 10, 'PHP': 3, 'Java': 4 }
```
