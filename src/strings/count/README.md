<a name="count"></a>

## count(subjectString, searchString, [caseInsensitive]) ⇒ <code>Number</code>
Counts the occurrences of substring in a string.

**Returns**: <code>Number</code> - The number of occurrences of search string in original string.  
**Category**: String  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.
- <code>TypeError</code> If `searchString` is not string.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| subjectString | <code>String</code> |  | The string. |
| searchString | <code>String</code> |  | The string to search for. |
| [caseInsensitive] | <code>Boolean</code> | <code>false</code> | If true, the lookup is case insensitive. |

**Example**  
```js
var str = 'Lorem ipsum dolor sit | amet, consectetur - adipisicing elit. Aperiam inventore neque doloremque dolor ibus impedit ipsam, incidunt. Doloremque eveniet sit, illo, et incidunt, maiores sequi accusantium impedit aperiam officiis aspernatur nobis.';

count(str, 'dolor'));
// -> 3

count(str, 'dolor', true));
// -> 4 (case insensitive lookup)

count(str, '|'));
// -> 1

count(str, ','));
// -> 5

count(str, '');
// -> 245

count(str, {}));
// -> Throws TypeError
```
