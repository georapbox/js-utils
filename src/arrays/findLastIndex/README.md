<a name="findLastIndex"></a>

## findLastIndex(array, callback) ⇒ <code>Number</code>
Returns the index of the last element of a collection that passes the callback check.

**Kind**: global function  
**Returns**: <code>Number</code> - Returns the index of the last element that matches the callback check.  
**Category**: Array  
**Throws**:

- <code>TypeError</code> If `array` is not array.
- <code>TypeError</code> If `callback` is not function.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to check. |
| callback | <code>function</code> | The function called per iteration. |

**Example**  
```js
var heroes = [
  {name: 'Bruce Wayne', hero: 'Batman'},
  {name: 'Clark Kent', hero: 'Superman', specialPowers: ['speed', 'flying', 'strength']},
  {name: 'Peter Parker', hero: 'Spiderman', specialPowers: ['climbing']}
];

var characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'E'];
var numbers = [1, 2, 3];

findLastIndex(characters, function (chr, index, array) {
  return chr === 'E';
});
// -> 7

findLastIndex(heroes, function (hero, index, array) {
  return hero.name === 'Clark Kent';
});
// -> 1

findLastIndex(heroes, function (hero, index, array) {
  if (hero.specialPowers) {
    for (var i = 0; i < hero.specialPowers.length; i++) {
      if (hero.specialPowers[i] === 'climbing') return true;
    }
 }
});
// -> 2

findLastIndex(numbers, function (n) {
  return n > 10;
});
// -> -1
```
