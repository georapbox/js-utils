### [Arrays](../) > findLastIndex

```js
findLastIndex(array, callback)
```

Returns the index of the last element of a collection that passes the callback check.
If no element passes the callback check, returns -1.

#### Arguments

- `array` _(array)_: The array to check.

- `callback` _(function)_: The function called per iteration.

#### Returns

_(number)_: The index of the last element that matches the `callback` check.

#### Examples
```js
var heroes = [
    {
        name: 'Bruce Wayne',
        hero: 'Batman'
    },
    {
        name: 'Clark Kent',
        hero: 'Superman',
        specialPowers: ['speed', 'flying', 'strength']
    },
    {
        name: 'Peter Parker',
        hero: 'Spiderman',
        specialPowers: ['climbing']
    }
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
