<a name="normalize"></a>

## normalize(value, min, max) ⇒ <code>Number</code>
Takes a value within a range of values and converts that value
to a number from 0 to 1 that indicates where it lies in that range.

**Returns**: <code>Number</code> - The normalized value.  
**Throws**:

- <code>TypeError</code> If any of the arguments passed is not a number.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | The numerical value to normalize. |
| min | <code>Number</code> | The minimum value of the range of values. |
| max | <code>Number</code> | The maximum value of the range of values. |

**Example**  
```js
normalize(23, 0, 33);
// => 0.696969696969697

normalize(23, 5, 33);
// => 0.6428571428571429

normalize(35, 0, 33);
// => 1.0606060606060606

normalize(-1, 0, 33);
// => -0.030303030303030304

normalize(33, -5, 33);
// => 1

normalize(-5, -5, 33);
// => 0
```
