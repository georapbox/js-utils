<a name="inRange"></a>

## inRange(num, start, end) ⇒ <code>Boolean</code>
Checks if a number is between start and up to but not including, end.
If start is greater than end the params are swapped to support negative ranges.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if number is in the range, else false.  
**Category**: Number  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | The number to check. |
| start | <code>Number</code> | The start of the range. |
| end | <code>Number</code> | The end of the range. |

**Example**  
```js
inRange(3, 2, 4);
// -> true

inRange(-3, -2, -6);
// -> true

inRange(4, 8, 2);
// -> true

inRange(4.5, 8.2, 2.1);
// -> true

inRange('4.5', '8.2', '2.1');
// -> true (arguments can be cast to type "number")

inRange(4, 8);
// -> false (all arguments are required)

inRange(4);
// -> false (all arguments are required)

inRange(4, 'b8', 'c2');
// -> false (all arguments must be of type "number")
```
