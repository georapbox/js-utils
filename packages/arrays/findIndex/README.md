<a name="findIndex"></a>

## findIndex(array, callback, [thisArg]) ⇒ <code>Number</code>
Returns the index of the first element that passes the callback check.
If no element passes the callback check, returns -1.

**Returns**: <code>Number</code> - Returns the index of the first element that matches the callback check.  
**Throws**:

- <code>TypeError</code> If `array` is not array.
- <code>TypeError</code> If `callback` is not function.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to check. |
| callback | <code>function</code> | The function called per iteration. |
| [thisArg] | <code>*</code> | Optional object to use as `this` when executing the callback function. |

**Example**
```js
const heroes = [
  {name: 'Bruce Wayne', hero: 'Batman'},
  {name: 'Clark Kent', hero: 'Superman', specialPowers: ['speed', 'flying', 'strength']},
  {name: 'Peter Parker', hero: 'Spiderman', specialPowers: ['climbing']}
];

const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const numbers = [1, 2, 3];

findIndex(characters, function (chr, index, array) {
  return chr === 'E';
});
// -> 4

findIndex(heroes, function (hero, index, array) {
  return hero.name === 'Clark Kent';
});
// -> 1

findIndex(heroes, function (hero, index, array) {
  if (hero.specialPowers) {
    for (let i = 0; i < hero.specialPowers.length; i++) {
      if (hero.specialPowers[i] === 'climbing') return true;
    }
  }
});
// -> 2

findIndex(numbers, function (n) {
  return n > 10;
});
// -> -1
```
