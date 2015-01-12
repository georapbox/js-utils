##findLastIndex
>Returns the index of the first element of a collection that passes the callback check, iterating the elements from **right to left**.

>If no element passes the callback check, returns -1.

####Syntax
```js
findLastIndex(array, callback)
```

- <code>array</code>

The array to check.

- <code>callback</code>

The function called per iteration.

####Example
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
// => 7

findLastIndex(heroes, function (hero, index, array) {
    return hero.name === 'Clark Kent';
});
// => 1

findLastIndex(heroes, function (hero, index, array) {
    if (hero.specialPowers) {
        for (var i = 0; i < hero.specialPowers.length; i++) {
            if (hero.specialPowers[i] === 'climbing') return true;
        }
    }
});
// => 2

findLastIndex(numbers, function (n) {
    return n > 10;
});
// => -1
```