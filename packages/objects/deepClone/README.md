<a name="deepClone"></a>

## deepClone(obj) ⇒ <code>\*</code>
Creates a deep clone of a given value. Clones arrays, objects and dates.
All other types are just passed by reference. For more sophisticated deep cloning, please use
[structuredClone()](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone) that
creates a deep clone using the structured clone algorithm and covers more cases.

**Returns**: <code>\*</code> - The end result of cloning.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | The original object to deep clone. |

**Example**  
```js
var original = [{ 'a': 1 }, { 'b': 2 }];

var clone = deeClone(original);

console.log(clone[0] === original[0]);
// -> false
```
