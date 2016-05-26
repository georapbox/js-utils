<a name="includes"></a>

## includes(array, searchElement, [fromIndex]) ⇒ <code>Boolean</code>
Determines whether an array includes a certain element,
returning true or false as appropriate.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if array includes `searchElement`, else false.  
**Category**: Array  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array to search. |
| searchElement | <code>\*</code> |  | The element to search for. |
| [fromIndex] | <code>Number</code> | <code>0</code> | The position in the array at which to begin searching for `searchElement`.        A negative value searches from the index of `array.length + fromIndex` by ascending. |

**Example**  
```js
includes([1, 2, 3], 2);
// -> true

includes([1, 2, 3], 4);
// -> false

includes([1, 2, 3], 3, 3);
// -> false

includes([1, 2, 3], 3, -1);
// -> true

includes([1, 2, NaN, 3], NaN);
// -> true

includes([1, 2, null], null);
// -> true

includes([1, 2, undefined]);
// -> true

includes([1, 2, 0], 0);
// -> true

includes([1, 2, 0], -0);
// -> true
```
